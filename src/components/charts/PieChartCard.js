import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import '../../styles/cards.css';

import { COLORS } from './ChartColors';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const PieChartCard = ({ title = '', text = '', footer ='', data = [], width = 500,  height = 300 }) => {

    return (
        <div className="chartCard" onClick={ () => alert('Click!') } >
            <ResponsiveContainer width="100%" height="100%">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">{ title }</h5>
                        <p className="card-text">{ text }</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        
                        <PieChart 
                            width={ width } 
                            height={ height }
                        >
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {
                                    data.map((entry, index) => (
                                        <Cell 
                                            key={`cell-${index}`} 
                                            fill={COLORS[index % COLORS.length]} 
                                        />
                                    ))
                                }
                            </Pie>
                        </PieChart>
                        { (footer) && <p className="card-footer">{ footer }</p> }
                    </div>
                </div>
            </ResponsiveContainer>
        </div>
    )
}
