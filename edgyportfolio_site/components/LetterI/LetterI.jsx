import {Box} from "@material-ui/core";
import styles from "./LetterI.module.scss"
import React, {useState} from "react";
import PropTypes from 'prop-types';
import {motion} from "framer-motion";
import MoreInfo from "../MoreInfo/MoreInfo";
// import {useHoverGesture} from "framer-motion/types/gestures/use-hover-gesture";
// import useState;
import ItemTitle from "../ItemTitle/ItemTitle";


function LetterI (props){
    // const [vis, setVis] = useState(false)
    return(

        <div style={{maxHeight: '100vh', minHeight: '50vh'}}>
            <div className={`${styles.leftShape} ${styles.shps}`}>

                <ItemTitle infoID={`${props.leftInfoID}`} title={`${props.leftText}`}/>

            </div>
            <div className={`${styles.rightShape} ${styles.shps}`}>
                <ItemTitle infoID={`${props.rightInfoID}`} title={`${props.rightText}`}/>

            </div>

        </div>
    );
}

LetterI.propTypes={
    leftText: PropTypes.string,
    rightText: PropTypes.string,
    leftInfoID: PropTypes.string,
    rightInfoID: PropTypes.string
};

export default LetterI;
