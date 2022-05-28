import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Summary.css";
import React from 'react';
import CountUp from "react-countup";

const Summary = ({ icon, number, header }) => {

    return (
        <div className='mt-20' >
            <div>
                <h1>fontawesome</h1>
                <div>
                    <FontAwesomeIcon className="icon block mx-auto text-black" icon={icon} />
                </div>
                <div className="mt-3 text-center">
                    <CountUp className="number text-white " duration="3" end={number} /> <span className="summary-header text-white ">{header}</span>
                </div>
            </div>
        </div>
    );
};

export default Summary;