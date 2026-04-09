import { ArrowRight, Apple } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full font-sans">
      {/* 1. Newsletter & Brand Section */}
      <div className="bg-clicon-blue py-16 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Subscribe to our newsletter</h2>
          <p className="text-white/70 mb-8 text-sm max-w-lg mx-auto">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto bg-white rounded-sm overflow-hidden p-1">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 py-3 px-4 text-black outline-none"
            />
            <button className="bg-clicon-orange hover:bg-orange-600 transition text-white px-8 py-3 font-bold uppercase flex items-center justify-center gap-2">
              Subscribe <ArrowRight size={18} />
            </button>
          </div>

          {/* Partner Logos */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-xl font-bold">Google</span>
            <span className="text-xl font-bold italic">amazon</span>
            <span className="text-xl font-bold uppercase tracking-widest">Philips</span>
            <span className="text-xl font-bold uppercase">Toshiba</span>
            <span className="text-xl font-bold italic">Samsung</span>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links Section */}
      <div className="bg-clicon-dark text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 border-4 border-clicon-orange rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-clicon-orange rounded-full"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight uppercase">Clicon</span>
            </div>
            <div className="space-y-1">
              <p className="text-clicon-footer-text text-sm">Customer Supports:</p>
              <p className="text-lg font-medium">(629) 555-0129</p>
            </div>
            <p className="mt-4 text-clicon-footer-text text-sm leading-relaxed">
              4517 Washington Ave. <br /> Manchester, Kentucky 39495
            </p>
            <p className="mt-2 font-medium">info@kinbo.com</p>
          </div>

          {/* Top Category */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm">Top Category</h4>
            <ul className="text-clicon-footer-text text-sm space-y-3">
              <li className="hover:text-white cursor-pointer transition">Computer & Laptop</li>
              <li className="hover:text-white cursor-pointer transition">SmartPhone</li>
              <li className="hover:text-white cursor-pointer transition">Headphone</li>
              <li className="flex items-center gap-2 text-white font-medium">
                <span className="w-5 h-[2px] bg-clicon-yellow"></span> Accessories
              </li>
              <li className="hover:text-white cursor-pointer transition">Camera & Photo</li>
              <li className="hover:text-white cursor-pointer transition">TV & Homes</li>
              <li className="text-clicon-yellow flex items-center gap-1 font-semibold cursor-pointer group">
                Browse All Product <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm">Quick Links</h4>
            <ul className="text-clicon-footer-text text-sm space-y-3">
              <li className="hover:text-white cursor-pointer transition">Shop Product</li>
              <li className="hover:text-white cursor-pointer transition">Shoping Cart</li>
              <li className="hover:text-white cursor-pointer transition">Wishlist</li>
              <li className="hover:text-white cursor-pointer transition">Compare</li>
              <li className="hover:text-white cursor-pointer transition">Track Order</li>
              <li className="hover:text-white cursor-pointer transition">Customer Help</li>
              <li className="hover:text-white cursor-pointer transition">About Us</li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm">Download App</h4>
            <div className="space-y-3">
              <button className="w-full bg-[#303639] hover:bg-gray-700 flex items-center gap-3 p-3 rounded-md transition">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
              </button>
              <button className="w-full bg-[#303639] hover:bg-gray-700 flex items-center gap-3 p-3 rounded-md transition">
                <Apple size={32} />
                <div className="text-left">
                  <p className="text-[10px] uppercase">Get it now</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </button>
            </div>
          </div>

          {/* Popular Tag */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm">Popular Tag</h4>
            <div className="flex flex-wrap gap-2">
              {['Game', 'iPhone', 'TV', 'Asus Laptops', 'Macbook', 'SSD', 'Graphics Card', 'Power Bank', 'Smart TV', 'Speaker', 'Tablet', 'Microwave', 'Samsung'].map((tag) => (
                <span key={tag} className="border border-gray-700 px-3 py-1.5 text-xs hover:bg-white hover:text-black cursor-pointer transition rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto mt-20 pt-6 border-t border-gray-800 text-center">
          <p className="text-clicon-footer-text text-xs">
            Kinbo - eCommerce Template © 2026. Design by Templatecookie
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;