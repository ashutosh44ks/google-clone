import React from "react";
import RInput from "./RInput";
import { ReactComponent as MenuIcon } from "./Stylesheets/menu.svg";
import Button from "./Button";
import Menu from "./Menu";
import "./Stylesheets/RNavbar.css";

const RNavbar = ({
  open,
  setOpen,
  srch,
  setSrch,
  openSug,
  setOpenSug,
  user,
}) => {
  return (
    <div>
      <div className="results-navbar">
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
            <MenuIcon className="menu-icon" title="Settings" />
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
      <div>
        <ul className="rnav-tabs">
          <li className="link cursor-pointer rnav-tab-active">All</li>
          <li className="cursor-pointer">News</li>
          <li className="cursor-pointer">Images</li>
          <li className="cursor-pointer">Videos</li>
          <li className="cursor-pointer">Maps</li>
          <li className="cursor-pointer">More</li>
          <li className="cursor-pointer">Tools</li>
        </ul>
      </div>
    </div>
  );
};

export default RNavbar;
