import React from "react";

import Links from "./Links";

function About(props) {
  const isBio = props.bio
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>{props.bio}</p> */}
      {(isBio) ? <p>{isBio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
