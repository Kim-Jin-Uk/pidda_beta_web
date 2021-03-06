import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import '../styles/globals.scss'
import wrapper from '../store/configureStore';

const NodeBird = function ({ Component }) {
    return (
        <>
            <Head>
                <meta charSet={"utf-8"}/>
                <title>pida</title>
            </Head>
            <Component />
        </>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
