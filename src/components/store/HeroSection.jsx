import { useState, useEffect } from 'react';
import { 
  ArrowRight, Truck, RefreshCcw, ShieldCheck, Headphones, 
  ChevronRight, Laptop, Smartphone, Headphones as HeadphoneIcon, 
  Gamepad2, Camera, Tv, Watch, MapPin, Activity 
} from 'lucide-react';

// 1. IMPORT YOUR DATA HERE
import { HERO_SLIDES_DATA } from '../../data'; 

// --- Paste these at the bottom of HeroSection.jsx ---

// Helper for the Sidebar Links
const CategoryLink = ({ icon, name, hasSub }) => (
  <div className="flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 cursor-pointer group transition">
    <div className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-clicon-orange">
      <div className="text-gray-400 group-hover:text-clicon-orange transition-colors">
        {icon}
      </div>
      <span className="font-medium">{name}</span>
    </div>
    {hasSub && <ChevronRight size={14} className="text-gray-400 group-hover:text-clicon-orange" />}
  </div>
);

// Helper for the Features Bar at the bottom
const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4 border-r border-gray-100 last:border-0 pr-4">
    <div className="text-clicon-black flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-sm uppercase tracking-tight text-clicon-black">{title}</h4>
      <p className="text-gray-400 text-[12px] mt-0.5">{desc}</p>
    </div>
  </div>
);

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 2. AUTO-SLIDE LOGIC (Using the imported data length)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === HERO_SLIDES_DATA.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
      <section className="max-w-[1320px] mx-auto px-6 py-6">
        <div className="flex gap-6">
          
          {/* --- LEFT SIDEBAR --- */}
          <div className="hidden lg:block w-[280px] flex-shrink-0 border border-gray-100 rounded-sm py-2">
            <CategoryLink icon={<Laptop size={18}/>} name="Computer & Laptop" />
            <CategoryLink icon={<Smartphone size={18}/>} name="Computer Accessories" />
            <CategoryLink icon={<Smartphone size={18}/>} name="SmartPhone" hasSub />
            <CategoryLink icon={<HeadphoneIcon size={18}/>} name="Headphone" />
            <CategoryLink icon={<Activity size={18}/>} name="Mobile Accessories" />
            <CategoryLink icon={<Gamepad2 size={18}/>} name="Gaming Console" />
            <CategoryLink icon={<Camera size={18}/>} name="Camera & Photo" />
            <CategoryLink icon={<Tv size={18}/>} name="TV & Homes Appliances" />
            <CategoryLink icon={<Watch size={18}/>} name="Watchs & Accessories" />
            <CategoryLink icon={<MapPin size={18}/>} name="GPS & Navigation" />
            <CategoryLink icon={<Activity size={18}/>} name="Warable Technology" />
          </div>

          {/* --- RIGHT SIDE: HERO CONTENT --- */}
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* MAIN SLIDING CAROUSEL */}
              <div className="lg:col-span-2 relative rounded-sm overflow-hidden h-[500px] transition-all duration-700">
                {/* 3. MAPPING OVER THE DATA FROM DATA.JS */}
                {HERO_SLIDES_DATA.map((slide, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    } ${slide.color}`}
                  >
                    <div className="flex h-full items-center px-12 gap-8">
                      {/* Left Content */}
                      <div className="flex-1 z-10">
                        <div className="flex items-center gap-2 text-[#2DA5F3] font-bold text-sm mb-4">
                          <span className="w-8 h-[2px] bg-[#2DA5F3]"></span> {slide.subtitle}
                        </div>
                        <h1 className="text-5xl font-bold text-clicon-black leading-tight mb-4">
                          {slide.title}
                        </h1>
                        <p className="text-gray-500 mb-8 text-lg max-w-[320px]">
                          {slide.desc}
                        </p>
                        <button className="bg-clicon-orange text-white px-8 py-4 rounded-sm font-bold uppercase flex items-center gap-2 hover:bg-orange-600 transition shadow-lg shadow-orange-200">
                          Shop Now <ArrowRight size={20} />
                        </button>
                      </div>

                      {/* Right Image */}
                      <div className="flex-1 relative h-full flex items-center justify-center">
                        <img 
                          src={slide.image} 
                          alt={slide.title} 
                          className="max-h-[80%] object-contain drop-shadow-2xl z-10" 
                        />
                        <div className="absolute top-10 right-0 w-24 h-24 bg-[#2DA5F3] rounded-full border-[6px] border-white flex items-center justify-center text-white font-bold text-2xl shadow-lg z-20">
                          {slide.price}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* SLIDER DOTS */}
                <div className="absolute bottom-10 left-12 flex gap-2 z-30">
                  {HERO_SLIDES_DATA.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setCurrentSlide(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentSlide ? 'bg-clicon-black' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>

              {/* STATIC BANNERS (Keep these simple or add to data.js if you want) */}
              <div className="flex flex-col gap-6">
                <div className="bg-clicon-black rounded-sm p-8 h-[238px] relative overflow-hidden flex flex-col justify-center">
                  <div className="z-10">
                    <p className="text-[#F3DE2C] font-bold text-xs mb-2 uppercase">Summer Sales</p>
                    <h3 className="text-2xl font-bold text-white mb-4">New Google <br/> Pixel 6 Pro</h3>
                    <button className="bg-clicon-orange text-white px-5 py-2.5 rounded-sm font-bold uppercase text-xs flex items-center gap-2">
                      Shop Now <ArrowRight size={16} />
                    </button>
                  </div>
                  <span className="absolute top-4 right-4 bg-[#F3DE2C] text-black px-3 py-1 font-bold text-xs rounded-sm">29% OFF</span>
                  <img src="/SmartPhone.png" alt="Pixel" className="absolute -right-5 bottom-0 h-40 object-contain" />
                </div>

                <div className="bg-[#F2F4F5] rounded-sm p-8 h-[238px] relative overflow-hidden flex items-center">
                  <div className="z-10">
                    <h3 className="text-xl font-bold text-clicon-black mb-1">Xiaomi <br/> FlipBuds Pro</h3>
                    <p className="text-[#2DA5F3] font-bold mb-4">$299 USD</p>
                    <button className="bg-clicon-orange text-white px-5 py-2.5 rounded-sm font-bold uppercase text-xs flex items-center gap-2">
                      Shop Now <ArrowRight size={16} />
                    </button>
                  </div>
                  <img src="/FlipBuds.png" alt="Earbuds" className="absolute -right-2 bottom-4 h-32 object-contain" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES BAR --- */}
      <section className="max-w-[1320px] mx-auto px-6 pb-12">
        <div className="border border-gray-100 rounded-sm p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-white">
          <FeatureItem icon={<Truck size={32}/>} title="Fasted Delivery" desc="Delivery in 24/H" />
          <FeatureItem icon={<RefreshCcw size={32}/>} title="24 Hours Return" desc="100% money-back guarantee" />
          <FeatureItem icon={<ShieldCheck size={32}/>} title="Secure Payment" desc="Your money is safe" />
          <FeatureItem icon={<Headphones size={32}/>} title="Support 24/7" desc="Live contact/message" />
        </div>
      </section>
    </div>
  );
};

// ... CategoryLink and FeatureItem helpers remain the same ...

export default HeroSection;

