import Rect from 'react';
import PropTypes from 'prop-types';
import styles from "./BottomRightTriangle.module.scss";
import React, {useEffect} from "react";
import InstanceTitle from "../InstanceModal/InstanceModal";
const ReactFitText = require('react-fittext');



function BottomRightTriangle(props){


    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "https://cdn.jsdelivr.net/npm/d3plus@2";
    //     script.async = true;
    //     const script2 = document.createElement('script');
    //     script2.src = "https://d3js.org/d3.v6.min.js";
    //     script2.async = true;
    //
    //     document.body.appendChild(script2);
    //     document.body.appendChild(script);
    //     return () => {
    //         document.body.removeChild(script);
    //         document.body.removeChild(script2);
    //
    //     }
    //
    // }, []);
    //



    return(
        //creatting svg paths so that you are ready to implement the svg morph animations currently just going to place text and open. clip-path no good bc modal willnot open all the way.
            <div className={`${styles.shps} ${props.version == 1 ? styles.v1Left: styles.v2Left}`}>
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path fill={"green"} d="M0,100 L 100,100 100,0 Z" vectorEffect="non-scaling-stroke"/>


                </svg>

                <InstanceTitle
                    instanceTitleStyles={{width: '40%', height: '20vh', position: 'absolute', bottom: '0vh', right: '0vh', margin: '5vmin', backgroundColor: 'pink'}}
                    title={`Is this working?`}
                    instanceModalID={props.instanceModalID}/>
            </div>


    );
};

BottomRightTriangle.propTypes={
    color: PropTypes.string,
    instanceModalID: PropTypes.string.isRequired
}

export default BottomRightTriangle;
