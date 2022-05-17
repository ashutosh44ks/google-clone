import "./Stylesheets/Menu.css";
import { ReactComponent as AccountIcon } from "./Stylesheets/account.svg";
import { ReactComponent as GmailIcon } from "./Stylesheets/gmail.svg";
import { ReactComponent as MapsIcon } from "./Stylesheets/maps.svg";
import { ReactComponent as MeetIcon } from "./Stylesheets/meet.svg";
import { ReactComponent as PlayIcon } from "./Stylesheets/play.svg";
import { ReactComponent as YoutubeIcon } from "./Stylesheets/youtube.svg";
import { ReactComponent as DefaultIcon } from "./Stylesheets/default.svg"; //Adding all icons is repetitive

const Menu = () => {
  const gridList = [
    { svg: <AccountIcon className="menu-grid-icon" />, title: "Account" },
    { svg: <DefaultIcon className="menu-grid-icon" />, title: "Search" },
    { svg: <DefaultIcon className="menu-grid-icon" />, title: "Business" },
    { svg: <MapsIcon className="menu-grid-icon" />, title: "Maps" },
    { svg: <YoutubeIcon className="menu-grid-icon" />, title: "Youtube" },
    { svg: <PlayIcon className="menu-grid-icon" />, title: "Play" },
    { svg: <DefaultIcon className="menu-grid-icon" />, title: "News" },
    { svg: <GmailIcon className="menu-grid-icon" />, title: "Gmail" },
    { svg: <MeetIcon className="menu-grid-icon" />, title: "Meet" },
    { svg: <DefaultIcon className="menu-grid-icon" />, title: "Chat" },
    { svg: <DefaultIcon className="menu-grid-icon" />, title: "Contacts" },
    { svg: <DefaultIcon className="menu-grid-icon" />, title: "Drive" },
    { svg: <DefaultIcon className="menu-grid-icon" />, title: "Calendar" },
    { svg: <DefaultIcon className="menu-grid-icon" />, title: "Translate" },
    { svg: <DefaultIcon className="menu-grid-icon" />, title: "Photos" },
    { svg: <DefaultIcon className="menu-grid-icon" />, title: "Duo" },
    { svg: <DefaultIcon className="menu-grid-icon" />, title: "Shopping" },
  ];

  return (
    <div className="menu">
      <div className="menu-grid">
        {gridList.map((item) => (
          <div className="menu-grid-item" key={item.title}>
            {item.svg}
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
