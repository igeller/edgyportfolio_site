import {Box} from "@material-ui/core";
import styles from "./LetterZ.module.scss"
import React from "react";
import PropTypes from 'prop-types';
import ItemTitle from "../ItemTitle/ItemTitle";

function LetterZ (props){

    return(
<div style={{maxHeight: '100vh', minHeight: '50vh'}}>
    <div className={`${styles.leftShape} ${styles.shps} ${props.version == 1 ? styles.v1Left: styles.v2Left}`}>
        <ItemTitle infoID={'hello'} title={'left'}/>
        {/*<div className={`${styles.txtHolder}`}>*/}
        {/*    ${props.leftText}*/}
        {/*</div>*/}
    </div>
    <div className={`${styles.rightShape} ${styles.shps} ${props.version == 1 ? styles.v1Right: styles.v2Right}`}>
        <div className={` ${styles.txtHolder}`} >
            {props.rightText}
        </div>

    </div>
</div>


    );
}

LetterZ.propTypes={
    leftText: PropTypes.string,
    rightText: PropTypes.string,
    version: PropTypes.number
};

export default LetterZ;
