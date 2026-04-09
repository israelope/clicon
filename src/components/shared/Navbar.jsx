import { useState } from 'react';
import { Search, ShoppingCart, Heart, User, ChevronDown, X, Eye, EyeOff } from 'lucide-react';
import { 
  IconBrandTwitter, IconBrandFacebook, IconBrandPinterest, 
  IconBrandReddit, IconBrandYoutube, IconBrandInstagram 
} from '@tabler/icons-react';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null); // 'lang', 'curr', 'cart', 'user'

  return (
    <header className="w-full font-sans antialiased shadow-sm relative z-">
      {/* 1. Black Friday Promo Bar */}
      <div className="bg-clicon-black text-white h-[52px] px-6 flex items-center">
        <div className="flex-1 flex justify-center items-center gap-2">
          <div className="bg-clicon-yellow text-black px-2 py-0.5 font-bold rounded-sm -rotate-2 text-[14px]">Black</div>
          <span className="font-semibold text-[16px]">Friday</span>
          <span className="text-white/60 text-[14px] ml-4">Up to</span>
          <span className="text-clicon-yellow font-bold text-[24px] ml-1">59%</span>
          <span className="font-bold text-[16px] uppercase ml-1">Off</span>
          <button className="ml-6 bg-clicon-yellow text-black px-6 py-2.5 rounded-sm font-bold text-[13px] flex items-center gap-2 hover:bg-yellow-400 transition cursor-pointer uppercase">
            Shop Now <span>→</span>
          </button>
        </div>
        <button className="bg-white/10 p-1.5 rounded-sm hover:bg-white/20 transition">
          <X size={16} />
        </button>
      </div>

      {/* 2. Top Sub-Nav (Blue) */}
      <div className="bg-clicon-blue border-b border-white/10 text-white py-3 px-6">
        <div className="max-w-[1320px] mx-auto flex justify-between items-center text-[12px]">
          <p>Welcome to Clicon online eCommerce store.</p>
          <div className="flex items-center">
            <div className="flex items-center gap-3 border-r border-white/20 pr-6 mr-6">
              <span>Follow us:</span>
              <div className="flex gap-3">
                <IconBrandTwitter size={16} />
                <IconBrandFacebook size={16} />
                <IconBrandPinterest size={16} />
                <IconBrandReddit size={16} />
                <IconBrandYoutube size={16} />
                <IconBrandInstagram size={16} />
              </div>
            </div>
            
            {/* Language & Currency Dropdowns */}
            <div className="flex gap-5 relative">
              <button onClick={() => setOpenMenu(openMenu === 'lang' ? null : 'lang')} className="flex items-center gap-1 cursor-pointer">
                Eng <ChevronDown size={14} className={openMenu === 'lang' ? 'rotate-180 transition' : 'transition'} />
              </button>
              {openMenu === 'lang' && <LanguageDropdown />}

              <button onClick={() => setOpenMenu(openMenu === 'curr' ? null : 'curr')} className="flex items-center gap-1 cursor-pointer">
                USD <ChevronDown size={14} />
              </button>
              {openMenu === 'curr' && <CurrencyDropdown />}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Header (Blue) */}
      <div className="bg-clicon-blue text-white py-5 px-6">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
            <div className="w-11 h-11 border-[4.5px] border-white rounded-full flex items-center justify-center">
              <div className="w-3.5 h-3.5 bg-white rounded-full"></div>
            </div>
           <a href="/"> <span className="text-[32px] font-bold tracking-tight uppercase">Clicon</span></a>
          </div>

          {/* Wide Search Bar */}
          <div className="flex-1 max-w-[650px] mx-10 flex items-center bg-white rounded-full h-[48px] px-4 shadow-sm">
            <input 
              type="text" 
              placeholder="Search for anything..." 
              className="w-full text-black outline-none text-[15px]"
            />
            <Search className="text-black cursor-pointer" size={20} />
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-7 relative">
            <div onClick={() => setOpenMenu(openMenu === 'cart' ? null : 'cart')} className="relative cursor-pointer">
              <ShoppingCart size={32} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1.5 bg-white text-clicon-blue text-[11px] font-bold w-[22px] h-[22px] rounded-full flex items-center justify-center border-[2px] border-clicon-blue">2</span>
            </div>
            {openMenu === 'cart' && <CartPopover />}

            <Heart size={32} strokeWidth={1.5} className="cursor-pointer" />
            
            <User onClick={() => setOpenMenu(openMenu === 'user' ? null : 'user')} size={32} strokeWidth={1.5} className="cursor-pointer" />
            {openMenu === 'user' && <LoginPopover />}
          </div>
        </div>
      </div>
    </header>
  );
};

