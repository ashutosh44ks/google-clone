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
    </div>
  );
};

export default RNavbarFixed;
