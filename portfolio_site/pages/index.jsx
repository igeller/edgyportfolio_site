import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Container, Accordion, AccordionSummary, AccordionDetails, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ImageHeader from "../components/ImageHeader/ImageHeader";
import {Provider} from "react-redux";
import React from "react";
import LetterZ from '../components/LetterZ/LetterZ'
import LetterI from "../components/LetterI/LetterI";
import LetterY from "../components/LetterY/LetterY";


export default function Home() {
  return (

    <div className={styles.container}>
            <LetterI leftText={"asdkjhfiusfhiasudhfisadhfishdifhu"} rightText={"asdkjhfiusfhiasudhfisadhfishdifhu"}/>
            <LetterZ/>
            <LetterZ/>
            <LetterY/>



        {/*<LetterY></LetterY>*/}
      {/*<ImageHeader/>*/}

      {/*<Accordion>*/}
      {/*  <AccordionSummary*/}
      {/*      expandIcon={<ExpandMoreIcon />}*/}
      {/*      aria-controls="panel1a-content"*/}
      {/*      id="panel1a-header"*/}
      {/*  >*/}
      {/*    <Typography className={''}>Accordion 1</Typography>*/}
      {/*  </AccordionSummary>*/}
      {/*  <AccordionDetails>*/}
      {/*    <Typography>*/}
      {/*      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,*/}
      {/*      sit amet blandit leo lobortis eget.*/}
      {/*    </Typography>*/}
      {/*  </AccordionDetails>*/}
      {/*</Accordion>*/}

      {/*<Head>*/}
      {/*  <title>Create Next App</title>*/}
      {/*  <link rel="icon" href="/favicon.ico" />*/}
      {/*</Head>*/}

      {/*<main className={styles.main}>*/}
      {/*  <h1 className={styles.title}>*/}
      {/*    Welcome to <a href="https://nextjs.org">Next.js!</a>*/}
      {/*  </h1>*/}

      {/*  <p className={styles.description}>*/}
      {/*    Get started by editing{' '}*/}
      {/*    <code className={styles.code}>pages/index.jsx</code>*/}
      {/*  </p>*/}

      {/*  <div className={styles.grid}>*/}
      {/*    <a href="https://nextjs.org/docs" className={styles.card}>*/}
      {/*      <h3>Documentation &rarr;</h3>*/}
      {/*      <p>Find in-depth information about Next.js features and API.</p>*/}
      {/*    </a>*/}

      {/*    <a href="https://nextjs.org/learn" className={styles.card}>*/}
      {/*      <h3>Learn &rarr;</h3>*/}
      {/*      <p>Learn about Next.js in an interactive course with quizzes!</p>*/}
      {/*    </a>*/}

      {/*    <a*/}
      {/*      href="https://github.com/vercel/next.js/tree/master/examples"*/}
      {/*      className={styles.card}*/}
      {/*    >*/}
      {/*      <h3>Examples &rarr;</h3>*/}
      {/*      <p>Discover and deploy boilerplate example Next.js projects.</p>*/}
      {/*    </a>*/}

      {/*    <a*/}
      {/*      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*      className={styles.card}*/}
      {/*    >*/}
      {/*      <h3>Deploy &rarr;</h3>*/}
      {/*      <p>*/}
      {/*        Instantly deploy your Next.js site to a public URL with Vercel.*/}
      {/*      </p>*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</main>*/}


    </div>
  );
}
