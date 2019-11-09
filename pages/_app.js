import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import {createGlobalStyle} from 'styled-components';

// Assets
import '../node_modules/modern-normalize/modern-normalize.css';
import OpenSansWoff from '../public/fonts/open-sans-v17-latin-regular.woff';
import OpenSansWoff2 from '../public/fonts/open-sans-v17-latin-regular.woff2';

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-display: fallback;
		src: local('Open Sans'), local('OpenSans-Regular'),
			url(${OpenSansWoff2}) format('woff2'),
			url(${OpenSansWoff}) format('woff');
	}

	body {
		font-family: 'Open Sans', arial, sans-serif;
		margin: auto;
		width: 100%;
		font-size: 16px;
		padding-top: 50px;
		padding-bottom: 100px;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeSpeed;
	}

	:focus {
		outline: none;
	}
`;

class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props;

		return (
			<>
				<GlobalStyle/>
				<Head>
					<title>Ship Classifier</title>
				</Head>
				<Component {...pageProps}/>
			</>
		);
	}
}

export default MyApp;
