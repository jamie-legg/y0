import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import { ThemeProvider } from "next-themes";
import Head from 'next/head';
import App from "next/app";
import { createContext } from "react";
import { getYapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/yapi";
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export const GlobalContext = createContext({});

function Y({ Component, pageProps, getGlobal }) {
  console.log(useRouter().asPath)
  const global = getGlobal && getGlobal();
  

  
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getYapiMedia(global?.favicon)} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
      </Head>
      <ThemeProvider attribute="class">
        <GlobalContext.Provider value={global}>
          <Layout user={'jamie'}>
            <Component {...pageProps} />
          </Layout>
        </GlobalContext.Provider>
      </ThemeProvider>
    </>
  )
}

Y.getInitialProps = async (appContext) => {
  const global = await fetchAPI("/global");
  return {
    // workaround cause getServerSideProps is not possible in _app
    getGlobal() {
      return global;
    }
  }
}


export default Y;


