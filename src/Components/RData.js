import "./Stylesheets/RData.css";
const RData = ({ url, title, desc }) => {
  return (
    <div className="rdata">
      <div className="rdata-head cursor-pointer">
        <div className="rdata-url">{url}</div>
        <div className="rdata-title link hover-underline">{title}</div>
      </div>
      <div className="rdata-desc">{desc}</div>
    </div>
  );
};

export default RData;
