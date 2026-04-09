import { ArrowRight, Truck, RefreshCcw, ShieldCheck, Headphones } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-white">
      <section className="max-w-[1320px] mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* --- Main Xbox Banner (Left 8 columns) --- */}
          <div className="lg:col-span-8 bg-[#F2F4F5] rounded-sm p-12 flex items-center relative overflow-hidden h-[500px]">
            <div className="z-10 max-w-md">
              <div className="flex items-center gap-2 text-[#2DA5F3] font-bold text-sm mb-4">
                <span className="w-8 h-[2px] bg-[#2DA5F3]"></span> THE BEST PLACE TO PLAY
              </div>
              <h1 className="text-5xl font-bold text-clicon-black leading-tight mb-4">
                Xbox Consoles
              </h1>
              <p className="text-gray-500 mb-8 text-lg">
                Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
              </p>
              <button className="bg-clicon-orange text-white px-8 py-4 rounded-sm font-bold uppercase flex items-center gap-2 hover:bg-orange-600 transition shadow-lg shadow-orange-200 cursor-pointer">
                Shop Now <ArrowRight size={20} />
              </button>
            </div>
            
            {/* Main Product Image - Use your local PNG here */}
            <img 
              src="/Img.png" 
              alt="Xbox Console" 
              className="absolute right-10 bottom-10 w-[420px] object-contain drop-shadow-2xl"
            />
            
            {/* Blue Price Badge */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-[#2DA5F3] rounded-full border-[6px] border-white flex flex-col items-center justify-center text-white font-bold shadow-lg">
              <span className="text-2xl">$299</span>
            </div>
            
            {/* Pagination Dots */}
            <div className="absolute bottom-10 left-12 flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-clicon-black"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* --- Right Side Banners (Right 4 columns) --- */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Top Side Banner (Summer Sales) */}
            <div className="bg-clicon-black rounded-sm p-8 h-[238px] relative overflow-hidden flex flex-col justify-center">
              <div className="z-10">
                <p className="text-[#F3DE2C] font-bold text-xs mb-2 uppercase tracking-wider">Summer Sales</p>
                <h3 className="text-2xl font-bold text-white mb-1">New Google</h3>
                <h3 className="text-2xl font-bold text-white mb-4">Pixel 6 Pro</h3>
                <button className="bg-clicon-orange text-white px-5 py-2.5 rounded-sm font-bold uppercase text-xs flex items-center gap-2 hover:bg-orange-600 transition">
                  Shop Now <ArrowRight size={16} />
                </button>
              </div>
              <span className="absolute top-4 right-4 bg-[#F3DE2C] text-black px-3 py-1 font-bold text-xs rounded-sm">29% OFF</span>
              <img src="/SmartPhone.png" alt="Pixel 6" className="absolute -right-5 bottom-0 h-40 object-contain" />
            </div>

            {/* Bottom Side Banner (Xiaomi Earbuds) */}
            <div className="bg-[#F2F4F5] rounded-sm p-8 h-[238px] relative overflow-hidden flex items-center">
              <div className="z-10">
                <h3 className="text-xl font-bold text-clicon-black mb-1">Xiaomi</h3>
                <h3 className="text-xl font-bold text-clicon-black mb-2">FlipBuds Pro</h3>
                <p className="text-[#2DA5F3] font-bold mb-4">$299 USD</p>
                <button className="bg-clicon-orange text-white px-5 py-2.5 rounded-sm font-bold uppercase text-xs flex items-center gap-2 hover:bg-orange-600 transition">
                  Shop Now <ArrowRight size={16} />
                </button>
              </div>
              <img src="/FlipBuds.png" alt="Earbuds" className="absolute -right-2 bottom-4 h-32 object-contain" />
            </div>

          </div>
        </div>
      </section>

      {/* --- Features Bar (Directly under Hero) --- */}
      <section className="max-w-[1320px] mx-auto px-6 pb-12">
        <div className="border border-gray-100 rounded-sm p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-white">
          <FeatureItem icon={<Truck size={32} className="text-clicon-black" />} title="Fasted Delivery" desc="Delivery in 24/H" />
          <FeatureItem icon={<RefreshCcw size={32} className="text-clicon-black" />} title="24 Hours Return" desc="100% money-back guarantee" />
          <FeatureItem icon={<ShieldCheck size={32} className="text-clicon-black" />} title="Secure Payment" desc="Your money is safe" />
          <FeatureItem icon={<Headphones size={32} className="text-clicon-black" />} title="Support 24/7" desc="Live contact/message" />
        </div>
      </section>
    </div>
  );
};

const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4 border-r border-gray-100 last:border-0 pr-4">
    {icon}
    <div>
      <h4 className="font-bold text-sm uppercase tracking-tight">{title}</h4>
      <p className="text-gray-400 text-[12px] mt-0.5">{desc}</p>
    </div>
  </div>
);

export default HeroSection;


