import "./Stylesheets/Input.css";
import { useState, useEffect } from "react";
import { ReactComponent as SearchIcon } from "./Stylesheets/search.svg";
import { ReactComponent as MicrophoneIcon } from "./Stylesheets/microphone.svg";
import { ReactComponent as CloseIcon } from "./Stylesheets/close.svg";
import Button from "./Button";
import axios from "axios";

const RInput = ({ openSug, setOpenSug, srch, setSrch }) => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const inputIcon = document.querySelectorAll(".input-icon");
    const input = document.querySelector("input");
    inputIcon.forEach((icon) => {
      icon.addEventListener("click", () => {
        input.focus();
      });
    });
    return () => {
      inputIcon.forEach((icon) => {
        icon.removeEventListener("click", () => {
          input.focus();
        });
      });
    };
  }, []);
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setSuggestions(response.data);
        setOpenSug(true);
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
    <div
      className={
        openSug
          ? "flex-center-col input-main results-input-main"
          : "flex-center-col input-main"
      }
    >
      <div className="search-container" title="Search">
        <SearchIcon className="search-icon input-icon" />
        <input
          value={srch}
          onChange={(e) => {
            setSrch(e.target.value);
          }}
          className="input-srch results-input"
        />
        {srch.length > 0 ? (
          <CloseIcon
            className="close-icon cursor-pointer"
            onClick={() => {
              setSrch("");
            }}
          />
        ) : (
          ""
        )}

        <MicrophoneIcon className="microphone-icon input-icon" />
      </div>
      {openSug && srch.length > 0 ? (
        <div className="search-suggestions">
          {suggestions.map((item) => (
            <div
              key={item}
              className="suggestion-item cursor-pointer"
              onClick={() => {
                setSrch(item);
              }}
            >
              <SearchIcon className="suggestion-icon" />
              {item}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RInput;
