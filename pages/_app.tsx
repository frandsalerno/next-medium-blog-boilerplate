import App from 'next/app'
import Head from 'next/head';

import { Nav } from '../components/nav';
import { Footer } from '../components/footer';

import '../scss/main.scss';
import { API } from '../core';

const CustomApp = ({ Component, pageProps, categories }) => {
  return <>
    <Head>
      <title>Franco Salerno</title>
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700|Source+Sans+Pro:400,600,700" rel="stylesheet"></link>
    </Head>
    {!pageProps.error && <Nav categories={categories} />}
    <Component {...pageProps} />
    {!pageProps.error && <Footer />}
  </>;
};

CustomApp.getInitialProps = async context => {
  const apiRef = new API();
  const appProps = await App.getInitialProps(context);
  const categories = await apiRef.getCategories();
  return { ...appProps, categories };
}

export default CustomApp;
