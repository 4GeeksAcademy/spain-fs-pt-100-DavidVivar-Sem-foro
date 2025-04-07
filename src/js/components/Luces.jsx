import React from "react";


export const Comp = (props) => {
    return (
        <div className={`light  bg-${props.color}`}></div>
    )
}

import React, { useState, useEffect } from "react";

export const Comp = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["red", "yellow", "green", "yellow"];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 10000); // cada 10 segundos

    return () => clearInterval(interval); // limpieza al desmontar
  }, []);

  return (
    <div className={`light bg-${colors[colorIndex]}`}></div>
  );
};


