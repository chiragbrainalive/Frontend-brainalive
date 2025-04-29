import React from 'react';

const ProgressBar = ({ 
  progress, 
  height = "12px", 
  bgColor = "bg-gray-700",
  progressColor = "bg-custom-green", 
  rounded = true,
  showPercentage = false,
  className = ""
}) => {

  const validProgress = Math.min(Math.max(0, progress || 0), 100);
  
  return (
    <div className={`flex items-center w-full ${className}`}>
      <div 
        className={`w-full ${bgColor} ${rounded ? 'rounded-full' : ''} overflow-hidden`}
        style={{ height }}
      >
        <div 
          className={`h-full ${progressColor} transition-all duration-300 ease-in-out`} 
          style={{ width: `${validProgress}%` }}
        />
      </div>
      
      {showPercentage && (
        <span className="ml-2 text-sm font-medium text-white">
          {validProgress}%
        </span>
      )}
    </div>
  );
};


const fetchProgressData = async () => {
  try {
    const response = await fetch('https://your-api.com/api/sales/progress');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching progress data:', error);
    return { tier3Progress: 0, totalSold: 0, totalAvailable: 0 };
  }
};


export { fetchProgressData };
export default ProgressBar;