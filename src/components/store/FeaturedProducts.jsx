import { ArrowRight, Star, ShoppingCart, Heart, Eye } from 'lucide-react';
// Make sure this path points correctly to your data.js
import { FEATURED_PRODUCTS_DATA } from '../../data';

const FeaturedProducts = () => {
  return (
    <section className="max-w-[1320px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
      
      {/* --- Left Yellow Banner --- */}
      <div className="bg-[#F3DE2C] rounded-sm p-8 flex flex-col items-center text-center relative overflow-hidden">
        <p className="text-clicon-orange font-bold text-xs uppercase mb-2">Computer & Accessories</p>
        <h2 className="text-3xl font-bold mb-2">32% Discount</h2>
        <p className="text-gray-700 text-sm mb-6">For all electronics products</p>
        
        <div className="flex flex-col items-center gap-2 mb-8">
          <span className="text-[10px] text-gray-500 uppercase">Offers ends in:</span>
          <span className="bg-white px-4 py-2 font-bold text-xs rounded-sm tracking-tight">ENDS OF CHRISTMAS</span>
        </div>

        <button className="bg-clicon-orange text-white w-full py-4 rounded-sm font-bold uppercase text-sm flex items-center justify-center gap-2 mb-10 hover:bg-orange-600 transition">
          Shop Now <ArrowRight size={18} />
        </button>

        <img src="/banner.jpg" alt="banner-electronics" className="w-full object-contain mt-auto" />
      </div>

      {/* --- Right Product Grid --- */}
      <div className="lg:col-span-3">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-clicon-black">Featured Products</h2>
          <div className="flex gap-6 text-sm font-medium text-gray-400">
            <span className="text-black border-b-2 border-clicon-orange pb-1 cursor-pointer">All Product</span>
            <span className="hover:text-black cursor-pointer transition">Smart Phone</span>
            <span className="hover:text-black cursor-pointer transition">Laptop</span>
            <span className="hover:text-black cursor-pointer transition">Headphone</span>
            <button className="text-clicon-orange flex items-center gap-1 font-semibold hover:gap-2 transition-all">
                Browse All Product <ArrowRight size={14}/>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-100">
           {/* --- Mapping from data.js --- */}
           {FEATURED_PRODUCTS_DATA.map((product) => (
             <StandardCard 
                key={product.id}
                tag={product.tag}
                badge={product.badge}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.rating}
                image={product.image}
             />
           ))}
        </div>
      </div>
    </section>
  );
};

/* Reusable Standard Card */
const StandardCard = ({ tag, badge, name, price, oldPrice, rating, image }) => (
  <div className="p-4 border-r border-b border-gray-100 hover:shadow-2xl transition-all relative group cursor-pointer bg-white">
    {/* Labels */}
    {tag && <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-sm z-10">{tag}</span>}
    {badge && (
      <span className={`${badge.includes('OFF') ? 'bg-[#F3DE2C] text-black' : 'bg-blue-500 text-white'} absolute top-4 left-4 text-[10px] font-bold px-2 py-1 rounded-sm uppercase z-10`}>
        {badge}
      </span>
    )}
    
    <div className="relative h-40 mb-4 flex items-center justify-center">
      <img 
        src={image || "https://via.placeholder.com/200"} 
        alt={name} 
        className="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-300" 
      />
      
      {/* Central Hover Actions */}
      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300 bg-white/40">
        <div className="bg-white p-2.5 rounded-full shadow-lg text-black hover:bg-clicon-orange hover:text-white transition"><Heart size={20}/></div>
        <div className="bg-clicon-orange p-2.5 rounded-full shadow-lg text-white hover:bg-orange-600 transition"><ShoppingCart size={20}/></div>
        <div className="bg-white p-2.5 rounded-full shadow-lg text-black hover:bg-clicon-orange hover:text-white transition"><Eye size={20}/></div>
      </div>
    </div>

    {/* Stars */}
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

export default FeaturedProducts;