import { Avatar } from "./components/Avatar";
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
          <Navbar
            links={[
              {
                text: "About",
                url: "/about",
              },
              {
                text: "Blog",
                url: "/blog",
              },
            ]}
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
