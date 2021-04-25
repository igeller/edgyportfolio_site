import styles from '../styles/Home.module.css'
import React from "react";
import LetterZ from '../components/LetterZ/LetterZ'
import LetterI from "../components/LetterI/LetterI";
import LetterY from "../components/LetterY/LetterY";
import TopRightTriangle from "../components/TopRightTriangle/TopRightTriangle";
import BottomRightTriangle from "../components/BottomRightTriangle/BottomRightTriangle";
import Shape from "../components/Shape/Shape";
import {Container} from "@material-ui/core";
import {jobs} from '../constants/jobs'
const ReactFitText = require('react-fittext');
import {Textfit} from 'react-textfit';
import Bounce from "react-reveal/Bounce";



export default function Home(){
    const heyyy={
        title: 'sdfsd',
        oneLiner: 'sdf',
        details: 'sdfsd'
    }

    const txtStyle ={
        width: '40%', height: '20vh', position: 'absolute', bottom: '0vh', left: '0vh', margin: '5vmin', backgroundColor: 'pink'
    }

    const topTriSty ={
        width: '40%', height: '20vh', position: 'absolute', top: '0%', left: '0vh', margin: '5vmin', backgroundColor: 'pink'
    }

    const bottomTriSty ={
        width: '40%', height: '20vh', position: 'absolute', bottom: '0%', right: '0vh', margin: '5vmin', backgroundColor: 'pink'
    }

    const usideTri ={
        width: '40%', height: '10vh', position: 'absolute', top: '0%', left: '0',
        right: '0', margin: '5vmin auto', backgroundColor: 'red'
    }

    const pink= '#FC6595';
    const blue= '#25B1BC';
    const green= '#58EDCD';
    const yellow= '#FFDD15';
    const purple= '#371FAD';
    const red= '#E52D35';
    const white= '#FFFFFF';

  return (



    <div className={`${styles.container} m-5`}>
        <div className={`mb-5`}>
            <img className={`${styles.logoImg}`} width={"50%"}/>
            <Bounce>
                <h1>Howdy, I'm Izzy Geller!</h1>
            </Bounce>

            <h6 className={`mt-3`}>I am a software engineer with passions for (web-dev, mobile, details, colorful design, sharks!!! animated changing adjective)</h6>
        </div>
        {/*<LetterI*/}
        {/*    leftText={"asdkjhfiusfhiasudhfisadhfishdifhu"}*/}
        {/*    rightText={"asdkjhfiusfhiasudhfisadhfishdifhu"}*/}
        {/*    leftInfoID={'leftI'}*/}
        {/*rightInfoID={`leg3`}/>*/}
        {/*<LetterI*/}
        {/*    leftText={"asdkjhfiusfhiasudhfisadhfishdifhu"}*/}
        {/*    rightText={"asdkjhfiusfhiasudhfisadhfishdifhu"}*/}
        {/*    leftInfoID={'left2'}/>*/}
        <h1>Work</h1>
        <div
            style={{display: `grid`,
                gridTemplateColumns: `repeat(2, 50%)`,
            }}
        >
            {/*<section style={{display: `inline-flex`}}>*/}
                <Shape
                    instanceInformation={jobs["0"]}
                    shapeType={'rectangle'}
                    instanceModalID={`lP1`}
                    shapeBGColor={pink}
                    shapeContainerWidth={'100%'}
                    shapeContainerHeight={'fit-content'}
                    textStyles={txtStyle}
                    shapePosition={{position: 'relative', top: '0px', left: '0px'}}
                />
                <Shape
                    instanceInformation={jobs["1"]}
                    shapeType={`rectangle`}
                    instanceModalID={`lP1`}
                    shapeBGColor={blue}
                    shapeContainerWidth={'100%'}
                    shapeContainerHeight={'fit-content'}
                    textStyles={txtStyle}
                    shapePosition={{position: 'relative', top: `0px`, left: '0%'}}
                />
            <section style={{gridColumn: `1/3`, gridRow: `2/3`}}>
                <Shape
                    instanceInformation={jobs["1"]}
                    shapeType={`topRTriangle`}
                    instanceModalID={`lP1`}
                    shapeBGColor={purple}
                    shapeContainerWidth={'100%'}
                    shapeContainerHeight={'fit-content'}
                    textStyles={topTriSty}
                    shapePosition={{ position: 'relative', top: '0px', left: '0px', gridColumn: `1/2`, gridRow: `2/3`}}
                    shapeTitlePosition={{position: `absolute`, top: `20%`, left: `0px`, margin: `auto 5vw`, textAlign: `left`, color: white}}
                />

                <Shape
                    instanceInformation={jobs["2"]}
                    shapeType={`bottomRTriangle`}
                    instanceModalID={`lP1`}
                    shapeBGColor={red}
                    shapeContainerWidth={'100%'}
                    shapeContainerHeight={'50%'}
                    textStyles={bottomTriSty}
                    shapePosition={{position: 'relative', top:'100%', left: '0px'}}
                    shapeTitlePosition={{position: `absolute`, bottom: `20%`, right: `0px`, margin: `auto 5vw`, textAlign: `right`}}
                />
            </section>

            {/*</section>*/}
        </div>


{/*      <h1>Coursework</h1>*/}
{/*<section style={{display: `inline-flex`}}>*/}
{/*    <Shape*/}
{/*        instanceInformation={jobs["3"]}        shapeType={`rectangle`}*/}
{/*        instanceModalID={`lP1`}*/}
{/*        shapeBGColor={yellow}*/}
{/*        shapeContainerWidth={'100%'}*/}
{/*        shapeContainerHeight={'fit-content'}*/}
{/*        textStyles={txtStyle}*/}
{/*        shapePosition={{position: 'relative', top: '0px', left: '0px'}}*/}
{/*    />*/}
{/*    <Shape*/}
{/*        instanceInformation={jobs["3"]}        shapeType={`topRTriangle`}*/}
{/*        instanceModalID={`lP1`}*/}
{/*        shapeBGColor={purple}*/}
{/*        shapeContainerWidth={'100%'}*/}
{/*        shapeContainerHeight={'fit-content'}*/}
{/*        textStyles={topTriSty}*/}
{/*        shapePosition={{position: 'relative', top: '0px', left: '0px'}}*/}
{/*        shapeTitlePosition={{position: `absolute`, top: `20%`, left: `0px`, margin: `auto 5vw`, textAlign: `left`}}*/}
{/*    />*/}

{/*</section>*/}
{/*        <h1>selected work</h1>*/}
{/*        <section >*/}
{/*            <section style={{display: `inline-flex`}}>*/}
{/*                <Shape*/}
{/*                    instanceInformation={jobs["3"]}                    shapeType={`bottomRTriangle`}*/}
{/*                    instanceModalID={`lP1`}*/}
{/*                    shapeBGColor={red}*/}
{/*                    shapeContainerWidth={'100%'}*/}
{/*                    shapeContainerHeight={'fit-content'}*/}
{/*                    textStyles={bottomTriSty}*/}
{/*                    shapePosition={{position: 'relative', bottom:'0%', left: '0px'}}*/}
{/*                    shapeTitlePosition={{position: `absolute`, bottom: `20%`, right: `0px`, margin: `auto 5vw`, textAlign: `right`}}*/}
{/*                />*/}

{/*                <Shape*/}
{/*                    instanceInformation={jobs["3"]}                    shapeType={`leftParallelogram`}*/}
{/*                    instanceModalID={`lP1`}*/}
{/*                    shapeBGColor={green}*/}
{/*                    shapeContainerWidth={'100%'}*/}
{/*                    shapeContainerHeight={'fit-content'}*/}
{/*                    textStyles={txtStyle}*/}
{/*                    shapePosition={{position: 'relative', top: '0%', left: '0px'}}*/}
{/*                />*/}

{/*            </section>*/}
{/*            <section style={{display: `inline-flex`}}>*/}

{/*                <Shape*/}
{/*                    instanceInformation={jobs["3"]}                    shapeType={`leftParallelogram`}*/}
{/*                    instanceModalID={`lP1`}*/}
{/*                    shapeBGColor={green}*/}
{/*                    shapeContainerWidth={'100%'}*/}
{/*                    shapeContainerHeight={'fit-content'}*/}
{/*                    textStyles={txtStyle}*/}
{/*                    shapePosition={{position: 'relative', top: '0%', left: '0px'}}*/}
{/*                />*/}
{/*                /!*<Shape*!/*/}
{/*                /!*    instanceInformation={heyyy}*!/*/}
{/*                /!*    shapeType={"upsideDownTriangle"}*!/*/}
{/*                /!*    instanceModalID={`uTri`}*!/*/}
{/*                /!*    shapeBGColor={'green'}*!/*/}
{/*                /!*    shapeContainerWidth={'100%'}*!/*/}
{/*                /!*    shapeContainerHeight={'75vh'}*!/*/}
{/*                /!*    textStyles={usideTri}*!/*/}
{/*                /!*    shapePosition={{position: 'relative', top: '0', left: '0px'}}*!/*/}
{/*                <Shape*/}
{/*                    instanceInformation={jobs["3"]}                    shapeType={`rightParallelogram`}*/}
{/*                    instanceModalID={`lP1`}*/}
{/*                    shapeBGColor={'yellow'}*/}
{/*                    shapeContainerWidth={'100%'}*/}
{/*                    shapeContainerHeight={'fit-content'}*/}
{/*                    textStyles={txtStyle}*/}
{/*                    shapePosition={{position: 'relative', top: '0%', left: '0%'}}*/}
{/*                    instance*/}

{/*                />*/}
{/*            </section>*/}

{/*        </section>*/}






{/*        /!* <LetterZ leftText={'asdfs'} rightText={'asdf'} version={1}/>*!/*/}
{/*        /!*<LetterZ leftText={'asdfs'} rightText={'asdf'} version={2}/>*!/*/}
{/*        /!*<LetterY/>*!/*/}
    </div>
  );
}
