import { ArrowLeft, ArrowRight } from 'lucide-react';

const categories = [
  { name: "Computer & Laptop", img: "/Computer.png" },
  { name: "SmartPhone", img: "/SmartPhone.png" },
  { name: "Headphones", img: "/Headphones.png" },
  { name: "Accessories", img: "/Accessories.png" },
  { name: "Camera & Photo", img: "/Camera .png" },
  { name: "TV & Homes", img: "TV.png" },
];

const CategorySlider = () => (
  <section className="max-w-[1320px] mx-auto px-6 py-12 text-center">
    <h2 className="text-2xl font-bold mb-8">Shop with Categorys</h2>
    <div className="relative group">
      <button className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-clicon-orange text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition">
        <ArrowLeft size={20} />
      </button>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat, i) => (
          <div key={i} className="border border-gray-100 p-6 rounded-sm hover:border-clicon-orange transition cursor-pointer">
            <img src={cat.img} alt={cat.name} className="w-20 h-20 mx-auto mb-4 object-contain" />
            <p className="font-medium text-sm">{cat.name}</p>
          </div>
        ))}
      </div>

      <button className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-clicon-orange text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition">
        <ArrowRight size={20} />
      </button>
    </div>
  </section>
);

export default CategorySlider;