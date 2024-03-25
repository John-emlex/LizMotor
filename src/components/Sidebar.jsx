import React, { useState } from "react";
import {
  BiCalendarEvent,
  BiCar,
  BiCog,
  BiDollarCircle,
  BiHome,
  BiPalette,
  BiSearchAlt,
} from "react-icons/bi";
import { Routes, Route, NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import Research from "./Research";
import { FaBars } from "react-icons/fa";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState();
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <BiCar />,
    },
    {
      path: "/research",
      name: "Research",
      icon: <BiSearchAlt className="icon" />,
    },
    {
      path: "/planning",
      name: "Planning",
      icon: <BiCalendarEvent className="icon" />,
    },
    {
      path: "/designing",
      name: "Designing",
      icon: <BiPalette className="icon iron3" />,
    },
    {
      path: "manufacturing",
      name: "Manufacturing",
      icon: <BiCog className="icon icon4" />,
    },
    {
      path: "sales",
      name: "Sales/Marketing",
      icon: <BiDollarCircle className="icon icon5" />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "flex" : "none" }} className="logo">
            Liz Motors
          </h1>
          <div style={{ marginLeft: isOpen ? "0px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
    // <div className="menu">
    //   <div className="logo">
    //     <BiCar className="logo-icon" />
    //     <h2>Liz Motors</h2>
    //   </div>

    //   <div className="menu--list">
    //     <a href="#" className="item active">
    //       <BiHome className="icon" />
    //       Dashboard
    //     </a>

    //     <a href="#" className="item item1">
    //       <BiSearchAlt className="icon" />
    //       Research
    //     </a>

    //     <a href="#" className="item item2">
    //       <BiCalendarEvent className="icon" />
    //       Planning
    //     </a>

    //     <a href="#" className="item item3">
    //       <BiPalette className="icon iron3" />
    //       Designing
    //     </a>

    //     <a href="src/components/Manufacturing.jsx" className="item item4">
    //       <BiCog className="icon icon4" />
    //       Manufacturing
    //     </a>

    //     <a href="#" className="item item5">
    //       <BiDollarCircle className="icon icon5" />
    //       Sales/Marketing
    //     </a>
    //   </div>
    // </div>
  );
};

export default Sidebar;
