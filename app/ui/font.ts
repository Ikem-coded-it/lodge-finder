import { Inter, Open_Sans } from 'next/font/google';
 
export const inter = Inter({ 
  weight: ['400', '800'],
  subsets: ['latin'],
  variable: "--font-inter"
});
 
export const openSans = Open_Sans({
  weight: ['400', '800'],
  subsets: ['greek', 'latin', 'vietnamese', 'hebrew'],
  variable: "--font-open-sans"
});