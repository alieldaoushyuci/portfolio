import './globals.css';
import HomePage from './HomePage';

export const metadata = {
  title: 'Ali Eldaoushy — Portfolio',
  description: 'Projects, Experience, and contact information'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HomePage>{children}</HomePage>
      </body>
    </html>
  );
}
