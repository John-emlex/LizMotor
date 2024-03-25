import React from "react";
import ProfileHeader from "./ProfileHeader";
import "../styles/profile.css";
import image from "/Users/mac/Desktop/LizMotor/src/assets/2BCF3EE1-6322-49CA-8D8C-502ABF349FB6_4_5005_c.jpeg";
import { BiLogoHtml5, BiLogoJavascript, BiLogoReact } from "react-icons/bi";

const tech = [
  {
    title: "HTML CSS",
    experience: "3 years",
    icon: <BiLogoHtml5 />,
  },
  {
    title: "JavaScript",
    experience: "2 years",
    icon: <BiLogoJavascript />,
  },
  {
    title: "ReactJs",
    experience: "1 year",
    icon: <BiLogoReact />,
  },
];

const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <div className="user--profile">
        <div className="user--detail">
          <img src={image} alt="image" />
          <h3 className="username">John Peter</h3>
          <span className="profession">Programmer</span>
        </div>
        <div className="user--courses">
          {tech.map((techs) => (
            <div className="courses">
              <div className="courses--detail">
                <div className="courses--cover"> {techs.icon}</div>
                <div className="courses--name">
                  <h5 className="title"> {techs.title} </h5>
                  <span className="duration"> {techs.experience} </span>
                </div>
              </div>
              <div className="action"> :</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
