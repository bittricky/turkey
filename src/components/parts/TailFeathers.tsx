import React from "react";

export const TailFeathers = () => {
  return (
    <>
      {Array.from({ length: 13 }).map((_, i) => (
        <div key={i} className="tail" />
      ))}
    </>
  );
};
