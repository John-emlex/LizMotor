import React from "react";
import { BiLinkAlt, BiLinkExternal } from "react-icons/bi";
import "../styles/sidebar.css";
import image1 from "/Users/mac/Desktop/LizMotor/src/assets/2BCF3EE1-6322-49CA-8D8C-502ABF349FB6_4_5005_c.jpeg";
import { Link } from "react-router-dom";
import B2C from "../pages/B2C";

const Research = () => {
  const courses = [
    {
      title: "External",
      icon: <BiLinkExternal />,
    },
    {
      title: "Internal",
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
      <div className="card">
        <div className="card--cover">
          <BiLinkExternal />
        </div>
        <div className="card--title tooltip ">
          External
          <Link to="src/components/TeacherList.jsx" />
          <a href="">
            {" "}
            <img className="tooltiptext" src={image1} alt="chart" />{" "}
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card--cover">
          <BiLinkAlt />
        </div>
        <div className="card--title tooltip ">
          Internal
          <a href="">
            {" "}
            <img className="tooltiptext" src={image1} alt="chart" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Research;
