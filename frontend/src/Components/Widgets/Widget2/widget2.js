import React, { PureComponent } from 'react';
import './widget2.css';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
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
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
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
    );
  }
}