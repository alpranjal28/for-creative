"use client";
import React from "react";
import Joke from "./Joke";

const HeroRight = () => {
  // Access localStorage
  // const { name, age, email, password } = JSON.parse(
  //   localStorage.getItem("values") as string
  // );
  // console.log(name, age, email, password);

  // get values from storage

  return (
    <div className="flex flex-col items-center justify-evenly w-full">
      <Joke />
    </div>
  );
};

export default HeroRight;
