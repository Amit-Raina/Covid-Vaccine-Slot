import axios from 'axios';
import { Component, Fragment } from 'react';
import './MainScreen.css';

import { Tiles } from '../../Reuseable_Components/Tiles/Tiles'

class MainScreen extends Component {

    state = {
        pincode: 180002,
        recieveData: [],
    }


    componentDidMount = () => {

        axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${this.state.pincode}&date=02-05-2021`)
            .then((response) => {
                this.setState({
                    recieveData: response.data.centers
                })
                console.log(this.state.recieveData);


            })
    }

    render() {

        return (
            <Fragment>

                <div className='main-window'>

                    <div className="detail-box">

                        {this.state.recieveData.map((data, index) => {

                            return <Tiles key={index} centreName={data.name} districtName={data.district_name + " " + data.state_name + " " + data.pincode} paymentType={data.fee_type}
                                date1={data.sessions[0].date ? data.sessions[0].date : "Not Available"}
                                slotsAvail1={data.sessions[0].available_capacity ? data.sessions[0].available_capacity : "0"}
                                ageLimit1={data.sessions[0].min_age_limit ? data.sessions[0].min_age_limit : "Not Available"}

                                date2={data.sessions[1].date ? data.sessions[1].date : "Not Available"}
                                slotsAvail2={data.sessions[1].available_capacity ? data.sessions[1].available_capacity : "0"}
                                ageLimit2={data.sessions[1].min_age_limit ? data.sessions[1].min_age_limit : "Not Available"}

                                date3={data.sessions[2].date ? data.sessions[2].date : "Not Available"}
                                slotsAvail3={data.sessions[2].available_capacity ? data.sessions[2].available_capacity : "0"}
                                ageLimit3={data.sessions[2].min_age_limit ? data.sessions[2].min_age_limit : "Not Available"}

                                date4={data.sessions[3].date ? data.sessions[3].date : "Not Available"}
                                slotsAvail4={data.sessions[3].available_capacity ? data.sessions[3].available_capacity : "0"}
                                ageLimit4={data.sessions[3].min_age_limit ? data.sessions[3].min_age_limit : "Not Available"}

                                date5={data.sessions[4].date ? data.sessions[4].date : "Not Available"}
                                slotsAvail5={data.sessions[4].available_capacity ? data.sessions[4].available_capacity : "0"}
                                ageLimit5={data.sessions[4].min_age_limit ? data.sessions[4].min_age_limit : "Not Available"}

                                date6={data.sessions[5].date ? data.sessions[5].date : "Not Available"}
                                slotsAvail6={data.sessions[5].available_capacity ? data.sessions[5].available_capacity : "0"}
                                ageLimit6={data.sessions[5].min_age_limit ? data.sessions[5].min_age_limit : "Not Available"}
                            />


                        })}



                    </div>
                </div>
            </Fragment>
        );
    }

}

export default MainScreen;