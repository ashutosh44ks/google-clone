import "./Stylesheets/Button.css";

const Button = ({ useFor, value }) => {
  return <button className={`btn cursor-pointer ${useFor}`}>{value}</button>;
};
Button.defaultProps = {
  useFor: "",
  value: ""
};
export default Button;
