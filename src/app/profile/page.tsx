import ContentWrapper from "../components/contentWrapper/ContentWrapper";
import HeadPage from "../components/HeadPage/HeadPage";
import Profile from "../components/profile/Profile";

export default function ProfilePage() {
  return (
    <>
      <HeadPage title="Profile" />
      <ContentWrapper>
        <Profile />
      </ContentWrapper>
    </>
  );
}
