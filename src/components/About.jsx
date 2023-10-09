import React from "react";
import Header from "./Header";
import Content from "./Content";
import Team from "./Team";
const About = () => {
  return (
    <div>
      <Header />
      <div className="py-10"></div>
      <Content />
      <Team />
    </div>
  );
};

export default About;
