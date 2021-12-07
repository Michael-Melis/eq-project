import React, { useState, useEffect } from "react";
import Login from "../components/Login/Login";
import axios from "axios";

const Profile = ({ user, userData }) => {
  const api = "https://61a669a58395690017be92b4.mockapi.io/register";

  const loggedUser = userData?.data?.filter(
    (email) => email?.email === user?.email
  );

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div>
          <h1>Welcome. I am glad that you are testing my earthquake web-app</h1>
        </div>
      )}
    </>
  );
};

export default Profile;
