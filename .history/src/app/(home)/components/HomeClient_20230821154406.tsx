import BannerSlide from "@/components/bannerslide";
import Container from "@/components/container";

const HomeClient = () => {
  return (
    <Container>
      <div className="px-4 sm:px-6 lg:px-8">
        <BannerSlide />
      </div>
    </Container>
  );
};

export default HomeClient;
