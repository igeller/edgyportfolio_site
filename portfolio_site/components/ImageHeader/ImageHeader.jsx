import React from 'react';
// import PropTypes from 'prop-types';
// import Head from 'next/head';
// import { ThemeProvider } from '@material-ui/core/styles';
// import { Backdrop, CircularProgress } from '@material-ui/core';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import theme from '../theme';
// import Router from "next/router";
import { spacing } from '@material-ui/system';
import { Box } from '@material-ui/core';
// const ReactFitText = require('react-fittext');



import styles from './ImageHeader.module.scss'


export default function ImageHeader({Component, pageProps}) {
        return(
            <div className={`${styles.flt}`}>
                <Box className={`${styles.leftI}`}>
                    left i
                </Box>
                <Box className={`${styles.rightI}`}>
                    right i
                </Box>


                <object data="https://upload.wikimedia.org/wikipedia/commons/3/3e/Black_triangle_with_thick_white_border.svg" width="300" height="200"
                style={{color: 'red'}} className={`${styles.obj}`}
                >
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </object>


            </div>

        );

}

