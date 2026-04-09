import { ArrowRight, Calendar, MessageCircle, User } from 'lucide-react';
import { LATEST_NEWS_DATA } from '../../data';

const LatestNews = () => {
  return (
    <section className="max-w-[1320px] mx-auto px-6 py-16">
      
      {/* --- 4-Column Product Lists --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {/* We pass the data to each list. You can slice or filter these later if you want different items in each column */}
        <MiniProductList title="Flash Sale Today" data={LATEST_NEWS_DATA.miniLists} />
        <MiniProductList title="Best Sellers" data={LATEST_NEWS_DATA.miniLists} />
        <MiniProductList title="Top Rated" data={LATEST_NEWS_DATA.miniLists} />
        <MiniProductList title="New Arrival" data={LATEST_NEWS_DATA.miniLists} />
      </div>

      {/* --- Latest News (Blog Section) --- */}
      <div className="bg-[#F2F4F5] -mx-6 px-6 py-16">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-clicon-black">Latest News</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* FIX: Now using LATEST_NEWS_DATA.blogPosts instead of hardcoding 3 cards */}
            {LATEST_NEWS_DATA.blogPosts.map((post) => (
              <BlogCard 
                key={post.id}
                image={post.image}
                author={post.author}
                date={post.date}
                comments={post.comments}
                title={post.title}
                desc={post.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* Helper: Mini Product List Column */
const MiniProductList = ({ title, data }) => (
  <div className="space-y-4">
    <h3 className="font-bold text-sm uppercase mb-6 tracking-wide text-clicon-black">{title}</h3>
    
    {/* Dynamic mapping from the data prop passed from the parent */}
    {data && data.map((item) => (
      <div key={item.id} className="flex items-center gap-4 p-3 border border-gray-100 rounded-sm hover:border-clicon-orange transition-all cursor-pointer group bg-white">
        <div className="w-20 h-20 bg-gray-50 rounded-sm overflow-hidden shrink-0 flex items-center justify-center">
          <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition duration-300" />
        </div>
        <div>
          <h4 className="text-[13px] font-medium line-clamp-2 leading-relaxed mb-1 text-clicon-black">
            {item.name}
          </h4>
          <span className="text-clicon-blue font-bold text-sm">${item.price}</span>
        </div>
      </div>
    ))}
  </div>
);

/* Helper: Blog Card */
const BlogCard = ({ image, author, date, comments, title, desc }) => (
  <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-xl transition-all group cursor-pointer">
    <div className="overflow-hidden rounded-sm mb-5 aspect-video">
      <img src={image} alt="blog" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
    </div>
    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
      <div className="flex items-center gap-1.5"><User size={14} className="text-clicon-orange"/> {author}</div>
      <div className="flex items-center gap-1.5"><Calendar size={14} className="text-clicon-orange"/> {date}</div>
      <div className="flex items-center gap-1.5"><MessageCircle size={14} className="text-clicon-orange"/> {comments}</div>
    </div>
    <h4 className="font-bold text-lg leading-snug mb-3 group-hover:text-clicon-orange transition-colors line-clamp-2 text-clicon-black">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{desc}</p>
    <button className="text-clicon-orange font-bold uppercase text-xs flex items-center gap-2 hover:translate-x-1 transition-transform">
      Read More <ArrowRight size={16} />
    </button>
  </div>
);

export default LatestNews;