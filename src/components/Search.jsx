import React from "react";

export const Search = ({ handleInput, inputRef, citySuggestions, handleSelect }) => {
  return (
    <div className="absolute top-[120px] left-[460px] w-[300px]">
      <input
        type="text"
        placeholder="   Search"
        ref={inputRef}
        onChange={handleInput}
        className="h-[50px] w-[250px] border-2 rounded-2xl"
      />
      {citySuggestions.length > 0 && (
        <ul className="bg-white border rounded-lg mt-2">
          {citySuggestions.map((city) => (
            <li
              key={city.id}
              className="cursor-pointer p-2"
              onClick={() => handleSelect(city.name)}
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};