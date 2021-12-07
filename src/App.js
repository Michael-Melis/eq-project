import { Nav } from "../src/components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import EartquakesRender from "./pages/EartquakesRender";
import Login from "./components/Login/Login";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import axios from "axios";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState([]);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const api = "https://61a669a58395690017be92b4.mockapi.io/register";
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(`${api}`);

        setUserData(res);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  return (
    <>
      <Nav user={user} />

      <Routes>
        <Route path="/" element={<Profile user={user} userData={userData} />} />
        <Route path="/earthquakes" element={<EartquakesRender user={user} />} />

        <Route path="/" element={<Login userData={userData} />} />
      </Routes>
    </>
  );
}

export default App;
