import {Box} from "@material-ui/core";
import React from "react";
import PropTypes from 'prop-types';
import {motion} from "framer-motion";
import MoreInfo from "../MoreInfo/MoreInfo";

import styles from './ItemTitle.module.scss';


function ItemTitle (props) {
    let showInfo = id => e => {
        document.getElementById(id).style.visibility = "visible";
        document.onkeydown = (ev) => {
            if(ev.code === "Escape") {
                document.getElementById(id).style.visibility = "hidden";
            }
        };
    }


        return (

            <motion.div className={`${styles.txtHolder}`}
                        whileHover={{
                            scale: 1.2
                        }}
                        onTapStart={showInfo(`${props.infoID}`)}
            >
                <div className={`${styles.txt}`}>
                    {props.title}

                </div>


            </motion.div>
        );

}

ItemTitle.propTypes={
   infoID: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default ItemTitle;
