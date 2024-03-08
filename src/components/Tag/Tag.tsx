import "./tag.scss";
import Image from "next/image";

import Link from "next/link";
import { ITags } from "@/interface/interface";

export default function Tag({ tag }: { tag: ITags }) {
  return (
    <div className="tag">
      <Link href={`${tag.url}`} className="tag__link">
        <Image
          src={tag.imageUrl}
          width={32}
          height={32}
          alt={tag.imageAlt}
          className="tag__img"
        />
        <p className="tag__description">{tag.name}</p>
      </Link>
    </div>
  );
}
