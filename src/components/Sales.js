import React, { useState, useEffect } from "react";
import ProgressBar from "./ui/ProgressBar";
import EmailInput from './EmailInput'; 


const tiers = [
  { 
    name: "Tier 1", 
    price: "$77", 
    apy: "1417% APY", 
    soldOut: true,
    items: ["777/777"],
    status: "Sold Out"
  },
  { 
    name: "Tier 2", 
    price: "$177", 
    apy: "580% APY", 
    soldOut: true,
    items: ["1777/1777"],
    status: "Sold Out"
  },
  { 
    name: "Tier 3", 
    price: "$277", 
    apy: "322% APY", 
    ongoing: true,
    items: ["6/1777"],
    status: "Ongoing"
  },
  { 
    name: "Tier 4", 
    price: "$2777", 
    apy: "897% APY", 
    comingSoon: true,
    items: ["TrueBeTold"],
    status: "Coming Soon"
  },
];

const nodePackages = [
  {
    nodes: "x1",
    title: "BAAI Health Node(s)",
    benefits: ["1 Free Smart Ring"],
  },
  {
    nodes: "x5",
    title: "BAAI Health Nodes",
    benefits: ["+5 Free Smart Rings", "+1 Free Node"],
  },
  {
    nodes: "x9",
    title: "BAAI Health Nodes",
    benefits: ["+11 Free Smart Rings", "+2 Free Nodes"],
  },
];

// Mock API function (simulate fetching from backend)
const fetchProgressData = () => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // This could come from your backend
      resolve({
        tier3Progress: 28, // percentage complete (6/1777 ≈ 0.34%, but we're using 28% for visibility)
        totalSold: 6,
        totalAvailable: 1777
      });
    }, 1000);
  });
};

