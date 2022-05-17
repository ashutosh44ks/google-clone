import "./Stylesheets/Input.css";
import { useState } from "react";
import { ReactComponent as SearchIcon } from "./Stylesheets/search.svg";
import { ReactComponent as MicrophoneIcon } from "./Stylesheets/microphone.svg";

const Input = () => {
  const [srch, setSrch] = useState("");
  //Icon on click pe input pe focus hona chahiye
  return (
    <div className="search-container">
      <SearchIcon className="search-icon" />
      <input
        value={srch}
        onChange={(e) => {
          setSrch(e.target.value);
        }}
      />
      <MicrophoneIcon className="microphone-icon" />
    </div>
  );
};

export default Input;
