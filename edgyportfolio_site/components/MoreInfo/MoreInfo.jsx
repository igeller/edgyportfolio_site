import React, {useCallback, useState} from "react";
import PropTypes from 'prop-types';
import styles from './MoreInfo.module.scss';
import {motion, AnimatePresence} from "framer-motion";
import Fade from 'react-reveal/Fade';
import {Animated} from "react-animated-css";



function MoreInfo(props) {
    let visSty = {};
    if(props.visible){
         visSty = {
            visibility: "visible"
        };
    }
    const[visible, setVis] = useState(props.visible)
    const handleDivDisplay =  useCallback(e => {
        console.log('$$$$$', e.target)
        console.log('&&&&&&', props.visible)
        setVis(!visible);

        props.visibilityChange(e.currentTarget.value);
    }, [props.visibilityChange])

    const g =(e) => {
        console.log('$$$$$', e.target.value)
        // props.visibilityChange(e.target.value);
    };
    return (
    <div>


    </div>



        // <ReactCSSTransitionGroup
        //     transitionName="example"
        //     transitionEnterTimeout={500}
        //     transitionLeaveTimeout={300}>
        //
        // </ReactCSSTransitionGroup>
        // <AnimatePresence initial={false}>
        //     {isVisible && (
        //         <motion.div id={`${props.infoID}`}
        //                     animate={{ x: 100 }}
        //                     transition={{ ease: "easeOut", duration: 50 }}
        //                     initial={false}
        //                     // animate={{opacity: 1}}
        //                     // transition={{duration: 10}}
        //                     variants={variants}
        //                     className={`${styles.infoDivBackground}`}
        //                     onClick={closeInfo}
        //                     exit={{opacity: 0}}
        //
        //         >
        //             <div  className={`${styles.infoDiv}`}>
        //                 howdy
        //             </div>
        //         </motion.div>
        //     )}
        // </AnimatePresence>


    );
}
;

MoreInfo.propTypes={
        id: PropTypes.string.isRequired,
        visibilityChange: PropTypes.func,
        visible: PropTypes.bool

}


export default MoreInfo;
