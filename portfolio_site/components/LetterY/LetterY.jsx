import {Box} from "@material-ui/core";
import styles from "./LetterY.module.scss"
import React from "react";
import PropTypes from 'prop-types';

function LetterY (props){
    return(
<div style={{maxHeight: '100vh', minHeight: '50vh'}}>

    <div className={`${styles.leftShape} ${styles.shps}`}>
        <div className={`${styles.txt} `}>
            `${props.leftText}`
        </div>
    </div>
    <div className={`${styles.middleShape} ${styles.shps}`}>
        <div className={`${styles.txt} `}>
            `${props.leftText}`
        </div>
    </div>
    <div className={`${styles.rightShape} ${styles.shps}`}>
        <div className={`${styles.txt}`}>
            `${props.leftText}`
        </div>
    </div>

    {/*<div className={`${styles.rightShape}`}>*/}
    {/*    <div className={`${styles.txt} m-5`} >*/}
    {/*        `${props.rightText}`*/}
    {/*    </div>*/}

    {/*</div>*/}
</div>


    );
}

LetterY.propTypes={
    leftText: PropTypes.string,
    rightText: PropTypes.string
};

export default LetterY;
