import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Star, ShoppingCart, Heart, GitCompare, Share2, 
  CheckCircle2, ShieldCheck, Truck, Headphones, ArrowRight,
  ChevronDown, ChevronRight, Copy, Link as LinkIcon
} from 'lucide-react';
import { COMPUTER_ACCESSORIES_DATA } from '../data'; 

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = COMPUTER_ACCESSORIES_DATA.find(p => String(p.id) === String(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setActiveImage(foundProduct.image);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div className="py-20 text-center font-bold">Product Not Found</div>;

  return (
    <div className="bg-white">
      <div className="bg-[#F2F4F5] py-4">
        <div className="max-w-[1320px] mx-auto px-6 flex items-center gap-2 text-sm text-gray-500">
          <span className="cursor-pointer hover:text-clicon-orange" onClick={() => navigate('/')}>Home</span> 
          <ChevronRight size={14} /> 
          <span className="cursor-pointer hover:text-clicon-orange" onClick={() => navigate('/shop')}>Shop</span> 
          <ChevronRight size={14} /> 
          <span className="text-clicon-black font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* --- LEFT: GALLERY --- */}
          <div className="space-y-4">
            <div className="border border-gray-100 p-10 flex items-center justify-center rounded-sm bg-white aspect-square">
              <img src={activeImage} alt="Main" className="max-w-full h-auto object-contain" />
            </div>
            <div className="flex items-center gap-4">
               <button className="p-2 border border-gray-200 hover:bg-clicon-orange hover:text-white rounded-full transition"><ArrowRight className="rotate-180" size={20}/></button>
               <div className="flex gap-2 overflow-hidden">
                  {[product.image, product.image, product.image, product.image].map((img, i) => (
                    <div 
                      key={i} 
                      onClick={() => setActiveImage(img)}
                      className={`w-20 h-20 border p-2 shrink-0 cursor-pointer transition ${activeImage === img ? 'border-clicon-orange' : 'border-gray-100'}`}
                    >
                        <img src={img} className="w-full h-full object-contain" />
                    </div>
                  ))}
               </div>
               <button className="p-2 border border-gray-200 hover:bg-clicon-orange hover:text-white rounded-full transition"><ArrowRight size={20}/></button>
            </div>
          </div>

          {/* --- RIGHT: INFO --- */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-[#FA8232]">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} />)}
              </div>
              <span className="text-sm font-bold text-clicon-black">4.7 Star Rating</span> 
              <span className="text-sm text-gray-400">(21,671 User feedback)</span> 
            </div>

            <h1 className="text-2xl font-bold text-clicon-black mb-4 leading-tight">{product.name}</h1> 

            <div className="grid grid-cols-2 gap-y-2 text-sm mb-6">
              <p className="text-gray-500 uppercase">Sku: <span className="text-clicon-black font-semibold">A264671</span></p> 
              <p className="text-gray-500 uppercase">Availability: <span className="text-[#2DB5F3] font-bold">In Stock</span></p> 
              <p className="text-gray-500 uppercase">Brand: <span className="text-clicon-black font-semibold">Apple</span></p> 
              <p className="text-gray-500 uppercase">Category: <span className="text-clicon-black font-semibold">Electronics Devices</span></p> 
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold text-[#2DA5F3]">${product.price}</span>
              <span className="text-lg text-gray-400 line-through">$1999.00</span> 
              <span className="bg-[#F3DE2C] px-2 py-1 text-xs font-bold rounded-sm">21% OFF</span> 
            </div>

            <hr className="border-gray-100 mb-6" />

            {/* Selection Dropdowns */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Dropdown label="Color" value="Space Gray" />
              <Dropdown label="Size" value="14-inch Liquid Retina XDR display" />
              <Dropdown label="Memory" value="16GB unified memory" />
              <Dropdown label="Storage" value="1TV SSD Storage" />
            </div>

            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-200 rounded-sm">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-gray-50 font-bold">-</button>
                <span className="px-6 py-3 font-bold border-x border-gray-200">{quantity.toString().padStart(2, '0')}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-gray-50 font-bold">+</button>
              </div>
              <button className="flex-1 bg-clicon-orange text-white py-3 rounded-sm font-bold uppercase flex items-center justify-center gap-2 hover:bg-orange-600 transition">
                Add to Cart <ShoppingCart size={20}/>
              </button>
              <button className="border-2 border-clicon-orange text-clicon-orange px-8 py-3 rounded-sm font-bold uppercase hover:bg-orange-50 transition">
                Buy Now
              </button>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-8">
              <div className="flex gap-4">
                <button className="flex items-center gap-1 hover:text-clicon-orange transition"><Heart size={18}/> Add to Wishlist</button>
                <button className="flex items-center gap-1 hover:text-clicon-orange transition"><GitCompare size={18}/> Add to Compare</button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500">Share product:</span>
                <Copy size={18} className="cursor-pointer hover:text-clicon-orange" />
                <Share2 size={18} className="cursor-pointer hover:text-clicon-orange" />
              </div>
            </div>

            {/* Safe Checkout Badge */}
            <div className="border border-gray-100 p-4 rounded-sm bg-white">
               <p className="text-xs font-medium mb-3 text-clicon-black">100% Guarantee Safe Checkout</p>
               <div className="flex gap-2">
                  <div className="h-6 w-10 bg-gray-100 rounded-sm"></div>
                  <div className="h-6 w-10 bg-gray-100 rounded-sm"></div>
                  <div className="h-6 w-10 bg-gray-100 rounded-sm"></div>
               </div>
            </div>
          </div>
        </div>

        {/* --- TABS SECTION --- */}
        <div className="border border-gray-100 rounded-sm mb-16">
          <div className="flex justify-center border-b border-gray-100 bg-[#F2F4F5]">
             {['Description', 'Additional Information', 'Specification', 'Review'].map((tab, i) => (
                <button key={i} className={`px-10 py-4 text-sm font-bold uppercase transition-all ${i===0 ? 'border-b-4 border-clicon-orange text-clicon-black bg-white':'text-gray-500 hover:text-clicon-black'}`}>
                  {tab}
                </button>
             ))}
          </div>
          <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
             <div className="lg:col-span-1 space-y-4">
                <h3 className="font-bold text-clicon-black uppercase text-sm tracking-wider">Description</h3> 
                <p className="text-gray-600 text-sm leading-relaxed">The most powerful MacBook Pro ever is here... </p>
             </div>
             <div className="lg:col-span-1 space-y-4">
                <h3 className="font-bold text-clicon-black uppercase text-sm tracking-wider">Feature</h3> 
                <FeatureItem icon={<ArrowRight size={16}/>} text="Free 1 Year Warranty" /> 
                <FeatureItem icon={<Truck size={16}/>} text="Free Shipping & Fasted Delivery" /> 
                <FeatureItem icon={<Headphones size={16}/>} text="24/7 Customer support" /> 
             </div>
             <div className="lg:col-span-1 space-y-4">
                <h3 className="font-bold text-clicon-black uppercase text-sm tracking-wider">Shipping Information</h3> 
                <p className="text-xs text-gray-600">Courier: <span className="font-bold text-clicon-black ml-1">2 - 4 days, free shipping</span></p> 
                <p className="text-xs text-gray-600">Local Shipping: <span className="font-bold text-clicon-black ml-1">up to one week, $19.00</span></p> 
                <p className="text-xs text-gray-600">UPS Ground: <span className="font-bold text-clicon-black ml-1">4 - 6 days, $29.00</span></p> 
             </div>
          </div>
        </div>

        {/* --- 4-COLUMN RELATED PRODUCTS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <MiniList title="Related Product" /> 
           <MiniList title="Product Accessories" /> 
           <MiniList title="Apple Product" /> 
           <MiniList title="Featured Products" />
        </div>
      </div>
    </div>
  );
};

// --- INTERNAL HELPERS ---
const Dropdown = ({ label, value }) => (
  <div className="flex flex-col gap-1.5">
    <span className="text-xs text-clicon-black font-medium">{label}</span>
    <div className="border border-gray-200 p-3 text-xs flex justify-between items-center text-gray-500 rounded-sm cursor-pointer hover:border-gray-400 transition">
      {value} <ChevronDown size={14}/>
    </div>
  </div>
);

const FeatureItem = ({ icon, text }) => (
  <div className="flex items-center gap-2 text-xs text-gray-600">
    <div className="text-clicon-orange">{icon}</div> {text}
  </div>
);

const MiniList = ({ title }) => (
  <div className="space-y-4">
    <h3 className="font-bold text-sm uppercase mb-4 tracking-wider text-clicon-black">{title}</h3>
    {[1,2,3].map(i => (
      <div key={i} className="flex gap-4 p-3 border border-transparent hover:border-gray-100 hover:shadow-sm transition-all rounded-sm cursor-pointer group">
        <div className="w-16 h-16 bg-gray-50 shrink-0 rounded-sm flex items-center justify-center p-2">
          <img src="https://via.placeholder.com/60" className="w-full h-full object-contain group-hover:scale-110 transition" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[11px] font-medium line-clamp-2 leading-tight text-clicon-black group-hover:text-clicon-orange transition">Bose Sport Earbuds - Wireless Earphones</p>
          <span className="text-clicon-blue font-bold text-sm mt-1">$1,500</span>
        </div>
      </div>
    ))}
  </div>
);

export default ProductDetail;