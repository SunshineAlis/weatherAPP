import React from 'react';
import DayRain from './DayRain.png';
import DaySnow from './DaySnow.png';
import DayStorm from './DayStorm.png';
import DayWind from './DayWind.png';
import DayClouds from './DayClouds.png';
import NightRain from './NightRain.png';
import NightSnow from './NightSnow.png';
import NightStorm from './NightStorm.png';
import NightWind from './NightWind.png';
import NightClouds from './NightClouds.png';
import Default from './Default.png';

const MyComponent = () => {
  return (
    <div>
      <img src={DayRain} alt="Day Rain" />
      <img src={DaySnow} alt="Day Snow" />
      <img src={DayStorm} alt="Day Storm" />
      <img src={DayWind} alt="Day Wind" />
      <img src={DayClouds} alt="Day Clouds" />
      <img src={NightRain} alt="Night Rain" />
      <img src={NightSnow} alt="Night Snow" />
      <img src={NightStorm} alt="Night Storm" />
      <img src={NightWind} alt="Night Wind" />
      <img src={NightClouds} alt="Night Clouds" />
      <img src={Default} alt="Default" />
    </div>
  );
};

export default MyComponent;