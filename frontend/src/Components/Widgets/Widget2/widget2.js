import React, { PureComponent } from 'react';
import './widget2.css';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'France', TemperatureMax: 25, TemperatureMin: -1, 
  },
  {
    name: 'Canada', TemperatureMax: 20, TemperatureMin: -10,
  },
  {
    name: 'Australie', TemperatureMax: 35, TemperatureMin: 15,
  },
  {
    name: 'Japon', TemperatureMax: 26, TemperatureMin: 10,
  },
  {
    name: 'Suisse', TemperatureMax: 20, TemperatureMin: -5,
  },
];

export default class Widget2 extends PureComponent {

  render() {
    return (


      <ResponsiveContainer aspect="2">

        <BarChart
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
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="TemperatureMin" fill="#8884d8" />
          <Bar dataKey="TemperatureMax" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

 //<h3>BarChart</h3>