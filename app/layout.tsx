import { Navbar } from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <main className="flex flex-col justify-center items-center">
          <Navbar />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
