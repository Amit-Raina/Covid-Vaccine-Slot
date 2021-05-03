import "./SearchBar.css";
import { Component, Fragment } from "react";


class SearchBar extends Component {
  render() {
      
    return (
        
      <Fragment>
        <div className="search-bar">
          <input type="text" placeholder="Enter pincode" onChange={this.props.newPinCode}/> 
        </div>
      </Fragment>
    );
  }
}

export default SearchBar;
