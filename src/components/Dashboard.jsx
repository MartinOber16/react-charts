import React, { useEffect, useState } from 'react';

import { PieChartCard } from './charts/PieChartCard';
import { SimpleLineChartCard } from './charts/SimpleLineChartCard';
import { SimpleBarChartCard } from './charts/SimpleBarChartCard';

// Data de ejemplo
import { simpleLineChartData } from '../data/simpleLineChartData';
import { pieChartData } from '../data/pieChartData';
import { simpleBarChartData } from '../data/simpleBarChartData';

const Dashboard = () => {

    const [loading, setLoading] = useState( true );

    const getData = () => {
        setTimeout(() => {
            setLoading( false ); // Información obtenida
        }, 1000);
    }

    useEffect(() => {
        getData();
    }, []);

    if(loading){
        return (
            <div className="container">
                <br />
                <h4>Obteniendo información, por favor espere ...</h4>
            </div>
        )
    }

    return (
        <div className="container">
            <br />
            <h1>Dashboard</h1>
            <hr />
            <div className="row">
                <SimpleLineChartCard 
                    data={ simpleLineChartData } 
                    title="Simple Line Chart" 
                    text="With supporting text below as a natural lead-in to additional content."
                    footer="Text in the footer"
                    width={ 500 }
                    height={ 300 }
                    onClick={ () => alert( 'Click' ) }
                    legend = { true }
                    tooltip = { true }
                />
                <PieChartCard 
                    data={ pieChartData } 
                    title="Pie Chart" 
                    text="With supporting text below as a natural lead-in to additional content."
                    footer="Text in the footer"
                    width={ 500 }
                    height={ 300 }
                    outerRadius={ 100 }
                    onClick={ () => alert( 'Click' ) }
                    labelLine = { true } 
                    legend = { true }
                    tooltip = { true }
                />
                <SimpleBarChartCard 
                    data={ simpleBarChartData } 
                    title="Simple Bar Chart" 
                    text="With supporting text below as a natural lead-in to additional content."
                    footer="Text in the footer"
                    width={ 1060 }
                    height={ 400 }
                    outerRadius={ 100 }
                    onClick={ () => alert( 'Click' ) }
                />
                <br />
            </div>
            <br />
            <br />
        </div>
    )
}

export default Dashboard
