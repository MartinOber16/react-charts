import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import '../../styles/cards.css';
import { COLORS } from '../../utils/colors';

// [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
// ]

export const SimpleBarChartCard = ({ title = '', text = '', footer ='', data = [], width = 500,  height = 300, onClick }) => {
    return (
        <div className="chartCard"  >
            <div className="card" onClick={ onClick } >
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ text }</p>
                    <br />
                    <BarChart
                        width={ width }
                        height={ height }
                        data={ data }
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                     >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill={ COLORS[0]} />
                        <Bar dataKey="uv" fill={ COLORS[1]} />
                        <Bar dataKey="amt" fill={ COLORS[2]} />
                    </BarChart>
                    <br />
                    { (footer) && <p className="card-footer">{ footer }</p> }
                </div>
            </div>
        </div>
    )
}
