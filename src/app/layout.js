import { Inter } from "next/font/google";
import { AuthProvider } from "@/components/auth/AuthProvider";
import Header from "@/components/ui/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FitStepFlow - Your Fitness Journey Starts Here",
  description:
    "Transform your fitness journey with personalized workouts, expert guidance, and a supportive community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className={`${inter.className} h-full`}>
        <AuthProvider>
          <div className="min-h-screen">
            <Header />
            <main>{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
