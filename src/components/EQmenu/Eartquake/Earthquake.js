import React, { useState } from "react";
import { Star } from "@mui/icons-material";

const Earthquake = ({ oneEq }) => {
  const [favorite, setFavorite] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleFavorite = (e) => {
    setSelected(oneEq.id);
    console.log(selected);
  };

  return (
    <div>
      <h2>Title: {oneEq.properties.place}</h2>
      <p>id: {oneEq.id}</p>
      <a href={oneEq.properties.url} target="_blank">
        Link to source
      </a>
      <Star onClick={handleFavorite} />
    </div>
  );
};

export default Earthquake;
