import RInput from "./RInput";
import "./Stylesheets/RNavbar.css";

const RNavbarFixed = ({
  scroll,
  srch,
  setSrch,
  openSug,
  setOpenSug
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
          useFor="fixed-navbar"
        />
      </div>
    </div>
  );
};

export default RNavbarFixed;
