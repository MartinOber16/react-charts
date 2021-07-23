import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

import { DivPieChartCard } from './ChartCard.styles';

import { COLORS } from '../../utils/colors';

// [
//     { 
//         name: 'Group A', 
//         value: 400 
//       },
// ]

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {

    const radius = innerRadius + (outerRadius - innerRadius) * 1.2; // 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
};

export const PieChartCard = ({ 
        title = '', 
        text = '', 
        footer ='', 
        data = [], 
        width = 500,  
        height = 400, 
        outerRadius = 80, 
        onClick,
        labelLine = false, 
        legend = false,
        tooltip = false
    }) => {

    return (
        <DivPieChartCard className="card" onClick={ onClick } >
            <div className="card-body">
                <h4 className="card-title">{ title }</h4>
                <p className="card-text">{ text }</p>
                <PieChart 
                    width={ width } 
                    height={ height }
                >
                    { (tooltip) && <Tooltip /> }
                    { (legend) && <Legend /> }
                    <Pie
                        data={ data }
                        cx="50%"
                        cy="50%"
                        labelLine={ labelLine }
                        label={ renderCustomizedLabel }
                        outerRadius={ outerRadius }
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
                <br />
                { (footer) && <p className="card-footer">{ footer }</p> }
            </div>
        </DivPieChartCard>
    )
}
