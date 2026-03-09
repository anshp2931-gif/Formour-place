import TopBanner from '../components/TopBanner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import bakewareHeroImg from '../assets/bakeware-hero.jpg';
import bakingSheetImg from '../assets/baking-sheet.jpg';
import loafPanImg from '../assets/loaf-pan.jpg';
import muffinPanImg from '../assets/muffin-pan.jpg';
import cakePanImg from '../assets/cake-pan.jpg';
import cookwareSetImg from '../assets/cookware-set.jpg';

const Bakeware = () => {
  const products = [
    {
      badge: "SALE | $20 OFF",
      image: bakingSheetImg,
      title: "Baking Sheet Set",
      subTitle: "2 piece",
      description: "Non-toxic ceramic nonstick sheets for perfectly even baking",
      currentPrice: "79",
      originalPrice: "99",
      colorOptions: ["#d4cec1", "#4a4a4a", "#5a7a9b", "#d39b8a"]
    },
    {
      badge: "SALE | $15 OFF",
      image: loafPanImg,
      title: "Always Pan Loaf",
      description: "Perfect for banana bread, sourdough & meatloaf",
      currentPrice: "55",
      originalPrice: "70",
      colorOptions: ["#6b7d6f", "#d39b8a", "#4a4a4a", "#c8c5bd"]
    },
    {
      badge: "SALE | $25 OFF",
      image: muffinPanImg,
      title: "12-Cup Muffin Pan",
      description: "Ceramic nonstick coating for perfectly shaped muffins & cupcakes",
      currentPrice: "65",
      originalPrice: "90",
      colorOptions: ["#4a4a4a", "#d4cec1", "#d39b8a"]
    },
    {
      badge: "SALE | $18 OFF",
      image: cakePanImg,
      title: "Round Cake Pan",
      subTitle: "Set of 2",
      description: "Even heat distribution for perfectly layered cakes",
      currentPrice: "72",
      originalPrice: "90",
      colorOptions: ["#c9b99a", "#4a4a4a", "#5a7a9b"]
    },
    {
      badge: "$120 SET SAVINGS",
      image: cookwareSetImg,
      title: "Complete Bakeware Set",
      subTitle: "8 piece",
      description: "Everything you need — sheets, pans, loaf & muffin pan",
      currentPrice: "279",
      valueText: "($399 Value)",
      colorOptions: ["#6a6a6a", "#d4cec1", "#d39b8a"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfcf7]">
      <TopBanner />
      <Navbar />
      
      <main>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 text-[11px] uppercase tracking-widest font-bold opacity-60">
          <a href="/" className="hover:underline">Home</a> / <a href="#" className="hover:underline">Shop All</a> / <span>Bakeware</span>
        </div>

        <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row-reverse items-center gap-12 text-[#4a4a4a]">
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Bakeware</h1>
            <p className="text-lg md:text-xl opacity-80 leading-relaxed max-w-lg">
              Non-toxic, high-performance bakeware for perfectly golden results — from cookies to sourdough.
            </p>
          </div>
          <div className="flex-1 w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={bakewareHeroImg} 
              alt="Bakeware" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="border-y border-[#f0ede5] py-4 bg-white sticky top-[92px] z-30">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex overflow-x-auto no-scrollbar gap-4 text-[11px] font-bold tracking-widest uppercase items-center whitespace-nowrap">
            <button className="px-4 py-2 bg-[#f0ede5] rounded-full">Filter ☰</button>
            <button className="px-4 py-2 border-b-2 border-[#4a4a4a]">All Bakeware</button>
            <button className="px-4 py-2 opacity-60 hover:opacity-100 transition-opacity">Baking Sheets</button>
            <button className="px-4 py-2 opacity-60 hover:opacity-100 transition-opacity">Loaf & Cake Pans</button>
            <button className="px-4 py-2 opacity-60 hover:opacity-100 transition-opacity">Bakeware Sets</button>
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

export default Bakeware;
