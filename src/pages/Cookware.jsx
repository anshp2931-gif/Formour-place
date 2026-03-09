import TopBanner from '../components/TopBanner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import cookwareHeroImg from '../assets/cookware-hero.jpg';
import cookwareSetBlueImg from '../assets/cookware-set-blue.jpg';
import pinkPanImg from '../assets/pink-pan.jpg';
import largePanImg from '../assets/large-pan.jpg';
import perfectPotImg from '../assets/perfect-pot.jpg';
import cookwareSetImg from '../assets/cookware-set.jpg';

const Cookware = () => {
  const products = [
    {
      badge: "$193 SET SAVINGS",
      image: cookwareSetBlueImg,
      title: "Cookware Set",
      subTitle: "13 piece",
      description: "A 13-piece Always Pan and Perfect Pot set",
      currentPrice: "325",
      valueText: "($518 Value)",
      colorOptions: ["#5a7a9b", "#f4e4b7", "#4a4a4a", "#c8c5bd", "#6b7d6f", "#d39b8a"]
    },
    {
      badge: "SALE | $36 OFF",
      image: pinkPanImg,
      title: "Always Pan 2.0",
      description: "Our 10-in-1 non-toxic ceramic nonstick pan",
      currentPrice: "99",
      originalPrice: "135",
      colorOptions: ["#d39b8a", "#4a4a4a", "#5a7a9b", "#6b7d6f", "#c8c5bd"]
    },
    {
      badge: "SALE | $34 OFF",
      image: largePanImg,
      title: "Large Always Pan",
      description: "A larger model of the bestselling 10-in-1 nonstick pan",
      currentPrice: "125",
      originalPrice: "159",
      colorOptions: ["#4a4a4a", "#c9b99a", "#7a9aae", "#8a9a8a", "#d4a89a"]
    },
    {
      badge: "SALE | $30 OFF",
      image: perfectPotImg,
      title: "Perfect Pot",
      description: "An 8-in-1 family-sized, stovetop-to-oven nonstick pot",
      currentPrice: "119",
      originalPrice: "149",
      colorOptions: ["#c9b99a", "#5a5a5a", "#7a9aae", "#8a9a8a", "#d4a89a", "#b8a8c8"]
    },
    {
      badge: "$322 SET SAVINGS",
      image: cookwareSetImg,
      title: "Titanium Pro Cookware + Bakeware Set",
      subTitle: "15 piece",
      description: "A set of titanium cookware, plus nonstick bakeware",
      currentPrice: "575",
      valueText: "($897.95 Value)",
      colorOptions: ["#6a6a6a", "#7a9aae", "#a0a0a0", "#d4a89a", "#8a9a8a", "#c9b99a", "#e8d870"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfcf7]">
      <TopBanner />
      <Navbar />
      
      <main>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 text-[11px] uppercase tracking-widest font-bold opacity-60">
          <a href="/" className="hover:underline">Home</a> / <a href="#" className="hover:underline">Shop All</a> / <span>Cookware</span>
        </div>

        <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row items-center gap-12 text-[#4a4a4a]">
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Cookware</h1>
            <p className="text-lg md:text-xl opacity-80 leading-relaxed max-w-lg">
              Non-toxic, multifunctional cookware for healthier, more inspired everyday cooking.
            </p>
          </div>
          <div className="flex-1 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={cookwareHeroImg} 
              alt="Cookware" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="border-y border-[#f0ede5] py-4 bg-white sticky top-[92px] z-30">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex overflow-x-auto no-scrollbar gap-4 text-[11px] font-bold tracking-widest uppercase items-center whitespace-nowrap">
            <button className="px-4 py-2 bg-[#f0ede5] rounded-full">Filter ☰</button>
            <button className="px-4 py-2 border-b-2 border-[#4a4a4a]">All Cookware</button>
            <button className="px-4 py-2 opacity-60 hover:opacity-100 Transition-opacity">Cookware Sets</button>
            <button className="px-4 py-2 opacity-60 hover:opacity-100 Transition-opacity">Dutch Ovens & Stock Pots</button>
            <button className="px-4 py-2 opacity-60 hover:opacity-100 Transition-opacity">Grill Pans & Griddles</button>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
            
            {/* Promo Card */}
            <div className="lg:col-span-1 bg-[#4a4a4a] text-white p-12 rounded-2xl flex flex-col justify-between items-start group relative overflow-hidden">
               <div className="z-10">
                  <h2 className="text-2xl font-bold mb-8 leading-tight">
                    Earn 1 point per $1. Plus, get $30 in bonus rewards when you spend $300+ during our Black Friday Sale!
                  </h2>
                  <button className="bg-white text-[#4a4a4a] px-8 py-3 font-bold tracking-widest text-[11px] uppercase hover:bg-white/90 transition-colors">
                    Shop Now
                  </button>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cookware;
