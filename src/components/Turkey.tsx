import React from "react";
import { TailFeathers } from "./parts/TailFeathers";
import { Body } from "./parts/Body";
import { Head } from "./parts/Head";
import { Legs } from "./parts/Legs";
import { Hat } from "./parts/Hat";
import "./Turkey.css";

export const Turkey = () => {
  return (
    <div className="cartoon">
      <TailFeathers />
      <Body />
      <Head />
      <Legs />
      <Hat />
    </div>
  );
};
