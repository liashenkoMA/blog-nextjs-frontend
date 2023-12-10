import "./logo.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../../images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="logo">
      <Image
        src={logo}
        width={77}
        height={42}
        alt="Логотип сайта"
        className="logo__image"
      />
      <p className="logo__description">LyashenkoMA</p>
    </Link>
  );
}
