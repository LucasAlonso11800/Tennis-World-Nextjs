import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar/Navbar';
import '../styles/global.css';
import { GlobalProvider } from '../context/GlobalState';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GlobalProvider>
            <Navbar />
            <Component {...pageProps} />
        </GlobalProvider>
    )
};