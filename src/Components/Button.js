import "./Stylesheets/Button.css";
import { useNavigate } from "react-router-dom";

const Button = ({ useFor, value }) => {
  let navigate = useNavigate();
  return (
    <button
      onClick={() => {
        if (value === "Google Search") navigate("/google-clone/results");
      }}
      className={`btn cursor-pointer ${useFor}`}
    >
      {value}
    </button>
  );
};
Button.defaultProps = {
  useFor: "",
  value: "",
};
export default Button;
