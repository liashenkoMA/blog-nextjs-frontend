import style from "./page.module.scss";
import Link from "next/link";

import error from "../../images/404.svg";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={style.main}>
      <Image src={error} width={500} height={500} alt="Error" className={style.image} />
      <h2 className={style.header}>Not Found</h2>
      <p className={style.text}>Could not find requested resource</p>
      <Link href="/" className={style.link}>Return Home</Link>
    </div>
  );
}
