import styles from '../styles/Home.module.css'
import React from "react";
import LetterZ from '../components/LetterZ/LetterZ'
import LetterI from "../components/LetterI/LetterI";
import LetterY from "../components/LetterY/LetterY";

export default function Home(){
  return (

    <div className={`${styles.container} mx-5`}>
        <LetterI
            leftText={"asdkjhfiusfhiasudhfisadhfishdifhu"}
            rightText={"asdkjhfiusfhiasudhfisadhfishdifhu"}
            leftInfoID={'leftI'}/>
         <LetterZ leftText={'asdfs'} rightText={'asdf'} version={1}/>
        <LetterZ leftText={'asdfs'} rightText={'asdf'} version={2}/>
        <LetterY/>
    </div>
  );
}
