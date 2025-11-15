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
    <nav className="py-4 border-b-1 w-full flex justify-center">
      {links.map((link) => (
        <Link className="mx-2" key={link.url} href={link.url}>
          {link.text}
        </Link>
      ))}
    </nav>
  );
}
