import React, { Component } from 'react';
import './widgets.css';
import Widget1 from './Widget1/widget1';
import Widget2 from './Widget2/widget2';
import Widget3 from './Widget3/widget3';
import Widget4 from './Widget4/widget4';
import Widget5 from './Widget5/widget5';
import Widget6 from './Widget6/widget6'

class Widget extends Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="row">

          <div className="row">

            <div className="col-md-2">
              <div className="Widget">
                <Widget6/>
              </div>
            </div>

            <div className="col-md-10">

                <div className="row justify-content-center">

                    <div className="col-md-6">

                        <div className="Widget">
                          <h2>Line Chart</h2>
                          <Widget1/>
                        </div>

                    </div>

                    <div className="col-md-6">

                        <div className="Widget">
                          <h2>Bar Chart</h2>
                          <Widget2/>
                        </div>

                    </div>

                </div>

                <div className="row justify-content-center">

                  <div className="col-md-4">
                    <div>
                      <Widget3/>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div>
                      <Widget4/>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div>
                      <Widget5/>
                    </div>
                  </div>

                </div>

            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default Widget;