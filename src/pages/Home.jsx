import TopBanner from '../components/TopBanner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import eggImg from '../assets/egg.jpeg';
import riceImg from '../assets/photo-1546069901-ba9599a7e63c.jpeg';
import cookwareSetImg from '../assets/cookware-set.jpg';
import ovenThumbImg from '../assets/oven-thumb.jpg';
import alwaysPanThumbImg from '../assets/always-pan-thumb.jpg';

const Home = () => {
  const products = [
    {
      badge: "$193 SET SAVINGS",
      image: cookwareSetImg,
      title: "Cookware Set",
      subTitle: "13 piece",
      description: "A 13-piece Always Pan and Perfect Pot set",
      currentPrice: "325",
      valueText: "($518 Value)",
      colorOptions: ["#6b8aa3", "#f4d56f", "#2a2a2a", "#d4cec1", "#7a8b7f"]
    },
    {
      badge: "SALE | $54 OFF",
      image: ovenThumbImg,
      title: "Wonder Oven Pro",
      description: "8-in-1 non-toxic digital air-fryer & toaster oven",
      currentPrice: "295",
      originalPrice: "349",
      colorOptions: ["#a8b5be", "#6b8aa3", "#2a2a2a", "#d4cec1", "#8b9b87"]
    },
    {
      badge: "SALE | $36 OFF",
      image: alwaysPanThumbImg,
      title: "Always Pan 2.0",
      description: "Our 10-in-1 non-toxic ceramic nonstick pan",
      currentPrice: "99",
      originalPrice: "135",
      colorOptions: ["#d4917d", "#2a2a2a", "#7a9eb0", "#8b9b87", "#d4cec1"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfcf7]">
      <TopBanner />
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] overflow-hidden flex flex-col md:flex-row">
          <div className="flex-1 relative h-1/2 md:h-full group">
            <img src={eggImg} alt="Egg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/5"></div>
          </div>
          <div className="flex-1 relative h-1/2 md:h-full group">
            <img src={riceImg} alt="Rice" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/5"></div>
          </div>
          
          <div className="absolute inset-x-0 bottom-24 md:inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
            <div className="pointer-events-auto max-w-2xl">
              <h1 className="text-4xl md:text-7xl font-bold text-white drop-shadow-lg mb-6 leading-tight">
                Biggest Sale<br />of the Year
              </h1>
              <p className="text-white text-lg md:text-xl font-semibold mb-10 drop-shadow-md">
                Save up to 35% sitewide on non-toxic, high-performance<br className="hidden md:block" />
                favorites before they're gone.
              </p>
              <button className="bg-white text-[#4a4a4a] px-10 py-4 font-bold tracking-widest text-[13px] uppercase hover:bg-[#f0ede5] transition-colors rounded-sm shadow-xl">
                Shop Sale Now
              </button>
            </div>
          </div>
        </section>

        <div className="bg-[#4a4a4a] text-white py-3 px-4 text-center text-xs font-bold tracking-widest leading-relaxed">
          SALE EXCLUSIVE: <a href="#" className="underline underline-offset-4 decoration-1">HOSTING SET</a>: $975 <span className="opacity-60 font-medium whitespace-nowrap">($1,512 VALUE)*</span> →
        </div>

        {/* Deals Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4a4a4a] tracking-tight">Shop Best Deals</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
