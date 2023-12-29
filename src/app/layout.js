import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/siderbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test Case for Crack The code",
  description: "Task admin management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
