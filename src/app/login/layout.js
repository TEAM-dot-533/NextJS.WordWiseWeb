import "@/styles/globals.css";
import "@/styles/fonts.css";
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    title: "TEAM.dot: Word Wise Web",
    description: "TEAM.dot: Word Wise Web",
};

export default function LoginLayout({ children }) {
    return (
        <html lang="ko">
            <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <main style={{ flex: '1', padding: '0px' }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
