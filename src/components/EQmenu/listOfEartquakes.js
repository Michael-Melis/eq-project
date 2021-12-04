import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Earthquake from "./Eartquake/Earthquake";

const api = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson";

export const ListOfEartquakes = ({ limit }) => {
  const [eqData, setEqData] = useState([]);

  useEffect(() => {
    const fetchEq = async () => {
      try {
        const res = await axios.get(`${api}&limit=${limit}`);

        setEqData(res.data.features);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEq();
  }, [limit]);

  return (
    <div>
      <Earthquake eqData={eqData} />
    </div>
  );
};
