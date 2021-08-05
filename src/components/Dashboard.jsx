import React, { useEffect, useState } from 'react';

import { PieChartCard } from './charts/PieChartCard';
import { SimpleLineChartCard } from './charts/SimpleLineChartCard';
import { SimpleBarChartCard } from './charts/SimpleBarChartCard';

// Data de ejemplo
import { simpleLineChartData } from '../data/simpleLineChartData';
import { simpleBarChartData } from '../data/simpleBarChartData';
import { fetchSinToken } from '../helpers/fetch';

//import { pieChartData } from '../data/pieChartData';
const getPieChartData = async ( dias = 30 ) => {
    const resp = await fetchSinToken( `charts/pendientesPorTipoTramite?dias=${ dias }` );
    const body = await resp.json();

    if( body.ok ) {
        const data = body.obj.map( (o, i) => ({
            id: i+1, //TODO: aca deberia ser entry.id pero hay que traerlo del backend y meterlo en la data
            name: o.tipoTramite,
            value: o.count,
        }))

        return data;
    } else {
        console.log( body.msg );
        return [];
    }
}

const getPieChartListData = async ( dias = 30, tipoTramite ) => {

    console.log( { tipoTramite } );

    const resp = await fetchSinToken( `listados/pendientesTipoTramiteUltimosDias?dias=${ dias }&tipoTramite=${ tipoTramite }` );
    const body = await resp.json();

    if( body.ok ) {
        return body.obj;
    } else {
        console.log( body.msg );
        return [];
    }
}

const Dashboard = () => {

    const [loading, setLoading] = useState( true );
    const [pieChartData, setPieChartData] = useState([]);

    const getData = async () => {
        const pcd = await getPieChartData();
        setPieChartData( pcd );
        setLoading( false );
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
                    height={ 500 }
                    outerRadius={ 100 }
                    labelLine = { true } 
                    legend = { true }
                    tooltip = { true }
                    getListData = { getPieChartListData }
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
