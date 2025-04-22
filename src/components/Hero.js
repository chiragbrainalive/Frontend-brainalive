import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black ">
      {/* Background Image Container */}
      <div className="absolute inset-0 flex items-center justify-center translate-y-20">
        <div className="relative w-full h-full">
          <img 
            src="/background.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img 
            src="/Frame.png"
            alt="Frame"
            className="absolute inset-0 w-full h-full object-cover opacity-100"
          />
        </div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 py-32 text-white">
        <div className="flex flex-col md:flex-row justify items-start gap-8">
          {/*Left Content */}
          <div className="max-w-xl md:mt-0 md:ml-[98px] relative">
            <h1 className="font-mulish !font-[600] text-hero-title mb-6" style={{fontFamily: 'Mulish, sans-serif'}}>
              BAAI Health<br />
              Node Sale
            </h1>

            <div className="flex items-center gap-2">
              <img src="/Vector 16.svg" alt="Divider" className="mt-2" />
              <p className="font-poppins text-base text-gray-300 leading-[100%] tracking-[0%] align-middle" style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '400'
              }}>
                Grab your nodes now to get: <span className="text-lg md:text-xl text-custom-green font-semibold">1400% APY</span>
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="max-w-xl md:mt-4 md:ml-80">
            <p className="font-poppins text-[18px] leading-[180%] tracking-[0%] align-middle capitalize text-gray-300 mt-4" style={{
              fontWeight: '500'
            }}>
              BAAI Health Node Comes With A <br/>Complimentary Smart Ring That Converts Your <br/>Everyday Health Activity Into{" "}
              <span className="text-green-500">REWARDS</span>.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <button className="border border-white text-white w-[201.5px] h-[53px] rounded-[88px] px-6 py-3 font-semibold hover:bg-white hover:text-black transition flex items-center justify-center gap-2">
                Docs
              </button>
              <button className="bg-[rgba(37,176,33,1)] text-white w-[201.5px] h-[53px] rounded-[88px] px-6 py-3 font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
                Buy Nodes
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 


