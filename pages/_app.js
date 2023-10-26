import Head from 'next/head';

<<<<<<< HEAD
import '../styles/globals.css';
import Layout from '../components/layout/layout';
=======
import Layout from '../components/layout/layout';
import '../styles/globals.css';
>>>>>>> my-local-branch

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
<<<<<<< HEAD
        <meta name='viewport' content='width=device-width, initial-scale=1' />
=======
        <title>Next Events</title>
        <meta name='description' content='NextJS Events' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
>>>>>>> my-local-branch
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
