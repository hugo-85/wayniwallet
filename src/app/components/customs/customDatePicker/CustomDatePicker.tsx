import { FC, useRef } from "react";
import DatePicker from "react-datepicker";
import CalendarIcon from "@/app/svgs/CalendarIcon";

interface CustomDatePickerProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const ref = useRef<DatePicker | null>(null);

  return (
    <div className="flex items-center gap-2">
      {selectedDate && (
        <button
          className="text-2xl font-bold cursor-pointer transition-all duration-150
                hover:bg-gray-200 hover:bg-opacity-60 hover:rounded-full focus:outline-none w-6 h-6 flex items-center justify-center"
          onClick={() => onDateChange(null)}
        >
          x
        </button>
      )}
      <DatePicker
        ref={ref}
        selected={selectedDate}
        onChange={(date) => onDateChange(date)}
        className={`outline-0 field-sizing-content`}
      />
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => ref.current?.setOpen(true)}
      >
        <CalendarIcon />
      </button>
    </div>
  );
};

export default CustomDatePicker;
