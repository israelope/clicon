import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, ChevronRight, ChevronDown, LayoutGrid, List, 
  X, Filter 
} from 'lucide-react';
import { COMPUTER_ACCESSORIES_DATA } from '../data'; 
import StandardCard from '../components/StandardCard';

const ShopPage = () => {
  const navigate = useNavigate();

  // --- FUNCTIONAL STATES ---
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const productsPerPage = 8; // Adjust based on your preference

  // --- DYNAMIC DATA LOGIC ---
  // Filters data based on search input
  const filteredData = COMPUTER_ACCESSORIES_DATA.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalResults = filteredData.length;
  
  // Pagination Calculations
  const totalPages = Math.ceil(totalResults / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredData.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="max-w-[1320px] mx-auto px-6 py-8 bg-white">
      {/* --- BREADCRUMBS & TOP NAVIGATION --- */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <span className="cursor-pointer hover:text-clicon-orange" onClick={() => navigate('/')}>Home</span>
        <ChevronRight size={14} />
        <span className="font-medium text-clicon-black">Shop</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* --- SIDEBAR FILTERS (As per PDF) --- */}
        <aside className="w-full lg:w-[300px] flex-shrink-0 space-y-10">
          
          {/* Category Filter */}
          <div className="border-b border-gray-100 pb-6">
            <h3 className="font-bold text-sm uppercase mb-4 tracking-wider text-clicon-black">Category</h3>
            <div className="space-y-3">
              {["Electronics Devices", "Computer & Laptop", "Computer Accessories", "SmartPhone", "Headphone", "Mobile Accessories"].map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="category" className="w-4 h-4 border-gray-300 text-clicon-orange focus:ring-clicon-orange" />
                  <span className="text-sm text-gray-600 group-hover:text-black transition-colors">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="border-b border-gray-100 pb-6">
            <h3 className="font-bold text-sm uppercase mb-4 tracking-wider text-clicon-black">Price Range</h3>
            <div className="space-y-3">
              {["All Price", "Under $20", "$25 to $100", "$100 to $300", "$300 to $500", "$500 to $1,000"].map((range) => (
                <label key={range} className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="price" className="w-4 h-4 border-gray-300 text-clicon-orange" />
                  <span className="text-sm text-gray-600">{range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sidebar Promo Banner (Apple Watch Style) */}
          <div className="bg-[#DEF1FF] p-8 rounded-sm text-center relative overflow-hidden">
            <p className="text-[#2DA5F3] font-bold text-[10px] uppercase mb-2">Watch Series 7</p>
            <h4 className="text-xl font-bold mb-4 text-clicon-black leading-tight">Heavy on Features. Light on Price.</h4>
            <p className="text-sm mb-6 text-gray-700">Only for: <span className="font-bold text-clicon-black">$299 USD</span></p>
            <button className="bg-clicon-orange text-white w-full py-3 rounded-sm font-bold uppercase text-xs hover:bg-orange-600 transition shadow-md shadow-orange-100">
              Add to Cart
            </button>
          </div>

          {/* Popular Tags */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-4 tracking-wider text-clicon-black">Popular Tag</h3>
            <div className="flex flex-wrap gap-2">
              {["Game", "iPhone", "TV", "Asus Laptops", "Macbook", "SSD", "Graphics Card", "Microwave"].map(tag => (
                <span key={tag} className="border border-gray-200 px-3 py-1 text-xs rounded-sm hover:border-clicon-orange hover:bg-orange-50 cursor-pointer transition">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT --- */}
        <main className="flex-1">
          {/* Top Search & Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="relative w-full max-w-md">
              <input 
                type="text" 
                placeholder="Search for anything..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-200 px-4 py-2.5 pr-12 rounded-sm focus:border-clicon-orange outline-none transition"
              />
              <Search className="absolute right-4 top-3 text-gray-400" size={20} />
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <span className="text-sm text-gray-500 whitespace-nowrap">Sort by:</span>
              <button className="flex-1 md:flex-none border border-gray-200 px-4 py-2.5 text-sm flex items-center justify-between gap-4 rounded-sm hover:border-gray-400">
                Most Popular <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="bg-[#F2F4F5] p-4 mb-6 flex justify-between items-center rounded-sm">
            <p className="text-sm text-gray-700">
              <span className="font-bold text-clicon-black">{totalResults.toLocaleString()}</span> Results found.
            </p>
            <div className="flex items-center gap-3">
              <LayoutGrid size={20} className="text-clicon-orange cursor-pointer" />
              <List size={20} className="text-gray-400 cursor-pointer hover:text-clicon-black" />
            </div>
          </div>

          {/* The Product Grid */}
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
              {currentProducts.map((product) => (
                <StandardCard 
                  key={product.id} 
                  {...product} 
                  onClick={() => navigate(`/product/${product.id}`)} 
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center border border-dashed border-gray-200 rounded-sm">
              <p className="text-gray-500">No products found matching your search.</p>
              <button onClick={() => setSearchQuery("")} className="mt-4 text-clicon-orange font-bold hover:underline">Clear Search</button>
            </div>
          )}

          {/* --- PAGINATION (Dynamic) --- */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <button 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="w-10 h-10 border rounded-full flex items-center justify-center disabled:opacity-30 hover:border-clicon-orange transition"
              >
                <ChevronRight size={18} className="rotate-180" />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 border rounded-full font-bold transition-all ${
                    currentPage === i + 1 
                      ? 'bg-clicon-orange text-white border-clicon-orange' 
                      : 'hover:border-clicon-orange text-gray-600'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </button>
              ))}

              <button 
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="w-10 h-10 border rounded-full flex items-center justify-center disabled:opacity-30 hover:border-clicon-orange transition"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ShopPage;