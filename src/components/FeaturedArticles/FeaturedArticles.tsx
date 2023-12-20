import "./featuredarticles.scss";
import Image from "next/image";
import Link from "next/link";

import arrow from "../../images/arrow-right.png";
import FeaturedArticlesCard from "../FeaturedArticlesCard/FeaturedArticlesCard";

export default function FeaturedArticles() {
  return (
    <section className="featuredarticles">
      <div className="featuredarticles__conteiner">
        <h2 className="featuredarticles__title">Featured Articles</h2>
        <p className="featuredarticles__description">
          Discover the most outstanding articles in all topics
        </p>
        <div className="featuredarticles__cards">
          <FeaturedArticlesCard />
          <FeaturedArticlesCard />
          <FeaturedArticlesCard />
          <FeaturedArticlesCard />
          <FeaturedArticlesCard />
          <FeaturedArticlesCard />
          <FeaturedArticlesCard />
          <FeaturedArticlesCard />
        </div>
        <Link href="#" className="featuredarticles__link">
          Show More Posts
          <Image src={arrow} width={14} height={14} alt="Arrow" className="featuredarticles__icon" />
        </Link>
      </div>
    </section>
  );
}
