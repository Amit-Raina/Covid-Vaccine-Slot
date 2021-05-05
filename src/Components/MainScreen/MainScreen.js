import axios from "axios";
import { Component, Fragment } from "react";
import "./MainScreen.css";

import Tiles from "../../Reuseable_Components/Tiles/Tiles";
import Header from "../../Reuseable_Components/Header/Header";
import Footer from "../../Reuseable_Components/Footer/Footer";
import SearchBar from "../../Reuseable_Components/SearchBar/SearchBar";

class MainScreen extends Component {
  state = {
    pincode: "",
    recieveData: [],
    shoudSearch: true,
  };

  getPinCode = (value) => {
    this.setState({
      pincode: value,
      shoudSearch: true,
    });
  };

  componentDidUpdate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = dd + "-" + mm + "-" + yyyy;

    if (this.state.pincode.length === 6 && this.state.shoudSearch) {
      axios
        .get(
          `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${parseInt(
            this.state.pincode
          )}&date=${today}`
        )
        .then((response) => {
          this.setState({
            recieveData: response.data.centers,
            shoudSearch: false,
          });
        })
        .catch(() => {
          this.setState({
            recieveData: [],
            shoudSearch: false
          });
        });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="main-window">
          <Header />
          <SearchBar
            newPinCode={(event) => this.getPinCode(event.target.value)}
          />
          <div className="detail-box">
            {this.state.pincode === "" ? (
              <center>
                <div
                  style={{
                    backgroundColor: "#CCCC00",
                    color: "white",
                    width: "15%",
                    padding: "2px",
                    borderRadius: "20px",
                  }}
                >
                  <h2>Enter Pincode ⚠</h2>
                </div>
              </center>
            ) : (
              ""
            )}
            {this.state.recieveData.length === 0 &&
            this.state.shoudSearch === false ? (
              <center>
                <div
                  style={{
                    backgroundColor: "#CCCC00",
                    color: "white",
                    width: "15%",
                    padding: "2px",
                    borderRadius: "20px",
                  }}
                >
                  <h2>No Results ⚠</h2>
                </div>
              </center>
            ) : (
              ""
            )}
            {this.state.recieveData.map((data, index) => {
              return (
                <Tiles
                  key={index}
                  centreName={data.name}
                  districtName={
                    data.district_name +
                    " " +
                    data.state_name +
                    " " +
                    data.pincode
                  }
                  paymentType={data.fee_type}
                  date1={
                    data.sessions.length >= 1
                      ? data.sessions[0].date
                      : "No Slots"
                  }
                  slotsAvail1={
                    data.sessions.length >= 1
                      ? data.sessions[0].available_capacity
                      : "0"
                  }
                  ageLimit1={
                    data.sessions.length >= 1
                      ? data.sessions[0].min_age_limit
                      : "No Slots"
                  }
                  vaccine1={
                    data.sessions.length >= 1
                      ? data.sessions[0].vaccine
                      : "No Vaccine"
                  }
                  date2={
                    data.sessions.length >= 2
                      ? data.sessions[1].date
                      : "No Slots"
                  }
                  slotsAvail2={
                    data.sessions.length >= 2
                      ? data.sessions[1].available_capacity
                      : "0"
                  }
                  ageLimit2={
                    data.sessions.length >= 2
                      ? data.sessions[1].min_age_limit
                      : "No Slots"
                  }
                  vaccine2={
                    data.sessions.length >= 1
                      ? data.sessions[0].vaccine
                      : "No Vaccine"
                  }
                  date3={
                    data.sessions.length >= 3
                      ? data.sessions[2].date
                      : "No Slots"
                  }
                  slotsAvail3={
                    data.sessions.length >= 3
                      ? data.sessions[2].available_capacity
                      : "0"
                  }
                  ageLimit3={
                    data.sessions.length >= 3
                      ? data.sessions[2].min_age_limit
                      : "No Slots"
                  }
                  vaccine3={
                    data.sessions.length >= 1
                      ? data.sessions[0].vaccine
                      : "No Vaccine"
                  }
                  date4={
                    data.sessions.length >= 4
                      ? data.sessions[3].date
                      : "No Slots"
                  }
                  slotsAvail4={
                    data.sessions.length >= 4
                      ? data.sessions[3].available_capacity
                      : "0"
                  }
                  ageLimit4={
                    data.sessions.length >= 4
                      ? data.sessions[3].min_age_limit
                      : "No Slots"
                  }
                  vaccine4={
                    data.sessions.length >= 1
                      ? data.sessions[0].vaccine
                      : "No Vaccine"
                  }
                  date5={
                    data.sessions.length >= 5
                      ? data.sessions[4].date
                      : "No Slots"
                  }
                  slotsAvail5={
                    data.sessions.length >= 5
                      ? data.sessions[4].available_capacity
                      : "0"
                  }
                  ageLimit5={
                    data.sessions.length >= 5
                      ? data.sessions[4].min_age_limit
                      : "No Slots"
                  }
                  vaccine5={
                    data.sessions.length >= 1
                      ? data.sessions[0].vaccine
                      : "No Vaccine"
                  }
                  date6={
                    data.sessions.length >= 6
                      ? data.sessions[5].date
                      : "No Slots"
                  }
                  slotsAvail6={
                    data.sessions.length >= 6
                      ? data.sessions[5].available_capacity
                      : "0"
                  }
                  ageLimit6={
                    data.sessions.length >= 6
                      ? data.sessions[5].min_age_limit
                      : "No Slots"
                  }
                  vaccine6={
                    data.sessions.length >= 1
                      ? data.sessions[0].vaccine
                      : "No Vaccine"
                  }
                />
              );
            })}
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default MainScreen;
