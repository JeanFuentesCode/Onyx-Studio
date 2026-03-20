import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ScanPro - Modern Barcode & QR Scanner',
  description: 'Fast, secure, and professional scanning tool with AI-powered product insights.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col overflow-x-hidden">
        <main className="flex-1 flex flex-col pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}