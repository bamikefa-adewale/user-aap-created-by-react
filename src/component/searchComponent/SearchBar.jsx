import { Input } from "@material-tailwind/react";
import React, { useContext } from "react";
import UserContext from "../../Context/userContext";

const SearchBar = () => {
  const context = useContext(UserContext);
  const { search, handleChange, handleResult } = context;

  return (
    <form className="flex rounded-2xl mt-4 mb-4 " onSubmit={handleResult}>
      <div className="w-[100%] text-cente  bg-white flex-1">
        <Input
          value={search}
          onChange={handleChange}
          className="outline-none border-none p-3 "
        />
      </div>
      <button className="bg-black text-white text-center p-2">search</button>
    </form>
  );
};

export default SearchBar;
