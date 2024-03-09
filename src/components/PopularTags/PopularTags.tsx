"use client";

import "./populartags.scss";
import Tag from "../Tag/Tag";
import { ITags } from "@/interface/interface";
import useDeviseSize from "@/hooks/UseDeviceSiza";
import { useEffect, useState } from "react";

export default function PopularTags({ tags }: { tags: ITags[] }) {
  const [totalCount, setTotalCount] = useState(0);
  const width = useDeviseSize();

  useEffect(() => {
    if (width >= 1280) {
      setTotalCount(12);
    } else if (width >= 1024 && width < 1280) {
      setTotalCount(8);
    } else if (width >= 768 && width < 1024) {
      setTotalCount(6);
    } else if (width >= 320 && width < 768) {
      setTotalCount(6);
    }
  }, [width, setTotalCount]);

  return (
    <section className="populartags">
      <div className="populartags__conteiner">
        <h2 className="populartags__header">Popular Tags</h2>
        <p className="populartags__description">Most searched keywords</p>
        <div className="populartags__lists">
          {tags
            .filter((tag, id) => id < totalCount)
            .map((tag) => (
              <Tag key={tag.url} tag={tag} />
            ))}
        </div>
      </div>
    </section>
  );
}
