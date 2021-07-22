import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import '../../styles/cards.css';

import { COLORS } from './ChartColors';

const countValuesJSONObject = ( data ) => {

    let keys = [];
    data.map( obj => {

        for( let key in obj ) {

            if(!keys.includes(key)) {
                keys.push(key);
            }

        }
        return true;
    })

    return keys;
}

export const SimpleLineChartCard = ({ title = '', text = '', footer ='', data = [], width = 500,  height = 300 }) => {

    const lines = countValuesJSONObject(data);

    return (
        <div className="chartCard" onClick={ () => alert('Click!') }>
            <ResponsiveContainer width="100%" height="100%" >
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{ title }</h5>
                        <p className="card-text">{ text }</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        <br />
                        <LineChart
                            width={ width }
                            height={ height }
                            data={data}
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

                            {
                                lines.map( (line, index) => 
                                    (line !== 'name') && 
                                        <Line type="monotone" dataKey={ line } stroke={ COLORS[index] } key={ line } /> 
                                )
                            }

                        </LineChart>
                        <br />
                        { (footer) && <p className="card-footer">{ footer }</p> }
                    </div>
                </div>
            </ResponsiveContainer>
        </div>
    )
}
