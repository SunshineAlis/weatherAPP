import { useEffect, useRef, useState } from "react";
import Home from "./svgpic/Home";
import Heart from "./svgpic/Heart";
import People from "./svgpic/People";
import Location from "./svgpic/Location";
import Locate from "./svgpic/locate";
import Loc from "./svgpic/Loc";
import Right from "./svgpic/Right";
import Pine from "./svgpic/Pine";
import Cone from "./svgpic/Cone";
import Yell from "./svgpic/Yell";
import Pur from "./svgpic/Pur";
import Hom from "./svgpic/Hom";
import Loct from "./svgpic/Loct";
import Peopl from "./svgpic/Peopl";
import Hear from "./svgpic/Hear";
import DayRain from "./assets/icons/DayRain.webp";
import DaySnow from "./assets/icons/DaySnow.webp";
import DayStorm from "./assets/icons/DayStorm.webp";
import DayWind from "./assets/icons/DayWind.webp";
import DayClouds from "./assets/icons/DayClouds.webp";
import NightRain from './assets/icons/NightRain.webp';
import DaySun from "./assets/icons/DaySun.webp"
import NightSnow from "./assets/icons/NightSnow.webp";
import NightStorm from "./assets/icons/NightStorm.webp";
import NightWind from "./assets/icons/NightWind.webp";
import NightClouds from "./assets/icons/NightClouds.webp";
import NightMoon from "./assets/icons/NightMoon.webp";

