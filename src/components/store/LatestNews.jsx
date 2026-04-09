import { ArrowRight, Calendar, MessageCircle, User } from 'lucide-react';

const LatestNews = () => {
  return (
    <section className="max-w-[1320px] mx-auto px-6 py-16">
      
      {/* --- 4-Column Product Lists --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <MiniProductList title="Flash Sale Today" />
        <MiniProductList title="Best Sellers" />
        <MiniProductList title="Top Rated" />
        <MiniProductList title="New Arrival" />
      </div>

      {/* --- Latest News (Blog Section) --- */}
      <div className="bg-[#F2F4F5] -mx-6 px-6 py-16">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Latest News</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BlogCard 
              image="/Blog.jpg"
              author="Kristin"
              date="19 Dec, 2013"
              comments="453"
              title="Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor."
              desc="Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus."
            />
            <BlogCard 
              image="/Blog1.jpg"
              author="Robert"
              date="28 Nov, 2015"
              comments="738"
              title="Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae."
              desc="Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem."
            />
            <BlogCard 
              image="Blog2.jpg"
              author="Arlene"
              date="9 May, 2014"
              comments="826"
              title="Curabitur massa orci, consectetur et blandit ac, auctor et tellus."
              desc="Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* Helper: Mini Product List Column */
const MiniProductList = ({ title }) => (
  <div className="space-y-4">
    <h3 className="font-bold text-sm uppercase mb-6 tracking-wide">{title}</h3>
    
    {/* FIX IS RIGHT HERE: I added before the dot */}
    {[].map((item) => (
      <div key={item} className="flex items-center gap-4 p-3 border border-gray-100 rounded-sm hover:border-clicon-orange transition cursor-pointer group">
        <div className="w-20 h-20 bg-gray-50 rounded-sm overflow-hidden shrink-0">
          <img src="https://via.placeholder.com/80" alt="item" className="w-full h-full object-contain group-hover:scale-110 transition duration-300" />
        </div>
        <div>
          <h4 className="text-[13px] font-medium line-clamp-2 leading-relaxed mb-1">
            {item === 1 ? "Bose Sport Earbuds - Wireless Earphones..." : "Samsung Galaxy S21 5G 128GB..."}
          </h4>
          <span className="text-blue-500 font-bold text-sm">$1,500</span>
        </div>
      </div>
    ))}
  </div>
);

/* Helper: Blog Card */
const BlogCard = ({ image, author, date, comments, title, desc }) => (
  <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-xl transition group cursor-pointer">
    <div className="overflow-hidden rounded-sm mb-5">
      <img src={image} alt="blog" className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
    </div>
    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
      <div className="flex items-center gap-1.5"><User size={14} className="text-clicon-orange"/> {author}</div>
      <div className="flex items-center gap-1.5"><Calendar size={14} className="text-clicon-orange"/> {date}</div>
      <div className="flex items-center gap-1.5"><MessageCircle size={14} className="text-clicon-orange"/> {comments}</div>
    </div>
    <h4 className="font-bold text-lg leading-snug mb-3 group-hover:text-clicon-orange transition line-clamp-2">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{desc}</p>
    <button className="text-clicon-orange font-bold uppercase text-xs flex items-center gap-2 border-2 border-transparent hover:border-clicon-orange/20 py-2 px-4 rounded-sm transition">
      Read More <ArrowRight size={16} />
    </button>
  </div>
);

export default LatestNews;