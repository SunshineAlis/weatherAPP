import { useRef, useState } from "react";
import Home from "./icons/Home";
import Heart from "./icons/Heart";
import People from "./icons/People";
import Location from "./icons/Location";
import Locate from "./icons/locate";
import Loc from "./icons/Loc";
import Right from "./icons/Right";
import Pine from "./icons/Pine";
import Cone from "./icons/Cone";
import Yell from "./icons/Yell";
import Pur from "./icons/Pur";


function WeatherApp() {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar Mongolia");

const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const weatherApiKey = "43c89d3aae3d479da26122821251801";

  const fetchCitySuggestions = async (query) => {
    if (!query.trim()) return;

    try {
      const url = `https://api.weatherapi.com/v1/search.json?key=${weatherApiKey}&q=${query}`;
      const response = await fetch(url);
      const suggestions = await response.json();
      setCitySuggestions(suggestions.slice(0, 15)); // Fetch first 15 cities
    } catch (error) {
      console.error("Error fetching city suggestions:", error.message);
    }
  };

  const search = async (city) => {
    if (!city || city.trim() === "") {
      city = "Ulaanbaatar Mongolia"; // Default city
    }

    try {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${city}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data); // Store weather data
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      alert(`Error fetching weather data: ${error.message}`);
    } finally {
      setLoading(false); // End loading
    }
  };
  const handleSelect = (cityName) => {
    setSelectedCity(cityName);
    search(cityName); // Fetch weather for selected city
  };

  
  return (
    <div className="bg-slate-150 w-[100%] h-[850px] m-auto mt-[100px] relative">
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
        <div className="absolute top-[800px] right-[270px]">
          <Pur />
        </div>
      </div>

      {/* Search Box */}
      <div className="absolute top-[120px] left-[120px] w-[300px]">
        <input
          type="text"
          placeholder="   Search"
          ref={inputRef}
          onChange={(e) => search(e.target.value)}
          className="h-[40px] w-[100%] border-2"
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
      <div className="w-[280px] h-[470px] border-2 border-slate-300 rounded-lg bg-slate-100 opacity-90 absolute top-[240px] left-[240px]">
        
        <div className="flex flex-col p-[25px] mb-[40px]">
        <h2 className="text-[120%] text-gray-900 absolute left-[25px] top-[10px] p-[10px]">{formattedDate}</h2>
        <p className="text-[170%] font-semibold text-gray-700 absolute left-[15px] top-[40px]">
          {weatherData?.location?.name || "N/A"}</p>
          <p className="text-[150%] flex gap-[9%] font-semibold text-gray-700 absolute left-[15px] top-[80px]" >
            {weatherData?.location?.country || "N/A"} <span >
          <Locate />
          </span></p>
          </div>
          
        <div >
        {weatherData?.forecast?.forecastday?.[0]?.day?.condition?.icon ? (
            <img
              src={weatherData.forecast.forecastday[0].day.condition.icon}
              alt="Weather Icon"
              className="flex items-center justify-center w-[250px] h-[250px] absolute top-[65px] left-[20px]"
            />
          ) : (
            "N/A"
          )}
        </div>
        <span className="font-semibold text-[65px] text-gray-800 absolute top-[245px] left-[40px]">
          {weatherData?.current?.temp_c || "N/A"}°C
        </span>
        <p className=" text-[120%] text-gray-700 absolute top-[325px] left-[15%]">
          {weatherData?.current?.condition?.text || "N/A"} 
        </p>
        <span className="absolute top-[355px] left-[15%]  text-[120%] text-gray-700"> Air quality</span>
        <div className="font-semibold text-gray-800 flex items-center gap-[21px] absolute top-[87%] left-[7%]">
          <Home />
          <Location />
          <Heart />
          <People />
        </div>
      </div>

      {/* Weather Info - Night */}
      <div className="w-[265px] h-[470px] border-2 border-slate-400 rounded-lg bg-slate-600 opacity-70 absolute top-[230px] left-[790px]">
        <p className="text-[120%] text-gray-200 absolute left-[15px] top-[3px] p-[10px]">{formattedDate}</p>
        
        <p className="text-[170%] font-semibold text-gray-200 absolute left-[15px] top-[40px]">
          {weatherData?.location?.name || "N/A"}</p>
          <p className="text-[150%] flex gap-[9%] font-semibold text-gray-200 absolute left-[15px] top-[80px]" >
            {weatherData?.location?.country || "N/A"} <span >
          <Loc />
          </span></p>
        
        <div className="flex items-center justify-center w-[140px] h-[50px] absolute top-[25px]">
              {weatherData?.current?.condition?.icon ? (
            <img src={weatherData.current.condition.icon}
             alt="Weather Icon" 
             className="flex items-center justify-center w-[100px] h-[180px] absolute top-[75px] left-[80px]"/>
          ) : (
            "N/A"
          )}
        </div>
        <span className="font-semibold text-[65px] text-gray-100 absolute top-[260px] left-[20px]">
          {weatherData?.forecast?.forecastday?.[0]?.day?.mintemp_c || "N/A"}°C
        </span>
        <p className="text-[25px] text-gray-200 absolute top-[340px] left-[20px]">
          {weatherData?.forecast?.forecastday?.[0]?.day?.condition?.text || "N/A"}
        </p>
        <div className="font-semibold text-gray-800 flex items-center gap-[25px] absolute top-[87%] left-[7%]">
          <Home />
          <Location />
          <Heart />
          <People />
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;