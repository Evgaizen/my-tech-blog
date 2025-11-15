import { Avatar } from "./components/Avatar";
import { Navbar } from "./components/Navbar";
import "./globals.css";

const LINKS = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Blog",
    url: "/blog",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <main className="flex flex-col justify-center items-center">
          <Navbar
            links={LINKS}
            avatar={
              <Avatar
                href="/"
                imageUrl="https://avatars.githubusercontent.com/u/49843824"
                altText="Nikita Ivanov"
              />
            }
          />
          {children}
        </main>
      </body>
    </html>
  );
}
