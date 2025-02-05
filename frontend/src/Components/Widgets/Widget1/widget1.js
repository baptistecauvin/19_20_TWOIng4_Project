import React, { PureComponent } from 'react';
import './widget1.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

//proviens du site http://recharts.org/en-US/examples
const data = [
  {
    name: 'Paris', TempMatin: 5, TempSoir: 10,
  },
  {
    name: 'Londres', TempMatin: 6, TempSoir: 9,
  },
  {
    name: 'NY', TempMatin: 1, TempSoir: 4,
  },
  {
    name: 'Sydney', TempMatin: 17, TempSoir: 25,
  },
];


export default class Widget1 extends PureComponent {

  render() {

    //const personne = this.props.WidgetData;

    return (

        <ResponsiveContainer aspect="2">

      	      <LineChart
      	        data={data}
      	        margin={{
      	          top: 0, right: 25, left: 0, bottom: 15,
      	        }}
      	      >
      	        <CartesianGrid strokeDasharray="3 3" />
      	        <XAxis dataKey="name" />
      	        <YAxis />
      	        <Tooltip />
      	        <Legend />
      	        <Line type="monotone" dataKey="TempSoir" stroke="#8884d8" activeDot={{ r: 8 }} />
      	        <Line type="monotone" dataKey="TempMatin" stroke="#82ca9d" />
      	      </LineChart>
        </ResponsiveContainer>
    );
  }
}

//<h3>LineChart</h3>