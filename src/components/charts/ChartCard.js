import React from 'react'

import '../../styles/cards.css';

export const ChartCard = ({ title = '', text = '', footer ='', data = [], width = 500,  height = 300, onClick }) => {
    return (
        <div className="chartCard"  >
            <div className="card" onClick={ onClick } >
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ text }</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <br />
                        {/* Contenido */}
                    <br />
                    { (footer) && <p className="card-footer">{ footer }</p> }
                </div>
            </div>
        </div>
    )
}
