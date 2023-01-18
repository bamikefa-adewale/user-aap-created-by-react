import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Typography } from "@material-tailwind/react";

const UserDetails = ({ user }) => {
  const Navigate = useNavigate();

  return (
    <section className="container p-4">
      <Button onClick={() => Navigate("/")} className="bg-black text-white p-2">
        back
      </Button>
      <div className="container flex ml-10 ">
        <div className="text-center mb-2 ">
          <Card className="rounded m-2">
            <img src={user.image} alt="img" />
          </Card>
          <Typography>
            FullName:{user.firstName} {user.lastName}
          </Typography>
          <p>Email:{user.email}</p>
          <p>Phone:{user.phone}</p>
          <p>Gender:{user.gender}</p>
          <p>Age:{user.age}</p>
        </div>
        <div className="container ml-4">
          <Typography>Comapny: {user?.company?.name}</Typography>
          <p>Position: {user?.company?.title}</p>
          <p>Graduated from: {user?.university}</p>
          <p>Address: {user?.address?.address} </p>
          <p>State: {user?.address?.state}</p>
          <p>City: {user?.address?.city}</p>
          <p>State Postal Code: {user?.address?.postalCode}</p>
          <p>DOB: {user?.birthDate}</p>
          <p>Department: {user?.company?.department}</p>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