function WeatherApp() {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState ("Ulaanbaatar Mongolia");
  const [loading, setLoading] = useState(false);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const weatherApiKey = "43c89d3aae3d479da26122821251801";
  const getAirQuality = (index) => {
    switch (index) {
      case 1:
        return "Good";
      case 2:
        return "Moderate";
      case 3:
        return "Unhealthy for Sensitive Groups";
      case 4:
        return "Unhealthy ";
      case 5:
        return "Very Unhealthy";
      case 6:
        return "Hazardous";
      default:
        return "N/A";
    }
  };

  const fetchCitySuggestions = async (query) => {
    if (!query.trim()) return;
    try {
      const url = `https://api.weatherapi.com/v1/search.json?key=${weatherApiKey}&q=${query}`;
      const response = await fetch(url);
      const suggestions = await response.json();
      setCitySuggestions(suggestions.slice(0, 10));
    } catch (error) {
      console.error("Error fetching city suggestions:", error.message);
    }
  };

  const search = async (city) => {
    if (!city || city.trim() === "") {
      city = "Ulaanbaatar Mongolia";
    }

    try {
      setLoading(true);
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${city}&aqi=yes`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      alert(`Error fetching weather data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (e) => {
    const query = e.target.value;
    fetchCitySuggestions(query);
  };

  const handleSelect = (cityName) => {
    setSelectedCity(cityName);
    search(cityName);
    setCitySuggestions([]); // Саналын жагсаалтыг цэвэрлэх
  };

  const getDayIcon = () => {
    if (!weatherData?.current?.condition?.text) return null;
    const conditionText = weatherData.current.condition.text.toLowerCase();

    if (conditionText.includes("rain") || conditionText.includes("drizzle") || conditionText.includes("fog") || conditionText.includes("overcast") || conditionText.includes("mist")) {
      return <img src={DayRain} alt="Day Rain Icon" />;
    }

    if (conditionText.includes("sunny")  ) {
      return <img src={DaySun} alt="Day Sun Icon" />;
    }
    if (conditionText.includes("snow") || conditionText.includes("ice") || conditionText.includes("blizzard") || conditionText.includes("sleet")) {
      return <img src={DaySnow} alt="Day Snow Icon" />;
    }
    if (conditionText.includes("thunder") || conditionText.includes("storm")) {
      return <img src={DayStorm} alt="Day Storm Icon" />;
    }
    if (conditionText.includes("wind")) {
      return <img src={DayWind} alt="Day Wind Icon" />;
    }
    if (conditionText.includes("cloud")) {
      return <img src={DaySun} alt="Day Sun Icon" />;
    }

    return <img src={DayClouds} alt="Day Clouds Icon" />;
  };

  const getNightIcon = () => {
    if (!weatherData?.current?.condition?.text) return null;
    const conditionText = weatherData.current.condition.text.toLowerCase();
    if (conditionText.includes("rain") || conditionText.includes("drizzle") || conditionText.includes("fog") || conditionText.includes("overcast") || conditionText.includes("mist")) {
      return <img src={NightRain} alt="Night Rain Icon" />;
    }
    if (conditionText.includes("snow") || conditionText.includes("ice") || conditionText.includes("blizzard") || conditionText.includes("sleet")) {
      return <img src={NightSnow} alt="Night Snow Icon" />;
    }
    if (conditionText.includes("thunder") || conditionText.includes("storm")) {
      return <img src={NightStorm} alt="Night Storm Icon" />;
    }
    if (conditionText.includes("cloud")) {
      return <img src={NightClouds} alt="Night Clouds Icon" />;
    }
    
    if (conditionText.includes("wind")) {
      return <img src={NightWind} alt="Night Wind Icon" />;
    }
    
    if (conditionText.includes("clear")) {
      return <img src={NightMoon} alt="Night Moon Icon" />;
    }
    return <img src={NightMoon} alt="Night Moon Icon" />;

  };


  useEffect(() => {
    search(selectedCity);
  }, []);
  
  return (
    <div className="bg-slate-150 w-[100%] h-[850px] m-auto mt-[50px] relative">
      {/* Design circles */}
      <div className="absolute top-[395px] left-[490px] w-[250px] h-[250px] border border-slate-200 rounded-full"></div>
      <div className="absolute top-[300px] left-[400px] w-[470px] h-[450px] border border-slate-200 rounded-full"></div>
      <div className="absolute top-[180px] left-[250px] w-[700px] h-[700px] border border-slate-200 rounded-full"></div>
      <div className="absolute top-[100px] left-[130px] w-[1000px] h-[850px] border border-slate-200 rounded-full"></div>

      {/* Right Section with Icons */}
      <div className="ml-[600px] absolute top-[-150px]">
        <Right />
        <div className="absolute top-[628px] left-[-70px] w-[200px] h-[400px]">
          <Cone />
        </div>
        <div className="absolute top-[628px] left-[-10px] w-[200px] h-[400px]">
          <Pine />
        </div>
        <div className="absolute top-[380px] left-[-495px]">
          <Yell />
        </div>
        <div className="absolute top-[670px] right-[250px]">
          <Pur />
        </div>
      </div>

      {/* Search Box */}
      <div className="absolute top-[120px] left-[450px] w-[300px] rounded-3xl ">
        <input
          type="text"
          placeholder="   Search"
          ref={inputRef}
          onChange={handleInput}
          className="h-[55px] w-[280px] border-4 rounded-2xl"
        />
        {citySuggestions.length > 0 && (
          <ul className="bg-white border rounded-lg mt-2">
            {citySuggestions.map((city) => (
              <li
                key={city.id}
                className="cursor-pointer p-2 hover:bg-gray-200"
                onClick={() => handleSelect(city.name)}
              >
                {city.name}, {city.country}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Weather Info - Day */}
      <div className="w-[280px] h-[470px] border-2 border-slate-200 rounded-lg bg-slate-200 
      opacity-100 absolute top-[190px] left-[150px]">
        {loading ? (
          <> 
          <div className="flex justify-center items-center h-full">
          <p className="text-gray-700 text-xl">Loading...</p>
        </div>
        </>) : 
        ( <>        
        <div className="flex flex-col p-[25px] mb-[40px]">
        <h2 className="text-[20px] font-semibold text-gray-500 absolute left-[20px] top-[3px] p-[10px]">{formattedDate}</h2>
        <p className="text-[170%] font-semibold text-gray-700 absolute left-[15px] top-[40px]">
          {weatherData?.location?.name || "N/A"}</p>
          <p className="text-[150%] flex gap-[9%] font-semibold text-gray-700 absolute left-[15px] top-[80px]" >
            {weatherData?.location?.country || "N/A"} <span >
          <Locate />
          </span></p>
          </div>
        <div className="w-[170px] h-[70px] absolute top-[120px] left-[70px]">
        {getDayIcon()}
        </div>
        <span className="font-semibold text-[50px] text-gray-800 absolute top-[265px] left-[15px]">
          {weatherData?.current?.temp_c || "N/A"}°C
        </span>
        <p className=" text-[20px] text-gray-900 absolute top-[329px] left-[20px]">
        {weatherData?.forecast?.forecastday?.[0]?.day?.condition?.text || "N/A"}
        </p>
              <ul className="absolute top-[355px] left-[20px]  text-[18px] text-gray-900">
                <li>
                  Air quality:{" "}
                  {getAirQuality(weatherData?.current?.air_quality?.["us-epa-index"])}
                </li>
              </ul>
        <div className="font-semibold text-gray-800 flex items-center gap-[21px] absolute top-[87%] left-[7%]">
          <Hom />
          <Loct />
          <Hear />
          <Peopl />
        </div>
         </> )}
      </div>
      {/* Weather Info - Night */}
      <div className="w-[265px] h-[470px] border-2 border-slate-400 rounded-lg bg-slate-900 opacity-70 absolute top-[190px] left-[750px]">
        {loading? (
          <> 
          <div className="flex justify-center items-center h-full">
          <p className="text-gray-700 text-xl">Loading...</p>
        </div>
        </>) :( 
        <> <p className="text-[120%] text-gray-200 absolute left-[15px] top-[3px] p-[10px]">{formattedDate}</p> 
        <p className="text-[170%] font-semibold text-gray-200 absolute left-[15px] top-[40px]">
          {weatherData?.location?.name || "N/A"}</p>
          <p className="text-[150%] flex gap-[9%] font-semibold text-gray-200 absolute left-[15px] top-[75px]" >
            {weatherData?.location?.country || "N/A"} <span >
          <Loc />
          </span></p>
        <div className="flex items-center justify-center w-[140px] h-[50px] absolute top-[180px] left-[70px]">
        {getNightIcon()}
        </div>
        <span className="font-semibold text-[50px] text-gray-100 absolute top-[260px] left-[20px]">
          {weatherData?.forecast?.forecastday?.[0]?.day?.mintemp_c || "N/A"}°C
        </span>
        <p className="text-[20px] text-gray-200 absolute top-[340px] left-[20px]">
        {weatherData?.current?.condition?.text || "N/A"} 
        </p>
        <div className="font-semibold text-gray-800 flex items-center gap-[25px] absolute top-[87%] left-[7%]">
          <Home />
          <Location />
          <Heart />
          <People />
        </div></>)}
      </div>
    </div>
  );
}

export default WeatherApp;