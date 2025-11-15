import Link from "next/link";

interface ILink {
  text: string;
  url: string;
}

interface Props {
  links?: ILink[];
}

const LINKS: ILink[] = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Blog",
    url: "/blog",
  },
];

export function Navbar({ links = LINKS }: Props) {
  return (
    <nav className="py-3 border-b-1 border-neutral-200 w-full flex justify-center shadow-sm">
      {links.map((link) => (
        <Link
          className="mx-2 hover:bg-neutral-100 px-4 py-2 rounded-lg"
          key={link.url}
          href={link.url}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
}
