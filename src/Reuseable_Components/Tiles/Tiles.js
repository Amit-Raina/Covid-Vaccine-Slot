import { Fragment } from "react";
import "./Tiles.css";

function Tiles(props) {
  return (
    <Fragment>
      <div className="main-props">
        <h3>
          {props.centreName}
          {" "}
          {props.districtName}
          {" , "}
          {" ( "}
          {props.paymentType}
          {" ) "}
        </h3>

        <div className="session-slots">
          <div className="left-spacing">
            <h5>Dates :</h5>
            <h5>Availability :</h5>
            <h5>Min Age :</h5>
          </div>
          <div className="left-spacing">
            <h5>{props.date1}</h5>
            <h5>{props.slotsAvail1}</h5>
            <h5>{props.ageLimit1}</h5>
          </div>

          <div className="left-spacing">
            <h5>{props.date2}</h5>
            <h5>{props.slotsAvail2}</h5>
            <h5>{props.ageLimit2}</h5>
          </div>

          <div className="left-spacing">
            <h5>{props.date3}</h5>
            <h5>{props.slotsAvail3}</h5>
            <h5>{props.ageLimit3}</h5>
          </div>

          <div className="left-spacing">
            <h5>{props.date4}</h5>
            <h5>{props.slotsAvail4}</h5>
            <h5>{props.ageLimit4}</h5>
          </div>

          <div className="left-spacing">
            <h5>{props.date5}</h5>
            <h5>{props.slotsAvail5}</h5>
            <h5>{props.ageLimit5}</h5>
          </div>

          <div className="left-spacing">
            <h5>{props.date6}</h5>
            <h5>{props.slotsAvail6}</h5>
            <h5>{props.ageLimit6}</h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Tiles;
