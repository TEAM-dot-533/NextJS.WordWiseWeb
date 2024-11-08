import "@/styles/globals.css";
import "@/styles/fonts.css";
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Head from 'next/head';

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <Head>
                <title>TEAM.dot: Word Wise Web</title>
                <meta name="description" content="TEAM.dot: Word Wise Web" />
            </Head>
            <body className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1 p-0">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
