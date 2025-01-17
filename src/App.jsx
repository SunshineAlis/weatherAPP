import { useEffect, useState } from "react";
import backgrnd from "./backgrnd.png";
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
  const [search, setSearch] = useState("");
  const [allCities, setAllCities] = useState([]); // Default to empty array
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar, Mongolia");
  const [filteredData, setFilteredData] = useState([]);
  const [weatherData, setWeatherData] = useState({});

  const getCountries = async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const result = await response.json();
      const countries = result.data;

      const cities = getAllCities(countries);
      setAllCities(cities);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCities = (countries) => {
    let cities = [];
    countries.forEach((country) => {
      if (country.cities) {
        cities = [...cities, ...country.cities];
      }
    });
    return cities;
  };

  const onChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length > 0) {
      const filtered = allCities.filter(
        (city) =>
          city.toLowerCase().startsWith(event.target.value.toLowerCase()) //
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-slate-150 w-[1200px] h-[850px] w-[100%] m-auto mt-[100px]">
      <div className=" absolute top-[395px] left-[490px] w-[250px] h-[250px] border border-slate-200  rounded-full"></div>
      <div className=" absolute top-[300px] left-[400px] w-[470px] h-[450px] border border-slate-200  rounded-full"></div>
      <div className=" absolute top-[180px] left-[250px] w-[700px] h-[700px] border border-slate-200  rounded-full"></div>
      <div className=" absolute top-[100px] left-[130px] w-[1000px] h-[850px] border border-slate-200  rounded-full"></div>
      <div className="ml-[600px] absolute top-[-150px] ">
        <Right />
        <div className=" w-[200px] h-[400px] absolute top-[628px] left-[-70px]">
          <Cone />
        </div>
        <div className=" w-[200px] h-[400px] absolute top-[628px] left-[-10px]">
          <Pine />
        </div>
        <div className="absolute top-[380px] left-[-495px]">
          <Yell />
        </div>
        <div className="absolute top-[800px] right-[270px]">
          <Pur />
        </div>
      </div>

      <div className="flex absolute top-[-50px] left-[-50px] relative">
        <div>
          <div className="w-[50] h-[35] border-2 absolute top-[120px] left-[120px]">
            <input
              type="text"
              placeholder="   Search"
              value={search}
              onChange={onChange}
              className="h-[40px] w-[300px]"
            />
          </div>
          {/* day weather info */}
          <div className="w-[265px] h-[470px] border-2 border-slate-300 rounded-lg bg-slate-50  opacity-80 absolute top-[240px] left-[240px]">
            <div className="flex flex-col gap-[2px] items-start text-start">
              <h2 className="text-[120%] text-gray-900 text-start absolute left-[25px] top-[2%]">
                {formattedDate}
              </h2>
              <div className="flex items-center mt-4">
                <h2 className="text-[180%] font-semibold text-gray-900 flex gap-[10px] absolute left-[10%] top-[7%]">
                  Ulaanbaatar
                  <span className="absolute top-[5%] left-[110%] ">
                    <Locate />
                  </span>
                </h2>
              </div>
            </div>
            <div className="text-xl  flex flex-col items-center">
              <div className=" flex items-center justify-center w-[50%] h-[55%] absolute top-[18%]">
                <span
                  className="text-[120px] h-[25%]"
                  role="img"
                  aria-label="sunny"
                >
                  ☀️
                </span>
              </div>
              <span className="font-semibold text-[380%] text-gray-900 absolute top-[63%] left-[20%]">
                26°
              </span>
            </div>
            <p className="text-[120%] text-gray-500 absolute top-[75%] left-[15%]">
              Bright
            </p>
            {/* 4 durstei div */}
            <div className=" font-semibold  lucide  lucide-house text-gray-800 flex items-center left-[23px] gap-[21px] absolute top-[87%] left-[7%]">
              <Home />
              <Location />
              <Heart />
              <People />
            </div>
          </div>
        </div>
        {/* night weather */}
        <div className="w-[265px] h-[470px] border-2 border-slate-400  rounded-lg bg-slate-600 opacity-70 absolute top-[230px] left-[790px]">
          <div className="flex flex-col gap-[2px] items-start text-start">
            <h2 className="text-[120%] text-gray-200 text-start absolute left-[25px] top-[2%]">
              {formattedDate}
            </h2>
            <div className="flex items-center mt-4">
              <h2 className="text-[180%] font-semibold text-gray-200 flex gap-[10px] absolute left-[10%] top-[7%]">
                Ulaanbaatar
                <span className="absolute top-[5%] left-[110%] ">
                  <Loc />
                </span>
              </h2>
            </div>
          </div>
          <div className="text-xl  flex flex-col items-center">
            <div className=" flex items-center justify-center w-[50%] h-[55%] absolute top-[18%]">
              <span
                className="text-[120px] h-[25%]"
                role="img"
                aria-label="sunny"
              >
                ☀️
              </span>
            </div>
            <span className="font-semibold text-[380%] text-gray-900 absolute top-[63%] left-[20%]">
              26°
            </span>
          </div>
          <p className="text-[120%] text-gray-500 absolute top-[75%] left-[15%]">
            Bright
          </p>
          {/* 4 durstei div */}
          <div className=" font-semibold  lucide  lucide-house text-gray-800 flex items-center left-[23px] gap-[25px] absolute top-[87%] left-[7%]">
            <Home />
            <Location />
            <Heart />
            <People />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
