import React from 'react';
import { Link } from 'react-router-dom';

import pageError from '../img/error_http.jpg'

export const CardError404 = () => {
    return (
        <div>
            <img src={pageError} alt="not found"/>
            <Link to="/">Go to Home</Link>
        </div>
    )
}
