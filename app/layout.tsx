import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// rootlayout will have children with the type of "React.ReactNode" and you just render them 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
