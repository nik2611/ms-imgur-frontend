import React from "react";
import { useState } from "react";

export default function DropDown() {

const [state, setState] = useState("POPULAR");


/*function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
      return <MadeGoal/>;
    }
    return <MissedGoal/>;
  } */


  return (
    <div class="dropdown">
      <button class="dropbtn">{state}</button>
      <div class="dropdown-content">
        <a href="#" onClick={() => {setState("POPULAR")}}>POPULAR</a>
        <a href="#" onClick={() => {setState("NEWEST")}}>NEWEST</a>
        <a href="#" onClick={() => {setState("BEST")}}>BEST</a>
        <a href="#" onClick={() => {setState("RANDOM")}}>RANDOM</a>
      </div>
    </div>
  );
}
