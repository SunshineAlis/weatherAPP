import { useEffect, useState } from "react";
import backgrnd from "./backgrnd.png";
import Home from "./icons/Home";
import Heart from "./icons/Heart";
import People from "./icons/People";
import Location from "./icons/Location";
import Locate from "./icons/locate";
import Loc from "./icons/Loc";
import Right from "./icons/Right";

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
    <div className="bg-slate-50 w-[180px] h-[1600px] m-auto">
      <div className=" rounded-full border-2 border-inherit w-[1000px] h-[1000px] ">
        <div className=" rounded-full border-2 border-inherit w-[700px] h-[700px] ml-[150px] mt-[150px] ">
          <div className=" rounded-full border-2 border-inherit w-[400px] h-[400px] ml-[150px] mt-[150px] ">
            <div className=" rounded-full border-2 border-inherit w-[150px] h-[150px] ml-[150px] mt-[150px]  flex items-center justify-center">
              <div className="mt-[-500px]">
                <Right />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
