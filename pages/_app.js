import '../styles/globals.css';
import Layout from '../components/Layout';
import CssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <CssBaseline />
      <Component {...pageProps} />
    </Layout>
  );
}
