import "@/styles/globals.css";
import "@/styles/fonts.css";

export const metadata = {
    title: "TEAM.dot: Word Wise Web",
    description: "TEAM.dot: Word Wise Web",
};

export default function LoginLayout({ children }) {
    return (
        <>
                <main style={{ flex: '1', padding: '0px' }}>
                    {children}
                </main>
        </>
    );
}
