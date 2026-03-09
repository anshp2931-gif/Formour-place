const TopBanner = () => {
  return (
    <div className="bg-[#f0ede5] text-[#4a4a4a] text-xs font-medium py-2 px-4 flex justify-between items-center sticky top-0 z-50">
      <div className="hidden md:flex gap-4">
        <span>Get $20 Rewards</span>
      </div>
      <div className="flex items-center gap-2 flex-grow justify-center">
        <span className="cursor-pointer">‹</span>
        <span className="text-[10px] md:text-sm uppercase tracking-wider font-semibold">
          100 Day Trial: Free shipping $99+ and free returns
        </span>
        <span className="cursor-pointer">›</span>
      </div>
      <div className="hidden md:flex gap-4">
        <span className="cursor-pointer">Stores</span>
        <span className="cursor-pointer">Support</span>
      </div>
    </div>
  );
};

export default TopBanner;
