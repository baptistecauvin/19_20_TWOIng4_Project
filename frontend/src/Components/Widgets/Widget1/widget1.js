import React, { PureComponent } from 'react';
import './widget1.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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

      <div>

      <LineChart
        width={500}
        height={300}
        data={data}
        /*margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}*/
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="TempSoir" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="TempMatin" stroke="#82ca9d" />
      </LineChart>

      </div>
    );
  }
}