import "./Header.css";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <center>
          <div className="basket-logo">
            <i className="fa fa-user-md fa-6 basket-icon"></i>
            <h2>Vaccinate, Now!</h2>
          </div>
        </center>
      </div>
    </Fragment>
  );
};

export default Header;
