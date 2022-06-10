import Button from "./Button";
import "./Stylesheets/Sidebar.css";
import { ReactComponent as CloseIcon } from "./Stylesheets/close.svg";
import { ReactComponent as OpenNewIcon } from "./Stylesheets/open-new.svg";
import { ReactComponent as NewsIcon } from "./Stylesheets/news.svg";
const Sidebar = ({ setSidebar }) => {
  return (
    <>
      <div className="bg-overlay"></div>
      <div className="sidebar">
        <section className="sidebar-section-first">
          <div className="section-head section-head-first flex-space-bw-center">
            Quick Settings
            <CloseIcon
              className="close-settings-icon cursor-pointer"
              onClick={() => {
                setSidebar(false);
              }}
            />
          </div>
          <Button useFor="sidemenu-settings" value="See All Settings" />
        </section>
        <section className="sidebar-section">
          <div className="section-head"> Privacy</div>
          <div className="flex-space-bw-center section-items cursor-pointer">
            Search history
            <OpenNewIcon className="new-settings-icon" />
          </div>
          <div className="flex-space-bw-center section-items cursor-pointer">
            Your data in Search
            <OpenNewIcon className="new-settings-icon" />
          </div>
        </section>
        <section className="sidebar-section">
          <div className="section-head"> Using Search</div>
          <div className="flex-space-bw-center section-items cursor-pointer">
            Explicit results filter <input type="checkbox" />
          </div>
          <div className="flex-space-bw-center section-items cursor-pointer">
            Languages <span>English</span>
          </div>
          <div className="flex-space-bw-center section-items cursor-pointer">
            Advance search <input type="checkbox" />
          </div>
        </section>
        <section className="sidebar-section">
          <div className="section-head"> Appearance</div>
          <div className="flex-space-bw-center section-items cursor-pointer">
            <span className="flex-space-bw-center">
              <input type="radio" />
              Light Theme
            </span>
            <NewsIcon id="light-theme-icon" />
          </div>
          <div className="flex-space-bw-center section-items cursor-pointer">
            <span className="flex-space-bw-center">
              <input type="radio" />
              Dark Theme
            </span>
            <NewsIcon id="dark-theme-icon" />
          </div>
          <div className="flex-space-bw-center section-items cursor-pointer">
            <span className="flex-space-bw-center">
              <input type="radio" />
              Device default
            </span>
            <NewsIcon id="device-theme-icon" />
          </div>
        </section>
        <section className="sidebar-section">
          <div className="section-head"> Support</div>
          <div className="flex-space-bw-center section-items cursor-pointer">
            Search Help
            <OpenNewIcon className="new-settings-icon" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Sidebar;
