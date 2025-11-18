import Link from "next/link";
import { ReactElement } from "react";

interface ILink {
  text: string;
  url: string;
}

interface Props {
  links: ILink[];
  avatar: ReactElement;
}

export function Navbar({ links, avatar }: Props) {
  return (
    <nav className="px-110 border-b-1 h-15 border-neutral-200 w-full flex justify-center shadow-sm items-center">
      <div className="mx-2">{avatar}</div>
      <div>
        {links.map((link) => (
          <Link
            className="mx-2 my-auto hover:bg-neutral-100 px-4 py-2 rounded-lg"
            key={link.url}
            href={link.url}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
