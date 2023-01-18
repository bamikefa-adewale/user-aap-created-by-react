import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import userContext from "../Context/userContext";
import Status from "../component/UserComponent/Status";
import UserDetails from "../component/UserComponent/UserDetails";

const UserRecord = () => {
  const { userId } = useParams();
  const context = useContext(userContext);
  const { user, getUser, status, error } = context;

  useEffect(() => {
    getUser(userId);
  }, [userId]);

  let message;

  switch (status) {
    case "loading":
      return (message = <Status text={"loading..."} />);
    case "success":
      return (message = <UserDetails user={user} />);
    case "failed":
      return (message = <h2 className="container">{error}</h2>);
  }

  return <div>{message}</div>;
};

export default UserRecord;
