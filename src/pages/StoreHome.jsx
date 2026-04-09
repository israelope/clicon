import HeroSection from '../components/store/HeroSection'; // Replace with code from Step 2
import BestDeals from '../components/store/BestDeal';
import CategorySlider from '../components/store/CategorySlider';
import FeaturedProducts from '../components/store/FeaturedProducts';
import ComputerAccessories from '../components/store/ComputerAccessories';
import LatestNews from '../components/store/LatestNews';

const StoreHome = () => {
  return (
    <div className="bg-white overflow-hidden">
      <HeroSection />
      <BestDeals />
      <CategorySlider />
      <FeaturedProducts />
      <ComputerAccessories />
      <LatestNews />
    </div>
  );
};

export default StoreHome;