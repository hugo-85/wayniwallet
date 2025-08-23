"use client";

import { FC, useState, useEffect } from "react";
import WifiIcon from "../../svgs/WifiIcon";
import SignalIcon from "@/app/svgs/SignalIcon";
import Battery100Icon from "@/app/svgs/Battery100Icon";

const initialTime = new Date().toLocaleTimeString("es-AR", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});
const cleanTime = (t: string) => t.replace(/^0/, "");

const CellBar: FC = () => {
  const [time, setTime] = useState<string>(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("es-AR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex text-white text-white-500 justify-between pt-3 pb-6 px-10">
      <div className="flex justify-center items-center font-bold text-1xl">
        {cleanTime(time)}
      </div>
      <div className="flex gap-2 items-center">
        <SignalIcon />
        <WifiIcon />
        <Battery100Icon />
      </div>
    </nav>
  );
};

export default CellBar;
