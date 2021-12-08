import React from "react";
import Login from "../Login/Login";

const UserDetails = ({ user }) => {
  console.log(user);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div>
          <p> user ID: {user.uid}</p>
          <p> user email: {user.email}</p>
          <p> user ID: {user.displayName}</p>
        </div>
      )}
    </>
  );
};
export default UserDetails;
