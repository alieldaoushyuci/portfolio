import './globals.css';
import './styles/HomePage.css';
import PipelineBackground from '@/components/PipelineBackground';
import Header from './components/Header';

export const metadata = {
  title: "Ali Eldaoushy's Portfolio",
  description: 'Projects, Experience, and contact information',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PipelineBackground />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
