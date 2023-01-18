import React, { useContext } from "react";
import UserContext from "../Context/userContext";
import User from "../component/UserComponent/User";
import Status from "../component/UserComponent/Status";
import { Alert } from "@material-tailwind/react";
import SearchBar from "../component/searchComponent/SearchBar";
const Home = () => {
  const context = useContext(UserContext);
  const { users, status, error } = context;

  let message;
  console.log(context.users);
  if (status === "loading...") {
    return <Status text={"loading..."} />;
  }
  if (status === "failed") {
    return (message = <Status text={error} />);
  }

  return (
    <div>
      <div className="container w-[70%] m-auto 	">
        <SearchBar />
        <div className=" grid grid-cols-3 gap-4">
          {users.length > 0 ? (
            users
              ?.slice(0, 6)
              ?.map((user) => <User key={user.id} user={user} />)
          ) : (
            <Alert className="bg-black text-red-500 p-2">
              {" "}
              No Result Found..
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
