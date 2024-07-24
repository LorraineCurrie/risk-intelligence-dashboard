// Sidebar.js
"use client";
import React from "react";
import Slider from "./Slider";
import SearchBar from "../Searchbar"; // Adjust the import path

const Sidebar = ({ onSearch, onClear }) => {
  return ( 
    <div className="fixed overflow-y-scroll h-[90.3vh] w-1/4 border bg-white shadow-sm px-4 py-2">
      <SearchBar onSearch={onSearch} onClear={onClear} />
      <h1 className="text-lg font-primary font-bold mt-2">Impact Severity</h1>
      <Slider />
      <h1 className="text-lg font-primary font-bold mt-2">Impact Frequency</h1>
      <Slider />
    </div>
  );
};

export default Sidebar;
