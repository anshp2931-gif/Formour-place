import instagramImg from '../assets/download.jpeg';
import tiktokImg from '../assets/download (1).jpeg';
import facebookImg from '../assets/download (3).png';
import flagImg from '../assets/download (4).png';

const Footer = () => {
  return (
    <footer className="bg-[#f0ede5] text-[#4a4a4a] pt-16 pb-8 px-4 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Keep in touch</h2>
            <div className="relative max-w-sm">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-[#4a4a4a] py-2 pr-10 focus:outline-none"
              />
              <button className="absolute right-0 bottom-2 text-xl">→</button>
            </div>
            <p className="text-xs mt-6 opacity-70 leading-relaxed max-w-xs">
              By signing up, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>. You may unsubscribe at any time.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" aria-label="Instagram"><img src={instagramImg} alt="Instagram" className="h-6 w-auto" /></a>
              <a href="#" aria-label="TikTok"><img src={tiktokImg} alt="TikTok" className="h-6 w-auto" /></a>
              <a href="#" aria-label="Facebook"><img src={facebookImg} alt="Facebook" className="h-6 w-auto" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase text-[11px] tracking-widest">Products</h3>
            <ul className="text-sm space-y-2 opacity-80">
              <li><a href="#" className="hover:underline">Always Pan</a></li>
              <li><a href="#" className="hover:underline">Cookware</a></li>
              <li><a href="#" className="hover:underline">Bakeware</a></li>
              <li><a href="#" className="hover:underline">Tableware</a></li>
              <li><a href="#" className="hover:underline">Kitchen Tools</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase text-[11px] tracking-widest">Company</h3>
            <ul className="text-sm space-y-2 opacity-80">
              <li><a href="#" className="hover:underline">Mission</a></li>
              <li><a href="#" className="hover:underline">Recycling Program</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Retail Locations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase text-[11px] tracking-widest">Support</h3>
            <ul className="text-sm space-y-2 opacity-80">
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">Warranty</a></li>
              <li><a href="#" className="hover:underline">Financing</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#4a4a4a]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-widest opacity-60 gap-6">
          <p>© Our Place 2025</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#">Copyright</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
          </div>
          <div className="flex items-center gap-2">
            <img src={flagImg} alt="Flag" className="h-4 w-auto" />
            <span>United States (English)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
