import {Box} from "@material-ui/core";
import styles from "./LetterY.module.scss"
import React from "react";
import PropTypes from 'prop-types';

function LetterY (props){
    return(
<Box style={{maxHeight: '100vh', minHeight: '100vh'}}>

    <div className={`${styles.leftShape}`}>
        <div className={`${styles.txt} m-5`}>
            `${props.leftText}`
        </div>
    </div>
    <div className={`${styles.middleShape}`}>
        <div className={`${styles.txt} m-5`}>
            `${props.leftText}`
        </div>
    </div>
    <div className={`${styles.rightShape}`}>
        <div className={`${styles.txt} m-5`}>
            `${props.leftText}`
        </div>
    </div>

    {/*<div className={`${styles.rightShape}`}>*/}
    {/*    <div className={`${styles.txt} m-5`} >*/}
    {/*        `${props.rightText}`*/}
    {/*    </div>*/}

    {/*</div>*/}
</Box>


    );
}

LetterY.propTypes={
    leftText: PropTypes.string,
    rightText: PropTypes.string
};

export default LetterY;
