import React from "react";
import { useDispatch } from "react-redux";
import searchImg from "../assets/search.svg";
import { filterBySearch } from "../redux/Blog/Actions";
import debounce from "../utils/debounce";

export default function Search() {
  const dispatch = useDispatch();

  const handleSearch = debounce((e) => dispatch(filterBySearch(e.target.value)));

  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
        onChange={handleSearch}
      />
      <img className="inline h-6 cursor-pointer" src={searchImg} alt="Search" />
    </div>
  );
}
