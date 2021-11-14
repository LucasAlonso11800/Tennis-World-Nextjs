import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar/Navbar';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    )
};