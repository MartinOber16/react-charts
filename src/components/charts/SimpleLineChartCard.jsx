import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { DivSimpleLineChartCard } from './ChartCard.styles';

import { COLORS } from '../../utils/colors';

// [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2100,
//     },
// ]

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

export const SimpleLineChartCard = ({ 
        title = '', 
        text = '', 
        footer ='', 
        data = [], 
        width = 500, 
        height = 300, 
        onClick,
        legend = false,
        tooltip = false
    }) => {

    const lines = countValuesJSONObject(data);

    return (
        <DivSimpleLineChartCard className="card" onClick={ onClick } >
            <div className="card-body">
                <h4 className="card-title">{ title }</h4>
                <p className="card-text">{ text }</p>
                <LineChart
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
                    { (tooltip) && <Tooltip /> }
                    { (legend) && <Legend /> }
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
        </DivSimpleLineChartCard>

    )
}
