import { FC } from "react";
import DetailItem from "../detailItem/DetailItem";

interface ProfileDataProps {
  city: string;
  state: string;
  street: string;
  email: string;
  phone: string;
}

const ProfileData: FC<ProfileDataProps> = ({
  city,
  state,
  street,
  email,
  phone,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <DetailItem label="City" value={city} />
      <DetailItem label="State" value={state} />
      <DetailItem label="Street" value={street} />
      <DetailItem label="Email" value={email} />
      <DetailItem label="Phone" value={phone} />
    </div>
  );
};

export default ProfileData;
