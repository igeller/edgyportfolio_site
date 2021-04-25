import React, {useState} from "react";
import PropTypes from 'prop-types';
import {motion} from "framer-motion";
import styles from './InstanceModal.module.scss';
import Fade from "react-reveal/Fade";



function InstanceModal(props){
    const [visible, setVis] = useState(false);

    //this could work if this goes in a useeffect div
    //listen for key presses and only close if the div is open
    // window.onkeydown = (e) =>{
    //     console.log(e)
    //     if(e.code === "Escape" && visible) {
    //         setVis(!visible)
    //     }
    // }




    return (
        <>

            <motion.div className={``}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        onClick={() => setVis(!visible)}
                        style={props.instanceTitleStyles}
            >


                <div className={``}>
                    {props.instanceModalContent.title}

                </div>
            </motion.div>

            <Fade top left when={visible}>
                <div
                    id={`modal${props.instanceModalID}`}
                    className={`${styles.infoDivBackground} ${visible ? styles.showMod: null}`}
                    onClick={()=>setVis(!visible)}
                    //the below style can be applied by using the same backgoround color as the triangle.... just pass it!
                    // style={{backgroundColor: `${props.instanceTitleStyles.backgroundColor}`}}
                >

                    <div className={`${styles.infoDiv} p-5`}>
                        <h1>{props.instanceModalContent.title}</h1>
                        <h4>{props.instanceModalContent.oneLiner}</h4>
                        <p>{props.instanceModalContent.details}</p>
                    </div>
                </div>
            </Fade>
        </>


    );

}

InstanceModal.propTypes={
    instanceTitleStyles: PropTypes.object.isRequired,
    instanceModalID: PropTypes.string.isRequired,
    instanceModalContent: PropTypes.object.isRequired
};

export default InstanceModal;
