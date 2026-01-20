import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Saad Dental Studio',
    description: 'Modern, calm dental care experience',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
