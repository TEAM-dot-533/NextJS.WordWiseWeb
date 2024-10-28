import "@/styles/globals.css";
import "@/styles/fonts.css";
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export const metadata = {
    title: "TEAM.dot: Word Wise Web",
    description: "TEAM.dot: Word Wise Web",
};

export default function WordbookLayout({ children }) {
    return (
        <html lang="ko">
            <body className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow p-5">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
