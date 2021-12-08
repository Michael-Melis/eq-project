import { Nav } from "../src/components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import EartquakesRender from "./pages/EartquakesRender";
import Login from "./components/Login/Login";
import Profile from "./pages/Profile";
import { useState } from "react";

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
        <Route path="/earthquakes" element={<EartquakesRender user={user} />} />
        {!user ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<Profile user={user} />} />
        )}
      </Routes>
    </>
  );
}

export default App;
