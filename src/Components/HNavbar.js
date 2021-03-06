import "./Stylesheets/HNavbar.css";
import { ReactComponent as MenuIcon } from "./Stylesheets/menu.svg";
import Button from "./Button";
import Menu from "./Menu";

const HNavbar = ({ open, setOpen, user }) => {
  return (
    <div className="home-navbar">
      <ul className="hnav-pages">
        <li className="hover-underline cursor-pointer">Gmail</li>
        <li className="hover-underline cursor-pointer">Images</li>
      </ul>
      <ul className="hnav-extra">
        <li className="hover-underline cursor-pointer">
          <MenuIcon
            className="menu-icon"
            title="Google Apps"
            onClick={() => {
              setOpen((open) => !open);
            }}
          />
          {open ? <Menu /> : ""}
        </li>
        <li className="hover-underline cursor-pointer">
          {user ? `${user}` : <Button useFor="signin-btn" value="Sign In" />}
        </li>
      </ul>
    </div>
  );
};

HNavbar.defaultProps = {
  user: false,
};
export default HNavbar;
