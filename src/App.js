import { Nav } from "../src/components/Nav/Nav";
import { Routes, Route, useParams } from "react-router-dom";
import EartquakesRender from "./pages/EartquakesRender";
import Login from "./components/Login/Login";
import Profile from "./pages/Profile";
import { useState } from "react";
import UserDetails from "./components/MenuView/UserDetails";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import TodoLists from "./components/Todo/TodoLists";
import OneList from "./components/Todo/OneList";
import ListDetail from "./components/Todo/ListDetail";

function App() {
  const [user, setUser] = useState([]);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  let { id } = useParams();
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
        <Route path="/todolists" element={<TodoLists user={user} />} />
        <Route path="/todolists/:id" element={<ListDetail user={user} />} />
      </Routes>
    </>
  );
}

export default App;
