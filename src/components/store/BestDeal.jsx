import { ArrowRight, ShoppingCart, Heart, Eye, Star } from 'lucide-react';

const BestDeals = () => {
  return (
    <section className="max-w-[1320px] mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <h2 className="text-2xl font-bold">Best Deals</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm">Deals ends in</span>
            <div className="bg-[#F3DE2C] px-3 py-1 font-bold text-sm rounded-sm">
              16d : 21h : 57m : 23s
            </div>
          </div>
        </div>
        <button className="text-blue-500 font-semibold text-sm flex items-center gap-1 group">
          Browse All Product <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border border-gray-100 rounded-sm overflow-hidden">
        {/* Large Featured Deal (The PS5) */}
        <div className="lg:col-span-1 p-6 border-r border-gray-100 group">
          <div className="relative">
             <span className="bg-[#F3DE2C] text-black text-[10px] font-bold px-2 py-1 rounded-sm absolute top-0 left-0">32% OFF</span>
             <span className="bg-[#EE5858] text-white text-[10px] font-bold px-2 py-1 rounded-sm absolute top-7 left-0 uppercase">Hot</span>
             <img src="/Console.png" alt="PS5" className="w-full h-64 object-contain mb-4" />
          </div>
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#FA8232" color="#FA8232" />)}
            <span className="text-gray-400 text-xs">(52,677)</span>
          </div>
          <h3 className="font-medium text-sm mb-2 leading-relaxed">Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...</h3>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-400 line-through text-sm">$865.99</span>
            <span className="text-blue-500 font-bold text-lg">$442.12</span>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed mb-6">
            Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.
          </p>
          <div className="flex gap-2">
             <button className="bg-[#FFE7D6] p-3 rounded-sm text-clicon-orange"><Heart size={20}/></button>
             <button className="flex-1 bg-clicon-orange text-white py-3 rounded-sm font-bold uppercase text-xs flex items-center justify-center gap-2">
               <ShoppingCart size={18}/> Add to Card
             </button>
             <button className="bg-[#FFE7D6] p-3 rounded-sm text-clicon-orange"><Eye size={20}/></button>
          </div>
        </div>

        {/* Small Deals Grid (Remaining 4 columns, 2 rows) */}
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4">
           {/* You will map your hardcoded data here */}
           <SmallProductCard name="Bose Sport Earbuds - Wireless..." price="2,300" status="SOLD OUT" image="/FlipBuds.png"  />
           <SmallProductCard name="Simple Mobile 4G LTE Prepaid..." price="220" src="/FlipBuds.png" />
           <SmallProductCard name="4K UHD LED Smart TV with..." price="1,500" oldPrice="865" discount="19% OFF" />
           <SmallProductCard name="Sony DSCHX8 High Zoom Point..." price="1,200" />
           <SmallProductCard name="Sony DSCHX8 High Zoom Point..." price="1,200" />
           <SmallProductCard name="Sony DSCHX8 High Zoom Point..." price="1,200" />
           <SmallProductCard name="Sony DSCHX8 High Zoom Point..." price="1,200" />
           <SmallProductCard name="Sony DSCHX8 High Zoom Point..." price="1,200" />

           {/* Add more to fill 8 slots */}
        </div>
      </div>
    </section>
  );
};

const SmallProductCard = ({ name, price, oldPrice, discount, status }) => (
  <div className="p-4 border-r border-b border-gray-100 hover:shadow-xl transition relative group">
    {discount && <span className="bg-[#F3DE2C] text-black text-[10px] font-bold px-2 py-1 rounded-sm absolute top-4 left-4">{discount}</span>}
    {status && <span className="bg-gray-400 text-white text-[10px] font-bold px-2 py-1 rounded-sm absolute top-4 left-4 uppercase">{status}</span>}
    
    {/* Hover Actions */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300 z-10">
       <div className="bg-clicon-orange p-2 rounded-full text-white cursor-pointer"><Heart size={18}/></div>
       <div className="bg-white p-2 rounded-full text-black shadow-md cursor-pointer"><ShoppingCart size={18}/></div>
       <div className="bg-white p-2 rounded-full text-black shadow-md cursor-pointer"><Eye size={18}/></div>
    </div>

    <img src="https://via.placeholder.com/150" alt="product" className="w-full h-32 object-contain mb-4 group-hover:opacity-40 transition" />
    <h3 className="text-xs font-medium mb-2 line-clamp-2">{name}</h3>
    <div className="flex flex-col">
       {oldPrice && <span className="text-gray-400 line-through text-[10px]">${oldPrice}</span>}
       <span className="text-blue-500 font-bold text-sm">${price}</span>
    </div>
  </div>
);

export default BestDeals;