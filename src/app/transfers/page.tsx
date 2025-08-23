import ContentHeader from "../components/contentHeader/ContentHeader";
import ContentWrapper from "../components/contentWrapper/ContentWrapper";
import HeadPage from "../components/HeadPage/HeadPage";
import LatestTransfers from "../components/latestTransfers/LatestTransfers";

export default function TransfersPage() {
  return (
    <>
      <HeadPage title="Transfers" />
      <ContentWrapper>
        <ContentHeader title="Latest Transfers" />
        <LatestTransfers />
      </ContentWrapper>
    </>
  );
}
