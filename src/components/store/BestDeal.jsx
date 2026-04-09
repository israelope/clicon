import { ArrowRight, ShoppingCart, Heart, Eye, Star } from 'lucide-react';
// Ensure the path to your data file is correct
import { BEST_DEALS_DATA } from '../../data';

const BestDeals = () => {
  return (
    <section className="max-w-[1320px] mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h2 className="text-2xl font-bold text-clicon-black">Best Deals</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Deals ends in</span>
            <div className="bg-[#F3DE2C] px-3 py-1 font-bold text-sm rounded-sm">
              16d : 21h : 57m : 23s
            </div>
          </div>
        </div>
        <button className="text-clicon-blue font-semibold text-sm flex items-center gap-1 group hover:underline">
          Browse All Product <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border border-gray-100 rounded-sm overflow-hidden bg-white">
        
        {/* --- Large Featured Deal (Static or first item) --- */}
        <div className="lg:col-span-1 p-6 border-r border-gray-100 group relative">
          <div className="relative mb-4">
             <span className="bg-[#F3DE2C] text-black text-[10px] font-bold px-2 py-1 rounded-sm absolute top-0 left-0 z-10">32% OFF</span>
             <span className="bg-[#EE5858] text-white text-[10px] font-bold px-2 py-1 rounded-sm absolute top-7 left-0 uppercase z-10">Hot</span>
             <img src="/Console.png" alt="Featured" className="w-full h-64 object-contain group-hover:scale-105 transition duration-500" />
          </div>
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#FA8232" color="#FA8232" />)}
            <span className="text-gray-400 text-xs">(52,677)</span>
          </div>
          <h3 className="font-medium text-sm mb-2 leading-relaxed text-clicon-black">
            Xbox Series S - 512GB SSD Console with Wireless Controller - EU Version...
          </h3>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-400 line-through text-sm">$865.99</span>
            <span className="text-clicon-blue font-bold text-lg">$442.12</span>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed mb-6">
            Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.
          </p>
          <div className="flex gap-2">
             <button className="bg-[#FFE7D6] p-3 rounded-sm text-clicon-orange hover:bg-clicon-orange hover:text-white transition"><Heart size={20}/></button>
             <button className="flex-1 bg-clicon-orange text-white py-3 rounded-sm font-bold uppercase text-xs flex items-center justify-center gap-2 hover:bg-orange-600 transition">
               <ShoppingCart size={18}/> Add to Cart
             </button>
             <button className="bg-[#FFE7D6] p-3 rounded-sm text-clicon-orange hover:bg-clicon-orange hover:text-white transition"><Eye size={20}/></button>
          </div>
        </div>

        {/* --- Small Deals Grid (Dynamic 8 slots) --- */}
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4">
           {BEST_DEALS_DATA.slice(0, 8).map((product) => (
             <SmallProductCard 
                key={product.id}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                discount={product.discount}
                status={product.status}
                image={product.image}
             />
           ))}
        </div>
      </div>
    </section>
  );
};

/* Reusable Small Product Card */
const SmallProductCard = ({ name, price, oldPrice, discount, status, image }) => (
  <div className="p-4 border-r border-b border-gray-100 hover:shadow-xl transition-all relative group bg-white flex flex-col justify-between">
    <div>
      {discount && <span className="bg-[#F3DE2C] text-black text-[10px] font-bold px-2 py-1 rounded-sm absolute top-4 left-4 z-10">{discount}</span>}
      {status && <span className="bg-gray-400 text-white text-[10px] font-bold px-2 py-1 rounded-sm absolute top-4 left-4 uppercase z-10">{status}</span>}
      
      {/* Hover Actions */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
         <div className="bg-clicon-orange p-2 rounded-full text-white cursor-pointer hover:bg-orange-600 shadow-lg"><Heart size={18}/></div>
         <div className="bg-white p-2 rounded-full text-black shadow-md cursor-pointer hover:bg-gray-100"><ShoppingCart size={18}/></div>
         <div className="bg-white p-2 rounded-full text-black shadow-md cursor-pointer hover:bg-gray-100"><Eye size={18}/></div>
      </div>

      <div className="w-full h-32 flex items-center justify-center mb-4">
        <img 
          src={image || "https://via.placeholder.com/150"} 
          alt={name} 
          className="max-w-full max-h-full object-contain group-hover:opacity-30 transition duration-300" 
        />
      </div>

      <h3 className="text-xs font-medium mb-2 line-clamp-2 h-8 leading-relaxed text-clicon-black group-hover:text-clicon-orange transition-colors">
        {name}
      </h3>
    </div>
    
    <div className="flex flex-col mt-auto">
       {oldPrice && <span className="text-gray-400 line-through text-[10px]">${oldPrice}</span>}
       <span className="text-clicon-blue font-bold text-sm">${price}</span>
    </div>
  </div>
);

export default BestDeals;