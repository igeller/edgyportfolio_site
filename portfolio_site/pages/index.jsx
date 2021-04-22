import styles from '../styles/Home.module.css'
import React from "react";
import LetterZ from '../components/LetterZ/LetterZ'
import LetterI from "../components/LetterI/LetterI";
import LetterY from "../components/LetterY/LetterY";
import TopRightTriangle from "../components/TopRightTriangle/TopRightTriangle";
import BottomRightTriangle from "../components/BottomRightTriangle/BottomRightTriangle";
import Shape from "../components/Shape/Shape";
import {Container} from "@material-ui/core";

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



    <div className={`${styles.container} mx-5`}>
        <Container>is this working</Container>
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
        <section style={{display: `inline-flex`}}>
            <Shape
                instanceInformation={heyyy}
                shapeType={'rectangle'}
                instanceModalID={`lP1`}
                shapeBGColor={pink}
                shapeContainerWidth={'50%'}
                shapeContainerHeight={'50vh'}
                textStyles={txtStyle}
                shapePosition={{position: 'relative', top: '0px', left: '0px'}}
            />
            <Shape
                instanceInformation={heyyy}
                shapeType={`rectangle`}
                instanceModalID={`lP1`}
                shapeBGColor={blue}
                shapeContainerWidth={'50%'}
                shapeContainerHeight={'50vh'}
                textStyles={txtStyle}
                shapePosition={{position: 'relative', top: `0px`, left: '0%'}}
            />
        </section>

      <h1>Coursework</h1>
<section style={{display: `inline-flex`}}>
    <Shape
        instanceInformation={heyyy}
        shapeType={`rectangle`}
        instanceModalID={`lP1`}
        shapeBGColor={yellow}
        shapeContainerWidth={'100%'}
        shapeContainerHeight={'50vh'}
        textStyles={txtStyle}
        shapePosition={{position: 'relative', top: '0px', left: '0px'}}
    />
    <Shape
        instanceInformation={heyyy}
        shapeType={`topRTriangle`}
        instanceModalID={`lP1`}
        shapeBGColor={purple}
        shapeContainerWidth={'100%'}
        shapeContainerHeight={'50vh'}
        textStyles={topTriSty}
        shapePosition={{position: 'relative', top: '0px', left: '0px'}}
        shapeTitlePosition={{position: `absolute`, top: `20%`, left: `0px`, margin: `auto 5vw`, textAlign: `left`}}
    />

</section>
        <h1>selected work</h1>
        <section >
            <section style={{display: `inline-flex`}}>
                <Shape
                    instanceInformation={heyyy}
                    shapeType={`bottomRTriangle`}
                    instanceModalID={`lP1`}
                    shapeBGColor={red}
                    shapeContainerWidth={'100%'}
                    shapeContainerHeight={'75vh'}
                    textStyles={bottomTriSty}
                    shapePosition={{position: 'relative', bottom:'0%', left: '0px'}}
                    shapeTitlePosition={{position: `absolute`, bottom: `20%`, right: `0px`, margin: `auto 5vw`, textAlign: `right`}}
                />

                <Shape
                    instanceInformation={heyyy}
                    shapeType={`leftParallelogram`}
                    instanceModalID={`lP1`}
                    shapeBGColor={green}
                    shapeContainerWidth={'100%'}
                    shapeContainerHeight={'75vh'}
                    textStyles={txtStyle}
                    shapePosition={{position: 'relative', top: '0%', left: '0px'}}
                />

            </section>
            <section style={{display: `inline-flex`}}>

                <Shape
                    instanceInformation={heyyy}
                    shapeType={`leftParallelogram`}
                    instanceModalID={`lP1`}
                    shapeBGColor={green}
                    shapeContainerWidth={'100%'}
                    shapeContainerHeight={'75vh'}
                    textStyles={txtStyle}
                    shapePosition={{position: 'relative', top: '0%', left: '0px'}}
                />
                {/*<Shape*/}
                {/*    instanceInformation={heyyy}*/}
                {/*    shapeType={"upsideDownTriangle"}*/}
                {/*    instanceModalID={`uTri`}*/}
                {/*    shapeBGColor={'green'}*/}
                {/*    shapeContainerWidth={'100%'}*/}
                {/*    shapeContainerHeight={'75vh'}*/}
                {/*    textStyles={usideTri}*/}
                {/*    shapePosition={{position: 'relative', top: '0', left: '0px'}}*/}
                {/*/>*/}
                <Shape
                    instanceInformation={heyyy}
                    shapeType={`rightParallelogram`}
                    instanceModalID={`lP1`}
                    shapeBGColor={'yellow'}
                    shapeContainerWidth={'100%'}
                    shapeContainerHeight={'75vh'}
                    textStyles={txtStyle}
                    shapePosition={{position: 'relative', top: '0%', left: '0%'}}
                    instance

                />
            </section>

        </section>






        {/* <LetterZ leftText={'asdfs'} rightText={'asdf'} version={1}/>*/}
        {/*<LetterZ leftText={'asdfs'} rightText={'asdf'} version={2}/>*/}
        {/*<LetterY/>*/}
    </div>
  );
}
