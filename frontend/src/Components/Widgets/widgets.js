import React, { Component } from 'react';
import "./widgets.css";
import Widget2 from "./Widget2/widget2";
import Widget1 from "./Widget1/widget1";

class Widget extends Component {
  render() {

    return(
      <div className="container-fluid">
          <div className="row">

            <div className="col-md-6">

                <div className="Widget1">
                  <Widget1/>
                </div>

            </div>

            <div className="col-md-6">

                <div className="Widget2">
                  <Widget2/>
                </div>

            </div>

          </div>
      </div>
    )
  }
}

export default Widget;