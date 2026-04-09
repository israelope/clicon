import { ArrowRight, ShoppingCart, Heart, Eye, Star } from 'lucide-react';

const ComputerAccessories = () => {
  return (
    <section className="max-w-[1320px] mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* --- Left Content: Title + Grid --- */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-clicon-black">Computer Accessories</h2>
            <div className="flex gap-6 text-sm font-medium text-gray-400">
              <span className="text-black border-b-2 border-clicon-orange pb-1 cursor-pointer">All Product</span>
              <span className="hover:text-black cursor-pointer">Keyboard & Mouse</span>
              <span className="hover:text-black cursor-pointer">Headphone</span>
              <span className="hover:text-black cursor-pointer">Webcam</span>
              <span className="hover:text-black cursor-pointer">Printer</span>
              <button className="text-clicon-orange flex items-center gap-1 font-semibold ml-4">
                Browse All Product <ArrowRight size={14}/>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-100">
             <StandardCard badge="BEST DEALS" name="Amazon Basics High-Speed HDMI Cable" price="360" rating="5" />
             <StandardCard name="Portable Washing Machine, 11lbs capacity" price="80" rating="4" />
             <StandardCard tag="HOT" name="TOZO T6 True Wireless Earbuds" price="70" rating="5" />
             <StandardCard name="Dell Optiplex 7000x7480 All-in-One Monitor" price="250" rating="5" />
             <StandardCard name="Samsung Electronics Samsung Galaxy S21 5G" price="2,300" rating="4" />
             <StandardCard badge="SALE" name="4K UHD LED Smart TV with Chromecast" price="220" rating="4" />
             <StandardCard name="Wired Over-Ear Gaming Headphones" price="1,500" rating="5" />
             <StandardCard badge="25% OFF" name="Polaroid 57-Inch Photo/Video Tripod" price="1,200" oldPrice="1600" rating="4" />
          </div>
        </div>

        {/* --- Right Content: Vertical Banners --- */}
        <div className="w-full lg:w-[312px] flex flex-col gap-6">
          {/* Yellow Xiaomi Earbuds Banner */}
          <div className="bg-[#F3DE2C]/30 border border-[#F3DE2C] p-8 rounded-sm text-center flex flex-col items-center justify-center h-[410px]">
            <img src="/FlipBuds.png" width={120} height={120} alt="earbuds" className="mb-6 object-contain" />
            <h3 className="text-xl font-bold text-clicon-black mb-2 leading-tight">Xiaomi True Wireless Earbuds</h3>
            <p className="text-gray-600 text-xs mb-4 px-4 leading-relaxed">
              Escape the noise, it's time to hear the magic with Xiaomi Earbuds.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs text-gray-500">Only for:</span>
              <span className="bg-white px-3 py-1 font-bold text-sm rounded-sm border border-gray-100">$299 USD</span>
            </div>
            <button className="w-full bg-clicon-orange text-white py-3 rounded-sm font-bold uppercase text-xs flex items-center justify-center gap-2">
              Shop Now <ArrowRight size={16} />
            </button>
          </div>

          {/* Blue Discount Banner */}
          <div className="bg-[#124261] p-8 rounded-sm text-center flex flex-col items-center justify-center h-[350px] relative overflow-hidden">
             <div className="z-10">
                <span className="bg-[#303639] text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase mb-4 inline-block">Summer Sales</span>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">37% DISCOUNT</h3>
                <p className="text-white/70 text-sm mb-6">only for <span className="text-clicon-yellow font-bold">SmartPhone</span> product.</p>
                <button className="bg-[#2DA5F3] text-white px-8 py-3 rounded-sm font-bold uppercase text-xs flex items-center justify-center gap-2 mx-auto">
                  Shop Now <ArrowRight size={16} />
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* --- HUGE MACBOOK PRO BANNER (Bottom) --- */}
      <div className="mt-16 bg-[#FFE7D6] rounded-sm p-12 flex items-center relative overflow-hidden h-[450px]">
        <div className="z-10 max-w-lg">
          <span className="bg-[#2DA5F3] text-white text-[12px] font-bold px-3 py-1 rounded-sm mb-6 inline-block">SAVE UP TO $200.00</span>
          <h2 className="text-5xl font-bold text-clicon-black leading-tight mb-4">Macbook Pro</h2>
          <p className="text-clicon-gray text-lg mb-8 leading-relaxed">
            Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
          </p>
          <button className="bg-clicon-orange text-white px-10 py-4 rounded-sm font-bold uppercase flex items-center gap-2 hover:bg-orange-600 transition shadow-lg shadow-orange-200">
            Shop Now <ArrowRight size={22} />
          </button>
        </div>
        
        {/* Product Image */}
        <img 
          src="/Ma.png" 
          alt="Macbook Pro" 
          className="absolute right-0 bottom-0 w-[600px] object-contain"
        />
        
        {/* Floating Price Circle */}
        <div className="absolute top-16 right-[500px] w-28 h-28 bg-[#FFE7D6] rounded-full border-[6px] border-white flex items-center justify-center text-clicon-black font-bold text-2xl shadow-xl z-20">
          $1999
        </div>
      </div>
    </section>
  );
};

/* Using the StandardCard from Step 3 */
const StandardCard = ({ tag, badge, name, price, oldPrice, rating }) => (
  <div className="p-4 border-r border-b border-gray-100 hover:shadow-2xl transition relative group cursor-pointer bg-white">
    {tag && <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-sm">{tag}</span>}
    {badge && <span className={`${badge.includes('OFF') ? 'bg-[#F3DE2C] text-black' : 'bg-blue-500 text-white'} absolute top-4 left-4 text-[10px] font-bold px-2 py-1 rounded-sm uppercase`}>{badge}</span>}
    
    <div className="relative h-40 mb-4">
      <img src="https://via.placeholder.com/150" alt="product" className="w-full h-full object-contain" />
      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="bg-white p-2.5 rounded-full shadow-lg text-black hover:bg-clicon-orange hover:text-white transition"><Heart size={20}/></div>
        <div className="bg-clicon-orange p-2.5 rounded-full shadow-lg text-white"><ShoppingCart size={20}/></div>
        <div className="bg-white p-2.5 rounded-full shadow-lg text-black hover:bg-clicon-orange hover:text-white transition"><Eye size={20}/></div>
      </div>
    </div>

    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} fill={i < rating ? "#FA8232" : "none"} color={i < rating ? "#FA8232" : "#CBD5E1"} />
      ))}
      <span className="text-gray-400 text-[10px]">(647)</span>
    </div>
    
    <h3 className="text-xs font-medium mb-2 line-clamp-2 h-8 leading-relaxed">{name}</h3>
    <div className="flex gap-2">
      {oldPrice && <span className="text-gray-400 line-through text-sm">${oldPrice}</span>}
      <span className="text-blue-500 font-bold text-sm">${price}</span>
    </div>
  </div>
);

export default ComputerAccessories;