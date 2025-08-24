import ContentHeader from "./components/contentHeader/ContentHeader";
import ContentWrapper from "./components/contentWrapper/ContentWrapper";
import FooterBar from "./components/footerBar/FooterBar";
import Home from "./components/home/Home";
import Welcome from "./components/welcome/Welcome";

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ContentWrapper>
        <ContentHeader title="Send Again" />
        <Home />
      </ContentWrapper>
      <FooterBar />
    </>
  );
}
