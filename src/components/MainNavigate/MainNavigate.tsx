"use client";

import Link from "next/link";
import "./mainnavigate.scss";
import { usePathname } from "next/navigation";

export default function MainNavigate() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className={`nav__link ${pathname === "/" ? "nav__link_active" : ""}`}
      >
        Home
      </Link>
      <Link
        href="/blog"
        className={`nav__link ${
          pathname === "/blog" ? "nav__link_active" : ""
        }`}
      >
        Blogs
      </Link>
    </>
  );
}
