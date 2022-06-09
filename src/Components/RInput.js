import "./Stylesheets/Input.css";
import { useState, useEffect } from "react";
import { ReactComponent as SearchIcon } from "./Stylesheets/search.svg";
import { ReactComponent as MicrophoneIcon } from "./Stylesheets/microphone.svg";
import { ReactComponent as CloseIcon } from "./Stylesheets/close.svg";
import giveSuggestions from "../giveSuggestions";

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

  return (
    <div
      className={
        openSug
          ? "flex-center-col input-main results-input-main"
          : "flex-center-col input-main"
      }
    >
      <div
        className="search-container"
        title="Search"
        onClick={() => {
          setOpenSug((openSug) => !openSug);
        }}
      >
        <SearchIcon className="search-icon input-icon" />
        <input
          value={srch}
          onKeyDown={(e) => {
            if (e.key === " ")
              giveSuggestions(srch)
                .then((response) => {
                  setSuggestions(response.data);
                })
                .catch((error) => {
                  alert(
                    error.request.status === 429
                      ? "Sorry, API only supports 100 requests per day."
                      : `Error code ${error.request.status}`
                  );
                  console.error(error);
                });
          }}
          onChange={(e) => setSrch(e.target.value)}
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
