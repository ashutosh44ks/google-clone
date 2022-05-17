import { useState, useEffect } from "react";
import HNavbar from "./Components/HNavbar";
import HLogoContainer from "./Components/HLogoContainer";
import Input from "./Components/Input";
import Button from "./Components/Button";
import HFooter from "./Components/HFooter";

function App() {
  const mediaTheme = window.matchMedia("(prefers-color-scheme: dark)");
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      console.log(1);
    }
  }, [mediaTheme]);

  return (
    <div className="App">
      <HNavbar />
      <div className="flex-center-col">
        <HLogoContainer />
        <Input />
        <div className="btn-container">
          <Button value="Google Search" useFor="search-btn" />
          <Button value="I'm Feeling Lucky" useFor="search-btn" />
        </div>
        <div className="g-langs">
          Google offered in:
          <button className="g-lang link hover-underline cursor-pointer">हिन्दी</button>
          <button className="g-lang link hover-underline cursor-pointer">বাংলা</button>
          <button className="g-lang link hover-underline cursor-pointer">తెలుగు</button>
          <button className="g-lang link hover-underline cursor-pointer">मराठी</button>
          <button className="g-lang link hover-underline cursor-pointer">தமிழ்</button>
          <button className="g-lang link hover-underline cursor-pointer">
            ગુજરાતી
          </button>
          <button className="g-lang link hover-underline cursor-pointer">ಕನ್ನಡ</button>
          <button className="g-lang link hover-underline cursor-pointer">മലയാളം</button>
          <button className="g-lang link hover-underline cursor-pointer">ਪੰਜਾਬੀ</button>
        </div>
      </div>
      <HFooter />
    </div>
  );
}

export default App;
