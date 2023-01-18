import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const User = ({ user }) => {
  return (
    <Card>
      <Link to={`users/${user.id}`} className="container rounded ">
        <div className="  rounded text-center">
          <img src={user.image} alt={user.firstName} className="rounded" />
        </div>
        <CardBody className=" text-center ">
          <Typography color="blue-gray" className="">
            FirstName:{user.firstName}
          </Typography>

          <Typography className="text-center">
            Position: <span>{user?.company.title}</span>
          </Typography>
        </CardBody>
      </Link>
    </Card>
  );
};

export default User;
