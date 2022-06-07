import React from "react";
import HLogoContainer from "./HLogoContainer";
import Input from "./Input";
import { ReactComponent as MenuIcon } from "./Stylesheets/menu.svg";
import Button from "./Button";
import Menu from "./Menu";
import './Stylesheets/RNavbar.css'

const RNavbar = ({ open, setOpen, user }) => {
  return (
    <div className="results-navbar">
      {/* <HLogoContainer /> */}
      <img src="./logo.png" alt="GOOGLE" height="22px"/>
      <Input />
      <ul className="hnav-extra">
        <li className="hover-underline cursor-pointer">
          <MenuIcon
            className="menu-icon"
            title="Google Apps"
            onClick={() => {
              setOpen((open) => !open);
            }}
          />
          {open ? <Menu /> : ""}
        </li>
        <li className="hover-underline cursor-pointer">
          {user ? `${user}` : <Button useFor="signin-btn" value="Sign In" />}
        </li>
      </ul>
    </div>
  );
};

export default RNavbar;
