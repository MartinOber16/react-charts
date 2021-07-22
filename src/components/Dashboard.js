import React, { useEffect, useState } from 'react';
import { PieChartCard } from './charts/PieChartCard';
import { SimpleLineChartCard } from './charts/SimpleLineChartCard';

import { simpleLineChartData } from '../data/simpleLineChartData';
import { pieChartData } from '../data/pieChartData';

import '../styles/dashboard.css';

const Dashboard = () => {

    const [loading, setLoading] = useState( true );

    const getData = () => {
        setTimeout(() => {
            setLoading( false ); // Información obtenida
        }, 1500);
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
                    width={ 500 }
                    height={ 300 }
                />
                <PieChartCard 
                    data={ pieChartData } 
                    title="Pie Chart" 
                    footer="Text in the footer"
                />
            </div>
        </div>
    )
}

export default Dashboard
