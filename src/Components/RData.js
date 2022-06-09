import "./Stylesheets/RData.css";
import { ReactComponent as MoreIcon } from "./Stylesheets/more.svg";

const RData = ({ url, title, desc }) => {
  return (
    <div className="rdata">
      <div className="rdata-head cursor-pointer">
        <div className="rdata-url flex-align-center">
          {url} <MoreIcon className="tab-icon" />
        </div>
        <div className="rdata-title link hover-underline">{title}</div>
      </div>
      <div className="rdata-desc">{desc}</div>
    </div>
  );
};

export default RData;
