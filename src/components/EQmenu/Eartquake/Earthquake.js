import React from "react";

const Earthquake = ({ eqData }) => {
  return (
    <div>
      {!eqData ? (
        <p>Loading ...</p>
      ) : (
        eqData.map((eq) => {
          return <p key={eq.id}>{eq.properties.place}</p>;
        })
      )}
    </div>
  );
};

export default Earthquake;