/* --- SUB-COMPONENTS (POPOVERS) --- */

const LanguageDropdown = () => (
  <div className="absolute top-8 right-[70px] bg-white text-black shadow-2xl rounded-[2px] p-2 w-40 border border-gray-100 animate-in fade-in zoom-in duration-200">
    <div className="flex items-center justify-between p-2.5 hover:bg-gray-50 cursor-pointer text-sm">
      <div className="flex items-center gap-2"><span>🇺🇸</span> English</div>
      <div className="w-4 h-4 rounded-full border border-clicon-orange flex items-center justify-center">
        <div className="w-2 h-2 bg-clicon-orange rounded-full"></div>
      </div>
    </div>
    <div className="p-2.5 hover:bg-gray-50 cursor-pointer text-sm text-clicon-gray">🇨🇳 Mandarin</div>
    <div className="p-2.5 hover:bg-gray-50 cursor-pointer text-sm text-clicon-gray">🇷🇺 Russian</div>
  </div>
);

const CurrencyDropdown = () => (
  <div className="absolute top-8 right-0 bg-white text-black shadow-2xl rounded-[2px] p-2 w-40 border border-gray-100">
    <div className="flex items-center justify-between p-2.5 text-sm text-clicon-orange font-medium">
      Dollar (USD) <span>✓</span>
    </div>
    <div className="p-2.5 hover:bg-gray-50 cursor-pointer text-sm text-clicon-gray">Euro (EUR)</div>
  </div>
);

const CartPopover = () => (
  <div className="absolute top-14 right-0 bg-white text-black shadow-2xl rounded-[2px] w-[360px] p-6 border border-gray-100">
    <h3 className="text-lg font-bold mb-5">Shopping Cart (02)</h3>
    <div className="space-y-5">
      <div className="flex gap-4 items-center">
        <div className="w-20 h-20 bg-gray-100 rounded-sm"></div>
        <div className="flex-1">
          <p className="text-sm font-medium line-clamp-2">Canon EOS 1500D DSLR Camera Body+ 18-55 mm</p>
          <p className="text-sm text-gray-400 mt-1">1 x <span className="text-clicon-blue font-bold">$1,500</span></p>
        </div>
        <X size={18} className="text-gray-300 cursor-pointer hover:text-red-500" />
      </div>
    </div>
    <div className="mt-6 pt-5 border-t">
      <div className="flex justify-between items-center mb-5">
        <span className="text-gray-500 text-sm">Sub-Total:</span>
        <span className="font-bold">$2038.00 USD</span>
      </div>
      <button className="w-full bg-clicon-orange text-white py-4 rounded-[2px] font-bold uppercase text-[13px] tracking-wide mb-3 flex items-center justify-center gap-2">
        Checkout Now <span>→</span>
      </button>
      <button className="w-full border-2 border-clicon-orange text-clicon-orange py-4 rounded-[2px] font-bold uppercase text-[13px] tracking-wide">
        View Cart
      </button>
    </div>
  </div>
);

const LoginPopover = () => (
  <div className="absolute top-14 right-0 bg-white text-black shadow-2xl rounded-[2px] w-[420px] p-10 border border-gray-100">
    <h3 className="text-2xl font-bold text-center mb-8">Sign in to your account</h3>
    <div className="space-y-5">
      <div>
        <label className="text-sm font-medium block mb-2">Email Address</label>
        <input type="email" className="w-full border border-gray-200 h-12 px-4 rounded-[2px] focus:border-clicon-blue outline-none transition" />
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">Password</label>
          <button className="text-[13px] text-blue-500 hover:underline">Forget Password</button>
        </div>
        <div className="relative">
          <input type="password" placeholder="Password" className="w-full border border-gray-200 h-12 px-4 rounded-[2px] focus:border-clicon-blue outline-none transition" />
          <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" size={20} />
        </div>
      </div>
      <button className="w-full bg-clicon-orange text-white h-14 rounded-[2px] font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 mt-2">
        Login <span>→</span>
      </button>
      <div className="relative flex items-center justify-center py-4">
        <div className="w-full border-t border-gray-100"></div>
        <span className="absolute bg-white px-4 text-gray-400 text-sm italic">Don't have account?</span>
      </div>
      <button className="w-full border-2 border-clicon-orange text-clicon-orange h-14 rounded-[2px] font-bold uppercase tracking-widest text-sm">
        Create Account
      </button>
    </div>
  </div>
);

export default Navbar;