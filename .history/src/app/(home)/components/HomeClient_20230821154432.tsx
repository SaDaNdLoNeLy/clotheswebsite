import HomepageSearch from "@/components/HomepageSearch";
import BannerSlide from "@/components/bannerslide";
import Collection from "@/components/collection";
import Container from "@/components/container";

const HomeClient = () => {
  return (
    <Container>
      <div className="px-4 sm:px-6 lg:px-8">
        <BannerSlide />
        <HomepageSearch />
        <Collection />
      </div>
    </Container>
  );
};

export default HomeClient;
