import React from 'react';
import {Link} from 'react-router-dom';

const view = () => {
    return (
        <div>
            <ul>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/list"}>List</Link></li>
                <li><Link to={"/detail"}>Detail</Link></li>
            </ul>
        </div>
    );
};

export {view};