import { useEffect, useState } from "react";
import backgrnd from "./backgrnd.png";


function WeatherApp() {
  const [search, setSearch] = useState("");
  const [allCities,setAllCities ]= useState();
  const[selectedCity, setSelectedCity]= useState("Ulaanbaatar, Mongolia");
  const [filteredData, setFilteredData]=useState([]);
  const [weatherData,setWeatherData]=useState({});

  const getCountries=async()=>{
    try{
      const response = await fetch("https://countriesnow.space/api/v0.1/countries");
      const result = await response.json();
      const cities = getAllCities(countries);
      setAllCities(cities);
    }catch(error){console.log(error)}
  }
  const onChange = (event)=>{
    setSearch(event.target.value);
    const filtered=allCities.filter((el)=>el.startsWith(search));
    setFilteredData(filtered);
  };
  useEffect(()=>{
    getCountries();
  },[]
  );

  const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
});



  return (
    <div
      className="flex flex-col items-center justify-center m-auto mt-[10px] relative"
      style={{
        backgroundImage: `url(${backgrnd})`,
        backgroundSize: "90%",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
        height:"700px",
      }}
    >
      {/* Left Section */}
     <div className="w-[80%] h-[-80px] absolute top-[70px]">
          {/* Search Input */}
           <input
            type="text"
            placeholder="   Search"
            value={search}
            onChange={onChange}
            className="h-[40px] w-[300px]"
           
          /> 
           {/* ulsin nerhaih */}
          {filter}
        </div> 
        {/* Weather Info  righ*/}
        <div className="text-white-800 flex flex-col w-[23%] h-[60%] items-center gap-[4%] ml-[-45%] absolute top-[20%] bg-gray-100 opacity-90  rounded-lg shadow-lg">
 {/* hotin ner onsar odor */}
  <div className= "flex flex-col gap-[2px] items-start text-start">
  <h2 className="text-[120%] text-gray-900 text-start absolute left-[25px] top-[-3%]">{formattedDate}</h2>
  <div className="flex items-center mt-4">
    <h2 className="text-[180%] font-semibold text-gray-900 flex gap-[10px] absolute left-[10%] top-[3%]">
      Ulaanbaatar
      <span className="absolute top-[5%] left-[110%] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          height="30px"
          width="32px"
          viewBox="0 0 512 512"
        >
          <path d="M256.995,149.287c-11.776,0-21.333,9.579-21.333,21.333c0,11.755,9.557,21.333,21.333,21.333s21.333-9.579,21.333-21.333C278.328,158.865,268.771,149.287,256.995,149.287z M365.518,38.887C325.987,6.311,274.04-6.639,223.011,3.239C154.147,16.615,100.152,72.273,88.718,141.735c-6.784,41.003,0.725,81.216,21.696,116.267l8.704,14.528c27.861,46.443,56.64,94.485,79.701,143.893l38.848,83.221c3.499,7.509,11.029,12.309,19.328,12.309s15.829-4.8,19.328-12.309l34.965-74.923c23.317-49.984,52.096-98.688,79.957-145.792l12.971-22.016c15.339-26.091,23.445-55.936,23.445-86.293C427.662,119.484,405.006,71.463,365.518,38.887z M256.995,234.62c-35.285,0-64-28.715-64-64s28.715-64,64-64s64,28.715,64,64S292.28,234.62,256.995,234.62z" />
        </svg>
      </span>
    </h2>
  </div>
  </div>


  <div className="text-xl  flex flex-col items-center">
    <div className="ml-1 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center w-[50%] h-[35%] absolute top-[21%]">
      <span className= "text-[120px] h-[25%]"role="img" aria-label="sunny">
        ☀️
      </span>
    </div>

    <span className="font-semibold text-[380%] text-gray-900 absolute top-[63%] left-[20%]">26°</span>
  </div>
  <p className="text-[120%] text-gray-500 absolute top-[75%] left-[15%]">Bright</p>
  {/* 4 durstei div */}
  <div className="flex items-center gap-[30%] absolute top-[87%] left-[7%] ">
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-house text-gray-800"
      >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      </svg>
    </span> 
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-map-pin text-gray-300"
      >
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </span> 
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-heart text-gray-300"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    </span> 
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user text-gray-300"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </span>
  </div> 
 </div>  
      


      {/* Right Section */}
        {/* Weather Info */}
        <div className=" text-white-800 flex flex-col w-[23%] h-[60%] items-center gap-[4%] mr-[-40%] absolute top-[18%] bg-gradient-to-r from-gray-500 to-transparent opacity-70%  rounded-lg shadow-lg ">
  <div className="flex flex-col gap-[2px] items-start text-start ">
  <h2 className="text-[120%] text-gray-400 text-start absolute left-[10px]">{formattedDate}</h2>
    <h2 className="text-[160%] font-semibold text-gray-300 mb-[50px] flex items-center absolute left-[15px] top-[20px]">
         Ulaanbaatar
      <span className="ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#e8dad6"
          height="24px"
          width="24px"
          viewBox="0 0 512 512"
        >
          <path d="M256.995,149.287c-11.776,0-21.333,9.579-21.333,21.333c0,11.755,9.557,21.333,21.333,21.333s21.333-9.579,21.333-21.333C278.328,158.865,268.771,149.287,256.995,149.287z M365.518,38.887C325.987,6.311,274.04-6.639,223.011,3.239C154.147,16.615,100.152,72.273,88.718,141.735c-6.784,41.003,0.725,81.216,21.696,116.267l8.704,14.528c27.861,46.443,56.64,94.485,79.701,143.893l38.848,83.221c3.499,7.509,11.029,12.309,19.328,12.309s15.829-4.8,19.328-12.309l34.965-74.923c23.317-49.984,52.096-98.688,79.957-145.792l12.971-22.016c15.339-26.091,23.445-55.936,23.445-86.293C427.662,119.484,405.006,71.463,365.518,38.887z M256.995,234.62c-35.285,0-64-28.715-64-64s28.715-64,64-64s64,28.715,64,64S292.28,234.62,256.995,234.62z" />
        </svg>
      </span>
    </h2>
  </div> 


  <div className="text-6xl mt-0 flex flex-col items-center">
  <div className="ml-2 w-16 h-16 rounded-full bg-gray-700 flex items-center
   justify-center w-[40%] h-[30%] absolute top-[28%]">
             <span
  className="text-[192%]" 
  role="img"
  aria-label="moon"
>
  🌙
</span>
            </div>
    <span className="font-semibold text-[150%] text-gray-300 absolute top-[58%] left-[20%]">17°</span>
  </div>
  <p className="text-[140%] font-semibold text-[#777CCE] text-[120%] absolute top-[77%] left-[20%]">Bright</p>
  {/* 4 durstei div */}
  <div className="flex items-center gap-[25%]  absolute top-[88%] left-[15%]">
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-house text-gray-800"
      >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      </svg> 
    </span>
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-map-pin text-gray-300"
      >
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </span>
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-heart text-gray-300"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    </span>  
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user text-gray-300"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    </span> 
  </div>
</div>  
   
     </div>
  );
}

export default WeatherApp;
