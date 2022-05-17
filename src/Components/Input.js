import "./Stylesheets/Input.css";
import { useState, useEffect } from "react";
import { ReactComponent as SearchIcon } from "./Stylesheets/search.svg";
import { ReactComponent as MicrophoneIcon } from "./Stylesheets/microphone.svg";

const Input = () => {
  const [srch, setSrch] = useState("");
  useEffect(() => {
    const inputIcon = document.querySelectorAll(".input-icon");
    const input = document.querySelector("input");
    inputIcon.forEach((icon) => {
      icon.addEventListener("click", () => {
        input.focus();
      });
    });
  }, []);
  return (
    <div className="search-container" title="Search">
      <SearchIcon className="search-icon input-icon" />
      <input
        value={srch}
        onChange={(e) => {
          setSrch(e.target.value);
        }}
      />
      <MicrophoneIcon className="microphone-icon input-icon" />
    </div>
  );
};

export default Input;
