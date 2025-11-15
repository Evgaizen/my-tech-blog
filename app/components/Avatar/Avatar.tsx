import Image from "next/image";
import Link from "next/link";

interface Props {
  imageUrl: string;
  altText: string;
  href: string;
}

export function Avatar({ imageUrl, altText, href }: Props) {
  return (
    <Link href={href}>
      <Image
        className="rounded-full"
        alt={altText}
        src={imageUrl}
        width={40}
        height={40}
      />
    </Link>
  );
}
