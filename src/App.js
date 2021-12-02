import { Nav } from "../src/components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import EartquakesRender from "./pages/EartquakesRender";
import Login from "./components/Login/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);
  const api = "https://61a669a58395690017be92b4.mockapi.io/register";
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(`${api}`);
        console.log(res);
        setUserData(res);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/showmeeartquakes" element={<EartquakesRender />} />
        <Route path="/" element={<Login userData={userData} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
