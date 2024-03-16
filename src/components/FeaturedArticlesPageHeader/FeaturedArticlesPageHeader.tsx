import "./featuredarticlespageheader.scss";

export default function FeaturedArticlesPageHeader() {
  return (
    <section className="featuredarticlespageheader">
      <div className="featuredarticlespageheader__conteiner">
        <div className="featuredarticlespageheader__info">
          <p className="featuredarticlespageheader__text">Популярные статьи</p>
          <h2 className="featuredarticlespageheader__title">
            Самые популярные статьи на моём блоге
          </h2>
        </div>
      </div>
    </section>
  );
}
