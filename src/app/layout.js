import "@/styles/globals.css";
import "@/styles/fonts.css";
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';

export const metadata = {
    title: "TEAM.dot: Word Wise Web",
    description: "TEAM.dot: Word Wise Web",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <main style={{ flex: '1', padding: '20px' }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}