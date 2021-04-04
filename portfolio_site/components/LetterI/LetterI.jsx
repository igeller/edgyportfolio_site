import {Box} from "@material-ui/core";
import styles from "./LetterI.module.scss"
import React from "react";
import PropTypes from 'prop-types';

function LetterI (props){
    return(

        <Box style={{maxHeight: '100vh', minHeight: '100vh'}} mx={'auto'}>
            <div className={`${styles.leftShape}`}>
                <div className={`${styles.txt} m-5 mx-auto`} >
                    `${props.leftText}`
                </div>
            </div>
            <div className={`${styles.rightShape}`}>
                <div className={`${styles.txt} m-5 mx-auto`} >
                    `${props.rightText}`
                </div>

            </div>

        </Box>
    );
}

LetterI.propTypes={
    leftText: PropTypes.string,
    rightText: PropTypes.string
};

export default LetterI;