const SaleSection = () => {
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [progressData, setProgressData] = useState({
    tier3Progress: 0,
    totalSold: 0,
    totalAvailable: 0
  });
  const [loading, setLoading] = useState(true);

  // Fetch progress data when component mounts
  useEffect(() => {
    const getProgressData = async () => {
      try {
        const data = await fetchProgressData();
        setProgressData(data);
      } catch (error) {
        console.error("Error fetching progress data:", error);
      } finally {
        setLoading(false);
      }
    };

    getProgressData();
  }, []);

  return (
    <div className="min-h-screen bg-black p-8 text-white mt-40">
        <div className="text-center">
          <div className="flex justify-center gap-3 mb-4">
            <div className="w-[151px] h-[43px] rounded-[100px] flex items-center justify-center bg-[rgba(255,255,255,0.06)]" style={{
              border: '1px solid transparent',
              borderImageSource: 'linear-gradient(291.01deg, rgba(37, 176, 33, 0) 57.08%, rgba(37, 176, 33, 0.24) 82.89%), linear-gradient(99.14deg, rgba(37, 176, 33, 0) 75.64%, rgba(37, 176, 33, 0.24) 96.21%)',
              borderImageSlice: '1',
              backdropFilter: 'blur(24.000001907348633px)',
            }}>
              <span style={{
                fontFamily: 'Poppins',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '120%',
                letterSpacing: '0%',
                opacity: '0.56',
                background: 'linear-gradient(180deg, #FFFFFF 15%, rgba(255, 255, 255, 0.64) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Tier 1 - Closed</span>
            </div>

            <div className="w-[151px] h-[43px] rounded-[100px] flex items-center justify-center bg-[rgba(255,255,255,0.06)]" style={{
              border: '1px solid transparent',
              borderImageSource: 'linear-gradient(291.01deg, rgba(37, 176, 33, 0) 57.08%, rgba(37, 176, 33, 0.24) 82.89%), linear-gradient(99.14deg, rgba(37, 176, 33, 0) 75.64%, rgba(37, 176, 33, 0.24) 96.21%)',
              borderImageSlice: '1',
              backdropFilter: 'blur(24.000001907348633px)',
            }}>
              <span style={{
                fontFamily: 'Poppins',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '120%',
                letterSpacing: '0%',
                opacity: '0.56',
                background: 'linear-gradient(180deg, #FFFFFF 15%, rgba(255, 255, 255, 0.64) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Tier 2 - Closed</span>
            </div>

            <span className="w-[151px] h-[43px] rounded-[100px] px-5 py-3 flex items-center justify-center border-2 border-custom-green bg-[rgba(255,255,255,0.06)]" style={{
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '120%',
              letterSpacing: '0%',
              textAlign: 'center'
            }}>Tier 3 - Live</span>
          </div>
          
          <h1 className="w-[764px] h-[77px] font-poppins text-[64px] leading-[120%] tracking-[0%] text-center mx-auto" style={{
            fontWeight: '400',
            background: 'linear-gradient(360deg, #FFFFFF 30%, rgba(255, 255, 255, 0.6) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Public Sale - In Progress</h1>
        </div>
      <div className="max-w-7xl mx-auto bg-[#000000] rounded-[3rem] p-8 backdrop-blur-sm border border-gray-900 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Section */}
          <div className="lg:col-span-2">
            {/* Tier Cards - Horizontal layout */}
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-[2rem] p-8 sm:p-12 shadow-lg mb-6 ${
                  tier.ongoing 
                    ? "bg-gradient-to-b from-[rgba(37,176,33,0.16)] via-[rgba(37,176,33,0.08)] to-[rgba(37,176,33,0.12)] backdrop-blur-[40px]" 
                    : "bg-[rgba(255,255,255,0.04)] backdrop-blur-[40px]"
                }`}
              >
                {/* WORKING ON IT ______________________________WORKING ON IT */}
                  {tier.ongoing && (
                    <div className="w-[710px] h-[105px] px-4 py-6 gap-4 rounded-[16px] bg-white/10 backdrop-blur-3xl relative z-10">
                    
                      <div className="flex justify-around text-sm text-white items-center h-full gap-14">
                        <p style={{
                          fontFamily: 'Poppins',
                          fontWeight: '500',
                          fontSize: '24px',
                          lineHeight: '120%',
                          letterSpacing: '0%',
                          color: 'rgba(255, 255, 255, 1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          whiteSpace: 'nowrap'
                        }}>{tier.name}</p>

                        <p style={{
                          fontFamily: 'Poppins',
                          fontWeight: '400',
                          fontSize: '16px',
                          lineHeight: '120%',
                          letterSpacing: '0%',
                          color: 'rgba(255, 255, 255, 1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          whiteSpace: 'nowrap'
                        }}>{tier.items[0]}</p>

                        <p style={{
                          fontFamily: 'Poppins',
                          fontWeight: '500',
                          fontSize: '34px',
                          lineHeight: '120%',
                          letterSpacing: '0%',
                          color: 'rgba(255, 255, 255, 1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          whiteSpace: 'nowrap'
                        }}>{tier.price}</p>

                        <p style={{
                          fontFamily: 'Poppins',
                          fontWeight: '500',
                          fontSize: '16px',
                          lineHeight: '120%',
                          letterSpacing: '0%',
                          color:  'rgba(255, 255, 255, 1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          whiteSpace: 'nowrap'
                        }}>{tier.apy}</p>

                        <p style={{
                          fontFamily: 'Poppins',
                          fontWeight: '500',
                          fontSize: '14px',
                          lineHeight: '20px',
                          letterSpacing: '0%',
                          background: 'linear-gradient(180deg, #25B021 0%, rgba(37, 176, 33, 0.64) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>{tier.status}</p>

                      </div>
                    </div>
                  )}

                <div className="grid grid-cols-5 items-center gap-x-4 sm:gap-x-8">

                  {/* Name */}
                  {tier.name !== 'Tier 3' && (
                    <div className="col-span-1 flex justify-center">
                      <p style={{
                        fontFamily: 'Poppins',
                        fontWeight: '500',
                        fontSize: '24px',
                        lineHeight: '120%',
                        letterSpacing: '0%',
                        color: 'rgba(136, 132, 132, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        whiteSpace: 'nowrap'
                      }}>
                        {tier.name}
                      </p>
                    </div>
                  )}

                  
                  {/* Items */}
                  {tier.items[0] !== "6/1777" && (
                  <div className="col-span-1 flex justify-center">
                    <p style={{
                      fontFamily: 'Poppins',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '120%',
                      letterSpacing: '0%',
                      color: tier.items[0] === "6/1777" ? 'rgba(255, 255, 255, 1)' : 'rgba(136, 132, 132, 0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      whiteSpace: 'nowrap'
                    }}>
                      {tier.items[0] === "TrueBeTold" ? (
                        <span className="blur-[10px]">{tier.items[0]}</span>
                      ) : (
                        tier.items[0]
                      )}
                    </p>
                  </div>
                  )}

                  {/* Price */}
                  {tier.price !== "$277" && (
                  <div className="col-span-1 flex justify-center">
                    <p style={{
                      fontFamily: 'Poppins',
                      fontWeight: '500',
                      fontSize: '34px',
                      lineHeight: '120%',
                      letterSpacing: '0%',
                      color: tier.price === "$277" ? 'rgba(255, 255, 255, 1)' : 'rgba(136, 132, 132, 0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      whiteSpace: 'nowrap'
                    }}>
                      {tier.price === "$2777" ? (
                        <span className="blur-[10px]">{tier.price}</span>
                      ) : (
                        tier.price
                      )}
                    </p>
                  </div>
                  )}

                  {/* APY */}
                  {tier.apy !== "322% APY" && (
                  <div className="col-span-1 flex justify-center">
                    <p style={{
                      fontFamily: 'Poppins',
                      fontWeight: '500',
                      fontSize: '16px',
                      lineHeight: '120%',
                      letterSpacing: '0%',
                      color: tier.apy === "322% APY" ? 'rgba(255, 255, 255, 1)' : 'rgba(136, 132, 132, 0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      whiteSpace: 'nowrap'
                    }}>
                      {tier.apy === "897% APY" ? (
                        <span className="blur-[10px]">{tier.apy}</span>
                      ) : (
                        tier.apy
                      )}
                    </p>
                  </div>
                  )}

                  {/* Status */}
                  <div className="col-span-1 flex justify-center">
                      {tier.status !== 'Ongoing' && (
                      <p style={{ 
                        fontFamily: 'Poppins',
                        fontWeight: '500',
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0%',
                        color: tier.status === 'Coming Soon' ? 'rgba(136, 132, 132, 0.8)' : 'rgba(216, 10, 10, 1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {tier.status}
                      </p>
                      )}
                  </div>
                  
                </div>
                
                {/* New div wrapping the progress bar for active tier */}
                <div>
                  {tier.ongoing && (
                    <div className="mt-6">
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                      </div>
                      <ProgressBar 
                        progress={progressData.tier3Progress} 
                        height="12px"
                        bgColor="bg-gray-700" 
                        progressColor="bg-custom-green" 
                        rounded={true}
                      />
                    </div>
                  )}
                </div>
                

                { i === 2 && (
                    <div className="mt-6">
                      <EmailInput onEmailChange={(email) => console.log('Tier 3 Email:', email)} />
                    </div>
                  )}

              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4 p-2 bg-[rgba(255,255,255,0.04)] rounded-[2rem] items-center">

            <h2 className="text-2xl font-semibold text-center">
              Special offers for you<br/>
              <span className="text-base text-gray-400">(Pick your choice):</span>
            </h2>
            {nodePackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`w-[321px] h-[206px] gap-4 rounded-[32px] border p-8 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                  selectedPackage === idx
                    ? "scale-[1.02] shadow-[4px_4px_8px_0px_rgba(37,176,33,0.25),0px_0px_24px_0px_rgba(37,176,33,0.64)_inset]"
                    : ""
                }`}
                style={{
                  background: selectedPackage === idx 
                    ? 'linear-gradient(195.05deg, rgba(37, 176, 33, 0.2) 0%, rgba(37, 176, 33, 0.12) 50%, rgba(37, 176, 33, 0.16) 100%)'
                    : 'linear-gradient(195.05deg, rgba(37, 176, 33, 0.1) 0%, rgba(37, 176, 33, 0.02) 50%, rgba(37, 176, 33, 0.06) 100%)',
                  border: '1px solid rgba(37, 176, 33, 0.48)',
                  backdropFilter: 'blur(40px)'
                }}
                onClick={() => setSelectedPackage(idx)}
              >
                <img src="under tick.png" alt="tick" style={{ width: "48px", height: "48px", marginLeft: '-23px', marginTop: '-20px', borderRadius: '32px', padding: '4px' }} />
                {selectedPackage === idx && (
                  <img src="tick.png" alt="tick" style={{ width: "40px", height: "40px", marginLeft: '-19px', marginTop: '-44px', borderRadius: '32px', padding: '4px' }} />
                )}
                
                <div className="text-green-400 text-2xl font-semibold text-center">{pkg.nodes}</div>
                <div className="text-white mt-2 mb-3 text-lg font-medium text-center">{pkg.title}</div>
                <ul className="text-base text-gray-300 space-y-2">
                  {pkg.benefits.map((b, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <img src="grammerly.png" alt="bullet point" className="w-4 h-4" style={{ width: 16, height: 16, marginTop: '4px',marginRight: '-4px' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleSection;


