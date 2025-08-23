"use client";

import { useParams } from "next/navigation";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import HeadPage from "../../components/HeadPage/HeadPage";
import { useUser } from "@/app/hooks/useUser";
import SendForm from "@/app/components/sendForm/SendForm";

export default function SendsPage() {
  const { id } = useParams();
  const { data } = useUser(id as string);

  return (
    <>
      <HeadPage title="Send again" showBalance />
      <ContentWrapper>{data && <SendForm user={data} />}</ContentWrapper>
    </>
  );
}
