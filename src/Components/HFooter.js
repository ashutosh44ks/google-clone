import "./Stylesheets/HFooter.css";

const HFooter = () => {
  return (
    <div className="home-footer">
      <div className="footer-location">India</div>
      <div className="footer-main">
        <ul className="hfoot-left">
          <li className="hover-underline cursor-pointer">About</li>
          <li className="hover-underline cursor-pointer">Advertising</li>
          <li className="hover-underline cursor-pointer">Business</li>
          <li className="hover-underline cursor-pointer">How Search works</li>
        </ul>
        <ul className="hfoot-right">
          <li className="hover-underline cursor-pointer">Privacy</li>
          <li className="hover-underline cursor-pointer">Terms</li>
          <li className="hover-underline cursor-pointer">Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default HFooter;
