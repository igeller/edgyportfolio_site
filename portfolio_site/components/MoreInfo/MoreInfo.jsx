import React, {KeyboardEvent} from "react";
import PropTypes from 'prop-types';
import styles from './MoreInfo.module.scss';
import {event} from "next/dist/build/output/log";
// import {hide} from "bootstrap/js/src/util/scrollbar";
// import {info} from "next/dist/build/output/log";

function MoreInfo(props){
    function closeInfo(){
        document.getElementById(props.infoID).style.visibility = "hidden";
    };




    return(
        <div id={`${props.infoID}`}
             className={`${styles.infoDivBackground}`}
             onClick={closeInfo}
        >
            <div  className={`${styles.infoDiv}`}>
                howdy
            </div>
        </div>
    );


    MoreInfo.propTypes={
        infoID: PropTypes.string.isRequired
    }
}


export default MoreInfo;
