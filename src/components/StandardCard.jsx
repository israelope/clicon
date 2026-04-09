import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';

const StandardCard = ({ tag, badge, name, price, oldPrice, rating, image, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="p-4 bg-white hover:shadow-2xl transition-all relative group cursor-pointer flex flex-col h-full"
    >
      {/* --- Badges --- */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {tag && (
          <span className="bg-[#EE5858] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase">
            {tag}
          </span>
        )}
        {badge && (
          <span className={`${badge.includes('OFF') || badge === 'SALE' ? 'bg-[#F3DE2C] text-black' : 'bg-[#2DA5F3] text-white'} text-[10px] font-bold px-2 py-1 rounded-sm uppercase`}>
            {badge}
          </span>
        )}
      </div>
      
      {/* --- Product Image & Hover Actions --- */}
      <div className="relative h-48 mb-4 flex items-center justify-center overflow-hidden">
        <img 
          src={image || "https://via.placeholder.com/200"} 
          alt={name} 
          className="max-w-full max-h-full object-contain group-hover:scale-110 transition duration-500" 
        />
        
        {/* Overlay Actions on Hover */}
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="bg-white p-2.5 rounded-full shadow-lg text-black hover:bg-[#FA8232] hover:text-white transition">
            <Heart size={20}/>
          </button>
          <button className="bg-[#FA8232] p-3 rounded-full shadow-lg text-white hover:bg-orange-600 transition">
            <ShoppingCart size={24}/>
          </button>
          <button className="bg-white p-2.5 rounded-full shadow-lg text-black hover:bg-[#FA8232] hover:text-white transition">
            <Eye size={20}/>
          </button>
        </div>
      </div>

      {/* --- Product Info --- */}
      <div className="flex flex-col flex-grow">
        {/* Ratings */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              fill={i < rating ? "#FA8232" : "none"} 
              color={i < rating ? "#FA8232" : "#CBD5E1"} 
            />
          ))}
          <span className="text-gray-400 text-xs ml-1">(52,677)</span>
        </div>
        
        {/* Title */}
        <h3 className="text-sm font-medium mb-3 line-clamp-2 leading-relaxed text-[#191C1F] group-hover:text-[#FA8232] transition-colors">
          {name}
        </h3>

        {/* Price */}
        <div className="mt-auto flex items-center gap-2">
          {oldPrice && <span className="text-gray-400 line-through text-sm">${oldPrice}</span>}
          <span className="text-[#2DA5F3] font-bold text-base">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default StandardCard;