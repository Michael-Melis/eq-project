import React from "react";
import Login from "../components/Login/Login";

const Profile = ({ user, userData }) => {
  const loggedUser = userData?.data?.filter(
    (email) => email?.email === user?.email
  );
  console.log(loggedUser);

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div>
          <h1>
            Welcome <span>{loggedUser[0].name}</span> I am glad that you are
            testing my earthquake web-app
          </h1>
        </div>
      )}
    </div>
  );
};

export default Profile;
