import "./Stylesheets/Input.css";
import { useState, useEffect } from "react";
import { ReactComponent as SearchIcon } from "./Stylesheets/search.svg";
import { ReactComponent as MicrophoneIcon } from "./Stylesheets/microphone.svg";
import { ReactComponent as CloseIcon } from "./Stylesheets/close.svg";
import Button from "./Button";
import axios from "axios";

const Input = () => {
  //YAAR YEH DO BAAR KYU RUN HORA HAI SAB
  //FIX Dropdown position w.r.t. input 
  const [srch, setSrch] = useState("");
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  // useEffect(() => {
  //   const inputIcon = document.querySelectorAll(".input-icon");
  //   const input = document.querySelector("input");
  //   inputIcon.forEach((icon) => {
  //     icon.addEventListener("click", () => {
  //       input.focus();
  //     });
  //   });
  // }, []);
  // useEffect(() => {
  //   const input = document.querySelector("input");
  //   input.addEventListener("focus", () => {
  //     openSuggestions();
  //   });
  // }, [open]);
  // function openSuggestions() {
  //   console.log(open);
  //   setOpen(true);
  // }
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setSuggestions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [srch]);
  const options = {
    method: "GET",
    url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/spelling/AutoComplete",
    params: { text: srch },
    headers: {
      "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "ccea0af5f9msh9ee007c92712d24p129e6bjsnf00c25d283ed",
    },
  };

  return (
    <div className="flex-center-col">
      <div
        className="search-container"
        title="Search"
        onClick={() => {
          setOpen((open) => !open);
        }}
      >
        <SearchIcon className="search-icon input-icon" />
        <input
          value={srch}
          onChange={(e) => {
            setSrch(e.target.value);
          }}
        />
        {open ? (
          <CloseIcon
            className="close-icon cursor-pointer"
            onClick={() => {
              setSrch("");
            }}
          />
        ) : (
          ""
        )}

        <MicrophoneIcon
          className={
            open
              ? "microphone-icon input-icon"
              : "microphone-icon microphone-icon-closed input-icon"
          }
        />
      </div>
      {open ? (
        <div className="search-suggestions">
          {suggestions.map((item) => (
            <div
              key={item}
              className="suggestion-item"
              onClick={() => {
                setSrch(item);
              }}
            >
              <SearchIcon className="suggestion-icon" />
              {item}
            </div>
          ))}
          <div className="flex-center">
            <Button value="Google Search" useFor="search-btn" />
            <Button value="I'm Feeling Lucky" useFor="search-btn" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
