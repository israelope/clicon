import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import { COMPUTER_ACCESSORIES_DATA } from '../../data';

const ComputerAccessories = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-[1320px] mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* --- Left Content: Title + Grid --- */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-clicon-black">Computer Accessories</h2>
            <div className="flex gap-6 text-sm font-medium text-gray-400">
              <span onClick={() => navigate('/shop')} className="text-black border-b-2 border-clicon-orange pb-1 cursor-pointer">All Product</span>
              <span onClick={() => navigate('/shop?cat=keyboard')} className="hover:text-black cursor-pointer transition">Keyboard & Mouse</span>
              <span onClick={() => navigate('/shop?cat=headphone')} className="hover:text-black cursor-pointer transition">Headphone</span>
              <span onClick={() => navigate('/shop?cat=webcam')} className="hover:text-black cursor-pointer transition">Webcam</span>
              <span onClick={() => navigate('/shop?cat=printer')} className="hover:text-black cursor-pointer transition">Printer</span>
              <button 
                onClick={() => navigate('/shop')}
                className="text-clicon-orange flex items-center gap-1 font-semibold ml-4 hover:gap-2 transition-all"
              >
                Browse All Product <ArrowRight size={14}/>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-100">
             {/* --- ADDED .slice(0, 8) HERE --- */}
             {COMPUTER_ACCESSORIES_DATA.slice(0, 8).map((product) => (
               <StandardCard 
                key={product.id}
                id={product.id}
                tag={product.tag}
                badge={product.badge}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.rating}
                image={product.image}
                onClick={() => navigate(`/product/${product.id}`)}
               />
             ))}
          </div>
        </div>

        {/* --- Right Content: Vertical Banners --- */}
        <div className="w-full lg:w-[312px] flex flex-col gap-6">
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
            <button 
              onClick={() => navigate('/shop')} 
              className="w-full bg-clicon-orange text-white py-3 rounded-sm font-bold uppercase text-xs flex items-center justify-center gap-2 hover:bg-orange-600 transition"
            >
              Shop Now <ArrowRight size={16} />
            </button>
          </div>

          <div className="bg-[#124261] p-8 rounded-sm text-center flex flex-col items-center justify-center h-[350px] relative overflow-hidden">
             <div className="z-10">
                <span className="bg-[#303639] text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase mb-4 inline-block">Summer Sales</span>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">37% DISCOUNT</h3>
                <p className="text-white/70 text-sm mb-6">only for <span className="text-clicon-yellow font-bold">SmartPhone</span> product.</p>
                <button 
                  onClick={() => navigate('/shop?cat=smartphone')} 
                  className="bg-[#2DA5F3] text-white px-8 py-3 rounded-sm font-bold uppercase text-xs flex items-center justify-center gap-2 mx-auto hover:bg-blue-500 transition"
                >
                  Shop Now <ArrowRight size={16} />
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* --- HUGE MACBOOK PRO BANNER --- */}
      <div className="mt-16 bg-[#FFE7D6] rounded-sm p-12 flex items-center relative overflow-hidden h-[450px]">
        <div className="z-10 max-w-lg">
          <span className="bg-[#2DA5F3] text-white text-[12px] font-bold px-3 py-1 rounded-sm mb-6 inline-block uppercase">Save up to $200.00</span>
          <h2 className="text-5xl font-bold text-clicon-black leading-tight mb-4">Macbook Pro</h2>
          <p className="text-clicon-gray text-lg mb-8 leading-relaxed">
            Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
          </p>
          <button 
            onClick={() => navigate('/shop')} 
            className="bg-clicon-orange text-white px-10 py-4 rounded-sm font-bold uppercase flex items-center gap-2 hover:bg-orange-600 transition shadow-lg shadow-orange-200"
          >
            Shop Now <ArrowRight size={22} />
          </button>
        </div>
        
        <img src="/Ma.png" alt="Macbook Pro" className="absolute right-0 bottom-0 w-[600px] object-contain" />
        
        <div className="absolute top-16 right-[500px] w-28 h-28 bg-[#FFE7D6] rounded-full border-[6px] border-white flex items-center justify-center text-clicon-black font-bold text-2xl shadow-xl z-20">
          $1999
        </div>
      </div>
    </section>
  );
};

const StandardCard = ({ tag, badge, name, price, oldPrice, rating, image, onClick }) => (
  <div 
    onClick={onClick} 
    className="p-4 border-r border-b border-gray-100 hover:shadow-2xl transition-all relative group cursor-pointer bg-white"
  >
    {tag && <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-sm z-10">{tag}</span>}
    {badge && (
      <span className={`${badge.includes('OFF') ? 'bg-[#F3DE2C] text-black' : 'bg-blue-500 text-white'} absolute top-4 left-4 text-[10px] font-bold px-2 py-1 rounded-sm uppercase z-10`}>
        {badge}
      </span>
    )}
    
    <div className="relative h-40 mb-4 flex items-center justify-center">
      <img 
        src={image || "https://via.placeholder.com/150"} 
        alt={name} 
        className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-300" 
      />
      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300 bg-white/40">
        <div className="bg-white p-2.5 rounded-full shadow-lg text-black hover:bg-clicon-orange hover:text-white transition"><Heart size={20}/></div>
        <div className="bg-clicon-orange p-2.5 rounded-full shadow-lg text-white hover:bg-orange-600 transition"><ShoppingCart size={20}/></div>
        <div className="bg-white p-2.5 rounded-full shadow-lg text-black hover:bg-clicon-orange hover:text-white transition"><Eye size={20}/></div>
      </div>
    </div>

    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} fill={i < rating ? "#FA8232" : "none"} color={i < rating ? "#FA8232" : "#CBD5E1"} />
      ))}
      <span className="text-gray-400 text-[10px]">(647)</span>
    </div>
    
    <h3 className="text-xs font-medium mb-2 line-clamp-2 h-8 leading-relaxed text-clicon-black group-hover:text-clicon-orange transition-colors">
      {name}
    </h3>
    <div className="flex items-center gap-2">
      {oldPrice && <span className="text-gray-400 line-through text-xs">${oldPrice}</span>}
      <span className="text-clicon-blue font-bold text-sm">${price}</span>
    </div>
  </div>
);

export default ComputerAccessories;