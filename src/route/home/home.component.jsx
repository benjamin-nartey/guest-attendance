import cocoaLogo from "../../assets/cocoastylize.png";
import { Outlet } from "react-router-dom";
import SidebarNavigation from "../../component/sidebar-navigation/sidebar-navigation.component";
import "./home.styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <SidebarNavigation />
      <div className="main-container">
        <h1 className="heading-main">
          <span>Guest</span> Attendace
        </h1>
        <div className="blur-main-container">
          <div className="transparentContainer">
            <Outlet />
          </div>
        </div>
        <img className="cocoa-logo" src={cocoaLogo} alt="cocoa-logo" />
      </div>
    </div>
  );
};

export default Home;
