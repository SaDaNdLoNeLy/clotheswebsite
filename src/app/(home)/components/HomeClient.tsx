import Container from "@/components/container";
import BannerSlide from "@/components/shopwebui/bannerslide";
import HomepageSearch from "@/components/shopwebui/HomepageSearch";
import Collection from "@/components/shopwebui/collection";
import FeatureProduct from "@/components/shopwebui/featureproduct/featureproduct";

const HomeClient = () => {
  return (
    <Container>
      <div className="px-4 sm:px-6 lg:px-8">
        <BannerSlide />
        <HomepageSearch />
        <Collection />
        <FeatureProduct />
      </div>
    </Container>
  );
};

export default HomeClient;
