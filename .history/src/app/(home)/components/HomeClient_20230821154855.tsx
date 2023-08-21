import Container from "@/components/container";
import BannerSlide from "@/components/shopwebui/bannerslide";
import HomepageSearch from "@/components/shopwebui/HomepageSearch";
import Collection from "@/components/shopwebui/collection";

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
