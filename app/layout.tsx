import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import LenisProvider from '@/components/LenisProvider';
import PageLoader from '@/components/PageLoader';
import ScrollAnimations from '@/components/ScrollAnimations';

export const metadata: Metadata = {
    title: 'Daksh Mishra — CS Engineer & Builder',
    description: 'I build solutions that matter. CSE student at BML Munjal University, building AI tools, Android apps, and real-world software.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <PageLoader />
                <CustomCursor />
                <Navbar />
                <LenisProvider>
                    {children}
                </LenisProvider>
                <ScrollAnimations />
            </body>
        </html>
    );
}
