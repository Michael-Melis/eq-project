import React, { useState, useEffect } from "react";
import Login from "../components/Login/Login";
import { StyledProfile } from "../styles/Profile/StyledProfile";
import MenuView from "../components/MenuView/MenuView";

const Profile = ({ user }) => {
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <StyledProfile>
          <MenuView />
          <div>
            <h1>
              Welcome <span>{user.email}</span> I am glad that you are testing
              my earthquake web-app
            </h1>
          </div>
        </StyledProfile>
      )}
    </>
  );
};

export default Profile;
