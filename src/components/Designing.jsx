import React from "react";
import { BiLinkAlt, BiLinkExternal } from "react-icons/bi";
import "../styles/sidebar.css";
import image1 from "/Users/mac/Desktop/LizMotor/src/assets/2BCF3EE1-6322-49CA-8D8C-502ABF349FB6_4_5005_c.jpeg";
import { FaSlackHash } from "react-icons/fa";

const Designing = () => {
  const courses = [
    {
      title: "Hardware",
      icon: <FaSlackHash />,
    },
    {
      title: "Software",
      icon: <BiLinkAlt />,
    },
  ];
  const navigating = [
    {
      link: "https://chat.openai.com/c/59a52a0f-8f15-40e7-a298-25af16c03c16",
    },
    {
      link: "https://elegance-gallery.netlify.app/",
    },
  ];
  return (
    <div className="card--container">
      {courses.map((item) => (
        <div className="card">
          <div className="card--cover">{item.icon}</div>
          <div className="card--title tooltip ">
            {item.title}
            <a href="https://chat.openai.com/c/59a52a0f-8f15-40e7-a298-25af16c03c16">
              {" "}
              <img className="tooltiptext" src={image1} alt="chart" />{" "}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Designing;
