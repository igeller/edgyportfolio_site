import React, {useState} from "react";
import PropTypes from 'prop-types';
import {motion} from "framer-motion";
import styles from './ItemTitle.module.scss';
import Fade from "react-reveal/Fade";



function ItemTitle (props) {
    const [visible, setVis] = useState(false);

    //listen for key presses and only close if the div is open
    // window.onkeydown = (e) =>{
    //     console.log(e)
    //     if(e.code === "Escape" && visible) {
    //         setVis(!visible)
    //     }
    // }


        return (
            <>
                <motion.div className={`${styles.txtHolder}`}
                            whileHover={{
                                scale: 1.1
                            }}
                            whileTap={{scale: 0.9}}
                            onClick={() => setVis(!visible)}

                >


                    <div className={`${styles.txt}`}>
                        {props.title}

                    </div>
                </motion.div>

                <Fade top left when={visible}>
                    <div
                        id={`modal${props.infoID}`}
                        className={`${styles.infoDivBackground} ${visible ? styles.showMod: null}`}
                        onClick={()=>setVis(!visible)}
                    >

                        <div className={`${styles.infoDiv}`}>
                            howdy
                        </div>
                    </div>
                </Fade>

            </>


        );

};

ItemTitle.propTypes={
   infoID: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default ItemTitle;
