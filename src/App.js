import { useState, useEffect } from "react";
import HNavbar from "./Components/HNavbar";
import HLogoContainer from "./Components/HLogoContainer";
import Input from "./Components/Input";
import Button from "./Components/Button";
import HFooter from "./Components/HFooter";
import HGLangs from "./Components/HGLangs";

function App() {
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
    <div className="App">
      <HNavbar open={open} setOpen={setOpen} />
      <div className="flex-center-col">
        <HLogoContainer />
        <Input />
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

export default App;
