import "./sidebar-navigation.styles.css";
import cocobodLogo from "../../assets/logo-cocobod.png";
import { RiAdminLine } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

const SidebarNavigation = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <Link className="nav-link" to="/">
          <img className="cocobod-logo" src={cocobodLogo} alt="cocobod-logo" />
        </Link>
        <div className="nav-link-container">
          <Link to="/admin">
            <RiAdminLine className="icons" />
          </Link>
          <Link to="/form">
            <BiLogIn className="icons" />
          </Link>
          <Link to="/exit">
            <BiLogOut className="icons" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
