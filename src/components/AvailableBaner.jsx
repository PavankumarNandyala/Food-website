
import React from 'react';
import GooglePlay from '../assets/play_store.png';
import AppStore from '../assets/app_store.png';
import GPS from '../assets/mobile_bike.gif';

const AvailableBanner = () => {
  return (
    <div className="bg-gray-100 py-8  dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Left side: Text + Store buttons */}
        <div data-aos="zoom-in" className="flex flex-col items-start md:w-1/2 space-y-4">
          <p className="text-2xl sm:text-3xl font-semibold">
            Foodly is Available for Android and IOS
          </p>
          <div className="flex space-x-4">
            <img
              src={GooglePlay}
              alt="Google Play"
              className="h-12 object-contain"
            />
            <img
              src={AppStore}
              alt="App Store"
              className="h-12 object-contain"
            />
          </div>
        </div>
        
        {/* Right side: GPS image */}
        <div  data-aos="zoom-in" className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={GPS}
            alt="Mobile bike GIF"
            className="h-[200px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default AvailableBanner;

