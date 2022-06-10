import React from "react";
import RInput from "./RInput";
import Sidebar from "./Sidebar";
import { ReactComponent as SettingsIcon } from "./Stylesheets/settings.svg";
import { ReactComponent as SearchIcon } from "./Stylesheets/search.svg";
import { ReactComponent as MenuIcon } from "./Stylesheets/menu.svg";
import { ReactComponent as ImageIcon } from "./Stylesheets/image.svg";
import { ReactComponent as VideoIcon } from "./Stylesheets/video.svg";
import { ReactComponent as NewsIcon } from "./Stylesheets/news.svg";
import { ReactComponent as MapsIcon } from "./Stylesheets/location.svg";
import { ReactComponent as MoreIcon } from "./Stylesheets/more.svg";
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
  sidebar,
  setSidebar,
  user,
}) => {
  return (
    <div className="rnavbar-container">
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
        <ul>
          <li className="hover-underline cursor-pointer">
            <SettingsIcon className="menu-icon" title="Settings" onClick={() => {
                setSidebar(true);
              }}/>
            {sidebar ? <Sidebar setSidebar={setSidebar} /> : ""}
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
          <span className="flex">
            <li className="link cursor-pointer flex-align-center rnav-tab-active">
              <SearchIcon className="tab-icon" />
              All
            </li>
            <li className="cursor-pointer flex-align-center">
              <NewsIcon className="tab-icon" /> News
            </li>
            <li className="cursor-pointer flex-align-center">
              <ImageIcon className="tab-icon" /> Images
            </li>
            <li className="cursor-pointer flex-align-center">
              <VideoIcon className="tab-icon" /> Videos
            </li>
            <li className="cursor-pointer flex-align-center">
              <MapsIcon className="tab-icon" /> Maps
            </li>
            <li className="cursor-pointer flex-align-center">
              <MoreIcon className="tab-icon" /> More
            </li>
          </span>
          <li className="cursor-pointer">Tools</li>
        </ul>
      </div>
    </div>
  );
};

export default RNavbar;
