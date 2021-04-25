import Rect from 'react';
import PropTypes from 'prop-types';
import styles from "./TopRightTriangle.module.scss";
import React, {useEffect} from "react";
import ItemTitle from "../ItemTitle/ItemTitle";
import InstanceTitle from "../InstanceModal/InstanceModal";
const ReactFitText = require('react-fittext');

//go back and add the reactfit text stuff and the morph svgs -- prolly make background part of modal the svg and then throw the div ontop like you did for the clicking section

function TopRightTriangle(props){
//for some reason the motion will not work on this one
    return(
        //creatting svg paths so that you are ready to implement the svg morph animations currently just going to place text and open. clip-path no good bc modal willnot open all the way.
            <div className={`${styles.shps}`}>
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" >
                    <path fill={"green"} d="M0,0 L 0,100 100,0 Z" vectorEffect="non-scaling-stroke"/>
                </svg>
                <InstanceTitle
                    instanceTitleStyles={{width: '40%', height: '20vh', position: 'absolute', margin: '5vmin', backgroundColor: 'pink', top: '0px', left: '0px'}}
                    title={`Is this working?`}
                    instanceModalID={props.instanceModalID}/>
            </div>


    );
};

TopRightTriangle.propTypes={
    color: PropTypes.string,
    instanceModalID: PropTypes.string
}

export default TopRightTriangle;
