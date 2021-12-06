import React from "react";
import { StyledEartquakes, StyledEartquake } from "./StyledEartquake";

const Earthquake = ({ eqData }) => {
  return (
    <StyledEartquakes>
      {!eqData ? (
        <p>Loading ...</p>
      ) : (
        eqData.map((eq) => {
          return (
            <StyledEartquake>
              <h2 key={eq.id}>Title: {eq.properties.place}</h2>
              <a
                key={eq.properties.url}
                href={eq.properties.url}
                target="_blank"
              >
                Link to source
              </a>
            </StyledEartquake>
          );
        })
      )}
    </StyledEartquakes>
  );
};

export default Earthquake;
