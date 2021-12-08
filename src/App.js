import { Nav } from "../src/components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import EartquakesRender from "./pages/EartquakesRender";
import Login from "./components/Login/Login";
import Profile from "./pages/Profile";
import { useState } from "react";
import UserDetails from "./components/MenuView/UserDetails";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [user, setUser] = useState([]);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <>
      <Nav user={user} />

      <Routes>
        {!user ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<Profile user={user} />} />
        )}
        <Route path="/earthquakes" element={<EartquakesRender user={user} />} />
        <Route path="/userdetails" element={<UserDetails user={user} />} />
      </Routes>
    </>
  );
}

export default App;
