import "@/styles/globals.css";
import "@/styles/fonts.css";
import SideBar from '@/components/common/SideBar';  // SideBar 컴포넌트 임포트

export const metadata = {
    title: "TEAM.dot: Word Wise Web",
    description: "TEAM.dot: Word Wise Web",
};

export default function WordMatchLayout({ children }) {
    return (
        <>
                <div style={{ display: 'flex', flex: '1' }}>  {/* Sidebar 본문나란히 배치 */}
                    <SideBar />
                    <main style={{ flex: '1', padding: '0px' }}>
                        {children}
                    </main>
                </div>
        </>
    );
}
