import React from 'react';
import styles from './LoadSpinner.module.css';

const LoadSpinner = () => (
    <div className={`lds-ellipsis`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default LoadSpinner;
