import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { Backdrop, CircularProgress } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import Router from "next/router";
import 'bootstrap/dist/css/bootstrap.css';


import { Provider } from 'react-redux'
import { useStore } from '../store'
import ImageHeader from "../components/ImageHeader/ImageHeader";

export default function MyApp({Component, pageProps}) {
  // const { Component, pageProps } = props;
const store = useStore(pageProps.intialReduxState);
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
      <>

            <Provider store={store}>
              <React.Fragment>
                <Head>
                  <title>My page</title>
                  <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                </Head>
                <ThemeProvider theme={theme}>
                  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                  <header>
                    <script src='https://d3plus.org/js/d3.min.js'></script>
                    <script src='https://d3plus.org/js/d3plus.min.js'></script>
                  </header>
                  <CssBaseline />

                  <Component {...pageProps} />
                </ThemeProvider>
              </React.Fragment>
            </Provider>
      </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
