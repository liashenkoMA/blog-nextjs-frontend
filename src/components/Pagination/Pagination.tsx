"use client";

import "./pagination.scss";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Pagination({ count }: { count: number }) {
  const params = usePathname();
  const router = useRouter();

  const [countPages, setCountPages] = useState<number[]>([]);
  const [activePage, setActivePage] = useState(1);

  function countPage(count: number) {
    const countPage = Math.ceil(count / 6);
    return countPage;
  }

  useEffect(() => {
    const countPa = countPage(count);
    const arr = Array.from(Array(countPa).keys());
    setCountPages(arr);
  }, [count]);

  useEffect(() => {
    if (activePage > 1) {
      router.push(`http://localhost:3001/${params}?page=${activePage}`);
    } else {
      router.push(`http://localhost:3001/${params}`);
    }
  }, [activePage, params, router]);

  function handleChangePageLeft() {
    if (activePage > 1) {
      setActivePage((activePage) => activePage - 1);
    }
  }

  function handleChangePageRight() {
    setActivePage((activePage) => activePage + 1);
  }

  function handleChangePage(id: number) {
    setActivePage(id + 1);
  }

  function filterFirstElement(el: number, id: number) {
    if (activePage <= 2) {
      return el < 3;
    } else {
      return el > activePage - 3 && el < activePage + 1;
    }
  }

  return (
    <nav className="pagination">
      <ol className="pagination__lists">
        <li className="pagination__list">
          <button
            onClick={handleChangePageLeft}
            className="pagination__link pagination__image-left"
            disabled={activePage === 1 ? true : false}
          ></button>
        </li>

        {countPages.filter(filterFirstElement).map((el, id) => (
          <li key={el} className="pagination__list">
            <button
              onClick={() => handleChangePage(el)}
              className={`pagination__link ${
                activePage === el + 1 ? "pagination__link_type_active" : ""
              }`}
            >
              {el + 1}
            </button>
          </li>
        ))}

        <li className="pagination__list">
          <button
            onClick={handleChangePageRight}
            className="pagination__link pagination__image-right"
            disabled={activePage === countPages.length ? true : false}
          ></button>
        </li>
      </ol>
    </nav>
  );
}
