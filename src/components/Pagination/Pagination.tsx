"use client";

import "./pagination.scss";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import arrowLeft from "@/images/arrow-left.png";
import arrowRight from "@/images/arrow-right.png";
import { useEffect, useState } from "react";

export default function Pagination({ count }: { count: number }) {
  const params = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("page");

  const [countPages, setCountPages] = useState(0);

  function countPage(count: number) {
    const countPage = Math.ceil(count / 6);
    return countPage;
  }

  console.log(params, search)

  useEffect(() => {
    setCountPages(countPage(count));
  }, [count]);

  return (
    <nav className="pagination">
      <ol className="pagination__lists">
        <li className="pagination__list">
          <Link href={`${params}`} className="pagination__link">
            <Image
              src={arrowLeft}
              width={20}
              height={20}
              alt="Влево"
              className="pagination__image"
            ></Image>
          </Link>
        </li>
        {Array.from(new Array(countPages))
          .filter((_, id) => id < 3)
          .map((_, id) => (
            <li key={id} className="pagination__list">
              <Link href={`${params}`} className="pagination__link">
                {id + 1}
              </Link>
            </li>
          ))}
        <li className="pagination__list">
          <Link href={`${params}`} className="pagination__link">
            <Image
              src={arrowRight}
              width={21}
              height={21}
              alt="Влево"
              className="pagination__image"
            ></Image>
          </Link>
        </li>
      </ol>
    </nav>
  );
}

/* 
Линк 1 страницы сделать дефолтным. Чтобы если записи есть, то одна страница висела всегда.
Далее, переделать стрелки в кнопки и добавить счетчик страниц, повесить редиректы на эти кнопки +1 и -1 страница
Выделить активную страницу классом
Наконец продумать логику при которые начиная с 3 страницы она становится в центр, а цифры меняются
*/