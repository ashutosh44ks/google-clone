import "./Stylesheets/RData.css";
import { ReactComponent as MoreIcon } from "./Stylesheets/more.svg";

const RData = ({ url, title, desc }) => {
  return (
    <div className="rdata">
      <div className="rdata-head cursor-pointer">
        <div className="rdata-url flex-align-center">
          {url} <MoreIcon className="rdata-url-menu" />
        </div>
        <div className="rdata-title link hover-underline">{title}</div>
      </div>
      <div className="rdata-desc">{desc}</div>
    </div>
  );
};

RData.defaultProps = {
  url: "https://www.defaultProp.com/usedFor/TestingPurposes",
  title: "Default Prop Title",
  desc: "Daily limits of API have been exhausted, this is just a placeholder",
};

export default RData;
