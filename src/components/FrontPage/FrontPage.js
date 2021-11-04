import "./FrontPage.css";
import "../ArticleCard/ArticleCard";
import ArticleCard from "../ArticleCard/ArticleCard";

const FrontPage = () => {
  return (
    <section className="frontPage">
      <h1>
        <a href="https://thenextweb.com/">
          <img alt="The Next Web" />
        </a>
      </h1>
      <p>The heart of tech</p>
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
      />
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
      />
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
      />
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
      />
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
      />
    </section>
  );
};

export default FrontPage;
