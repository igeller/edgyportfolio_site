import Rect, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from "./Shape.module.scss";
import React, {useEffect} from "react";
import InstanceModal from "../InstanceModal/InstanceModal";
const ReactFitText = require('react-fittext');
import { motion } from "framer-motion"
import Fade from "react-reveal/Fade";


function Shape(props){
    const [visible, setVis] = useState(false);

    //the shapes will fill 100% ofavailable container soo if the width and height of container changes so do the skinniness and fatness of the shapes
    let shapeType={
        path:{
            rectangle: `M0,0 L 100,0 100,100 0,100`,
            topRTriangle: `M0,100 L 0,0 100,0 Z`,
            bottomRTriangle: `M0,100 L 100,100 100,0 Z`,
            leftParallelogram: `M0,0 L 0,100 100,100 100,50 Z`,
            rightParallelogram: `M0,100 L 100,100 100,0 0,50 Z`,
            upsideDownTriangle: `M0,0 L 100,0 50,50 Z`,
        },
        polygon:{
            rectangle: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
            topRTriangle: `polygon(0 100%, 0 0, 100% 0)`,
            bottomRTriangle: `polygon(0 100%, 100% 100%, 100% 0)`,
            leftParallelogram: `polygon(0 0, 0 100%, 100% 100%, 100% 50%)`,
            rightParallelogram: `polygon(0 100%, 100% 100%, 100% 0, 0 50%)`,
            upsideDownTriangle: `polygon(0 0, 100% 0, 50% 50%)`
        }

    }

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
        <>

            <motion.div
                whileHover={{ scale: 1.05, zIndex: 999}}
                whileTap={{scale: 0.9}}
                onClick={() => setVis(!visible)}

                className={`${styles.shps} ${props.version == 1 ? styles.v1Left: styles.v2Left}`}
                style={{
                    ...props.shapePosition,
                    width: `${props.shapeContainerWidth}`,
                    height: `${props.shapeContainerHeight}`,
                    clipPath: `${shapeType.polygon[props.shapeType]}`
                }}>
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"

                >
                    <path
                        fill={`${props.shapeBGColor}`}
                        d={shapeType.path[props.shapeType]}
                        vectorEffect="non-scaling-stroke"
                        preserveAspectRatio="xMidYMid meet"
                    />
                </svg>

                <div
                style={props.shapeTitlePosition}>hey i am text</div>

                {/*<InstanceModal*/}
                {/*    instanceModalContent={props.instanceInformation}*/}
                {/*    instanceTitleStyles={props.textStyles}*/}
                {/*    instanceModalID={props.instanceModalID}/>*/}
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
                        <h1>{props.instanceInformation.title}</h1>
                        <h4>{props.instanceInformation.oneLiner}</h4>
                        <p>{props.instanceInformation.details}</p>
                    </div>
                </div>
            </Fade>
</>

    );
};

Shape.propTypes={
    textColor: PropTypes.string,
    shapeContainerWidth: PropTypes.string,
    shapeContainerHeight: PropTypes.string,

    instanceInformation: PropTypes.object.isRequired,
    instanceModalID: PropTypes.string.isRequired,
    shapeBGColor: PropTypes.string.isRequired,
    shapeType: PropTypes.oneOf(['rectangle', 'topRightTriangle', 'bottomRightTriangle', 'leftParallelogram', 'rightParallelogram', 'upsideDownTriangle']).isRequired,
    shapePosition: PropTypes.object.isRequired,
    shapeTitlePosition: PropTypes.object,
    textStyles: PropTypes.object.isRequired
}

Shape.defaultProps = {
    shapeContainerWidth: '100%',
    shapeContainerHeight: '100%',
    instanceTitle: 'Name of Thing',
    instanceOneLiner: 'One line about the named thing',
    instanceDetails: 'any additional details about the named thing to be seen in modal',
    shapeTitlePosition: {position: `absolute`, top: `50%`, left: `0px`, right: `0px`, margin: `auto 2vh`, textAlign: `center`}
};

export default Shape;
