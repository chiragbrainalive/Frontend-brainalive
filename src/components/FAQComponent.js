import React, { useState } from 'react';
import faqItems from '../constant/FAQConstant';

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  
  const leftItems = faqItems.filter((_, index) => index % 2 === 0);
  const rightItems = faqItems.filter((_, index) => index % 2 !== 0);

  return (
    <div id="faq" className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 scroll-mt-24">
      <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-normal mb-6 sm:mb-8 lg:mb-12 text-white text-center font-poppins leading-tight">
        Frequently asked questions
      </h1>
      
      
      <div className="block lg:hidden space-y-4">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            isActive={activeIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>

      
      <div className="hidden lg:flex gap-6">
        
        <div className="flex-1 space-y-4">
          {leftItems.map((item, index) => (
            <FAQItem
              key={index * 2}
              item={item}
              isActive={activeIndex === index * 2}
              onClick={() => toggleFAQ(index * 2)}
            />
          ))}
        </div>
        
        
        <div className="flex-1 space-y-4">
          {rightItems.map((item, index) => (
            <FAQItem
              key={index * 2 + 1}
              item={item}
              isActive={activeIndex === index * 2 + 1}
              onClick={() => toggleFAQ(index * 2 + 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ item, isActive, onClick }) => (
  <div 
    className="bg-[rgba(27,27,27,1)] rounded-[16px] overflow-hidden shadow-[0px_5px_16px_0px_rgba(8,15,52,0.06)]"
  >
    <div 
      className="flex justify-between items-center p-4 cursor-pointer hover:bg-opacity-50 transition-colors"
      onClick={onClick}
    >
      <h3 className="text-[18px] leading-[28px] font-medium text-white pr-4 font-poppins">{item.question}</h3>

      <button 
        className="flex-shrink-0 flex items-center justify-center focus:outline-none text-white relative border border-gray-200/20 rounded-lg bg-gray-200/20 transition-all w-[40px] h-[40px] sm:w-[44.56px] sm:h-[41.5px]"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <div className="text-xl sm:text-2xl font-medium w-4 h-4 flex items-center justify-center">
          <img src={isActive ? "minus.png" : "plus.png"} alt={isActive ? "Collapse" : "Expand"} className="w-auto h-auto" />
        </div>
      </button>
    </div>
    
    <div className={`
      px-4 overflow-hidden transition-all duration-300
      ${isActive ? 'max-h-96 pb-4' : 'max-h-0'}
    `}>
      <p className="text-white text-xs sm:text-sm font-poppins">{item.answer}</p>
    </div>
  </div>
);

export default FAQComponent;