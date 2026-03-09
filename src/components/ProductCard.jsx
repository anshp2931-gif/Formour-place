const ProductCard = ({ badge, image, title, subTitle, description, currentPrice, originalPrice, valueText, colorOptions }) => {
  return (
    <div className="flex flex-col gap-4 cursor-pointer group">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        {badge && (
          <span className="absolute top-4 left-4 z-10 bg-white/90 px-3 py-1 text-[10px] font-bold tracking-widest text-[#4a4a4a]">
            {badge}
          </span>
        )}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[14px] md:text-[16px] font-bold text-[#4a4a4a] leading-tight flex items-baseline gap-1">
          {title} {subTitle && <span className="text-[14px] font-normal opacity-60">({subTitle})</span>}
        </h3>
        {description && <p className="text-[13px] opacity-70 leading-snug">{description}</p>}
        <div className="flex items-center gap-2 mt-1">
          <span className="font-bold text-[#4a4a4a]">${currentPrice}</span>
          {originalPrice && <span className="text-[13px] opacity-50 line-through">${originalPrice}</span>}
          {valueText && <span className="text-[13px] text-[#4a4a4a] opacity-80 italic">{valueText}</span>}
        </div>
        
        {colorOptions && (
          <div className="flex gap-1.5 mt-2">
            {colorOptions.map((color, index) => (
              <div 
                key={index}
                className="w-3.5 h-3.5 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
