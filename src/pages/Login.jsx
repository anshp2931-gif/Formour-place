import TopBanner from '../components/TopBanner';
import Navbar from '../components/Navbar';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#fdfcf7] flex flex-col">
      <TopBanner />
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-white p-10 md:p-12 rounded-[2rem] shadow-2xl border border-[#f0ede5]">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[#4a4a4a] mb-2 font-serif">Our Place</h1>
            <p className="text-sm opacity-50 font-medium">Sign in to your account</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#4a4a4a] block ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4a4a4a] opacity-30" size={18} />
                <input 
                  type="email" 
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-[#fdfcf7] border border-[#f0ede5] rounded-xl focus:outline-none focus:border-[#4a4a4a] transition-colors font-medium text-[15px]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#4a4a4a] block ml-1 flex justify-between">
                <span>Password</span>
                <a href="#" className="normal-case font-medium hover:underline">Forgot?</a>
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4a4a4a] opacity-30" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-[#fdfcf7] border border-[#f0ede5] rounded-xl focus:outline-none focus:border-[#4a4a4a] transition-colors font-medium text-[15px]"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 px-1">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-[#f0ede5] accent-[#4a4a4a]" />
              <label htmlFor="remember" className="text-[13px] font-medium opacity-70 cursor-pointer">
                Remember me
              </label>
            </div>

            <button className="w-full bg-[#4a4a4a] text-white py-4 font-bold tracking-widest text-xs uppercase hover:bg-black transition-colors rounded-xl shadow-lg mt-4 flex items-center justify-center gap-2 group">
              Sign In
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-[#f0ede5] text-center">
            <p className="text-[13px] font-medium opacity-50 mb-4">Don't have an account?</p>
            <button className="w-full bg-transparent border-2 border-[#4a4a4a] text-[#4a4a4a] py-4 font-bold tracking-widest text-xs uppercase hover:bg-[#4a4a4a] hover:text-white transition-all rounded-xl">
              Create an Account
            </button>
          </div>

          <div className="flex justify-center gap-8 mt-10 filter grayscale opacity-30">
             <div className="text-xl">🚚</div>
             <div className="text-xl">🔄</div>
             <div className="text-xl">⭐</div>
          </div>
        </div>
      </main>

      <footer className="bg-[#4a4a4a] text-white py-6 text-center text-[10px] uppercase font-bold tracking-widest opacity-60">
        <p>© Our Place 2025 · Privacy · Terms</p>
      </footer>
    </div>
  );
};

export default Login;
