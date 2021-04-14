import {Box} from "@material-ui/core";
import styles from "./LetterI.module.scss"
import React from "react";
import PropTypes from 'prop-types';

function LetterI (props){
    return(

        <div style={{maxHeight: '100vh', minHeight: '50vh'}}>
            <div className={`${styles.leftShape} ${styles.shps}`}>
                <div className={`${styles.txt} `} >
                    {props.leftText}
                </div>
            </div>
            <div className={`${styles.rightShape} ${styles.shps}`}>
                <div className={`${styles.txt} `} >
                    {props.rightText}
                </div>

            </div>

        </div>
    );
}

LetterI.propTypes={
    leftText: PropTypes.string,
    rightText: PropTypes.string
};

export default LetterI;
