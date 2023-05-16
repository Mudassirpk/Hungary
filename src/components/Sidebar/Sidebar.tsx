import { useState } from "react";

import "./Sidebar.scss";

// icons
import logo from "./../../assets/icons/logo.svg";
import homeIcon from "./../../assets/icons/Home.svg";
import discountIcon from "./../../assets/icons/Discount.svg";
import dashboardIcon from "./../../assets/icons/Dashboard.svg";
import messageIcon from "./../../assets/icons/Message.svg";
import notificationIcon from "./../../assets/icons/Notification.svg";
import settingIcon from "./../../assets/icons/Setting.svg";

// components
import Option from "./Option";

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState<string>("home");

  function handleSelection(option: string) {
    setSelectedOption(option);
  }

  return (
    <section className="sidebar">
      <div className="logo-box" style={{ padding: "0 1rem 0 0" }}>
        <div className="icon-box">
          <img alt="icon" src={logo} />
        </div>
      </div>

      <div className="options">
        <Option
          customClass={selectedOption === "home" ? "selected-option" : ""}
          selector={handleSelection}
          optionName="home"
          icon={homeIcon}
        />
        <Option
          selector={handleSelection}
          optionName="discount"
          customClass={selectedOption === "discount" ? "selected-option" : ""}
          icon={discountIcon}
        />{" "}
        <Option
          selector={handleSelection}
          optionName="dashboard"
          customClass={selectedOption === "dashboard" ? "selected-option" : ""}
          icon={dashboardIcon}
        />
        <Option
          selector={handleSelection}
          optionName="message"
          customClass={selectedOption === "message" ? "selected-option" : ""}
          icon={messageIcon}
        />
        <Option
          selector={handleSelection}
          optionName="notification"
          customClass={
            selectedOption === "notification" ? "selected-option" : ""
          }
          icon={notificationIcon}
        />
        <Option
          selector={handleSelection}
          optionName="setting"
          customClass={selectedOption === "setting" ? "selected-option" : ""}
          icon={settingIcon}
        />
      </div>
    </section>
  );
};

export default Sidebar;
