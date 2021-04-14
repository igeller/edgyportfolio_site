import {Box} from "@material-ui/core";
import styles from "./LetterZ.module.scss"
import React from "react";
import PropTypes from 'prop-types';

function LetterZ (props){
    return(
<div style={{maxHeight: '100vh', minHeight: '50vh'}}>
    <div className={`${styles.leftShape} ${styles.shps}`}>
        <div className={`${styles.txt} ml-3`}>
            ${props.leftText}
        </div>
    </div>
    <div className={`${styles.rightShape} ${styles.shps}`}>
        <div className={` ${styles.txt} mr-3`} >
            {props.rightText}
        </div>

    </div>
</div>


    );
}

LetterZ.propTypes={
    leftText: PropTypes.string,
    rightText: PropTypes.string
};

export default LetterZ;
