import { useState } from "react";
import HNavbar from "./../Components/HNavbar";
import HLogoContainer from "./../Components/HLogoContainer";
import HInput from "./../Components/HInput";
import Button from "./../Components/Button";
import HFooter from "./../Components/HFooter";
import HGLangs from "./../Components/HGLangs";
import "./Stylesheets/Home.css";
function Home({ srch, setSrch }) {
  const [openSug, setOpenSug] = useState(false);
  const [open, setOpen] = useState(false);
  // const mediaTheme = window.matchMedia("(prefers-color-scheme: dark)");
  // useEffect(() => {
  //   if (
  //     window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     console.log(1);
  //   }
  // }, [mediaTheme]);

  return (
    <div
      onClick={(e) => {
        console.log(e.target.className);
        if (e.target.className !== "input-srch") setOpenSug(false);
        if (e.target.className.baseVal !== "menu-icon") setOpen(false);
      }}
    >
      <HNavbar open={open} setOpen={setOpen} />
      <div className="flex-center-col">
        <HLogoContainer />
        <HInput openSug={openSug} setOpenSug={setOpenSug} srch={srch} setSrch={setSrch} />
        <div className="btn-container">
          <Button value="Google Search" useFor="search-btn" />
          <Button value="I'm Feeling Lucky" useFor="search-btn" />
        </div>
        <HGLangs />
      </div>
      <HFooter />
    </div>
  );
}

export default Home;
