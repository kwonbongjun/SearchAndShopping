import '../styles/global.css' 
import Layout from '../components/layout'

import { wrapper } from "../store"; 
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.scss';
import SSRProvider from 'react-bootstrap/SSRProvider';

function MyApp({ Component, pageProps }) { 
    return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
    )
}
export default wrapper.withRedux(MyApp)
