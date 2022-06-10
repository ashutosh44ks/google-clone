import React from "react";
import RInput from "./RInput";
import { ReactComponent as SettingsIcon } from "./Stylesheets/settings.svg";
import { ReactComponent as MenuIcon } from "./Stylesheets/menu.svg";
import Button from "./Button";
import Menu from "./Menu";
import "./Stylesheets/RNavbar.css";

const RNavbarFixed = ({
  scroll,
  open,
  setOpen,
  srch,
  setSrch,
  openSug,
  setOpenSug,
  user,
}) => {
  return (
    <div
      className={scroll < 150 ? "dNone" : "results-fixed-navbar results-navbar"}
    >
      <div className="flex-align-center">
        <img src="./logo.png" alt="GOOGLE" height="31px" />
        <RInput
          srch={srch}
          setSrch={setSrch}
          openSug={openSug}
          setOpenSug={setOpenSug}
        />
      </div>
      <ul className="hnav-extra">
        <li className="hover-underline cursor-pointer">
          <SettingsIcon className="menu-icon" title="Settings" />
          {open ? <Menu /> : ""}
        </li>
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

export default RNavbarFixed;
