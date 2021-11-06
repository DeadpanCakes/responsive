import "./FrontPage.css";
import "../ArticleCard/ArticleCard";
import ArticleCard from "../ArticleCard/ArticleCard";

const FrontPage = () => {
  return (
    <section className="frontPage">
      <h1 className="large largeHeader">
        <a href="https://thenextweb.com/">
          <img alt="The Next Web" />
        </a>
      </h1>
      <p className="large largeTagline">The heart of tech</p>
      <div className="smallContainer smallHeader">
        <h1>
          <a href="https://thenextweb.com/">
            <img alt="The Next Web" />
          </a>
        </h1>
        <p>The heart of tech</p>
      </div>
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
        img={null}
        classes={["large firstArticle"]}
      />
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
        img={null}
        classes={["large secondArticle"]}
      />
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
        img={null}
        classes={["large thirdArticle"]}
      />
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
        img={null}
        classes={["large fourthArticle"]}
      />
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
        img={null}
        classes={["large fifthArticle"]}
      />
      <div className="smallContainer articleContainer">
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="There's something fishy about Facebook's pivot on facial recognition"
          img={null}
          classes={["small"]}
        />
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="There's something fishy about Facebook's pivot on facial recognition"
          img={null}
          classes={["small"]}
        />
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="There's something fishy about Facebook's pivot on facial recognition"
          img={null}
          classes={["small"]}
        />
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="There's something fishy about Facebook's pivot on facial recognition"
          img={null}
          classes={["small"]}
        />
      </div>
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
        img={null}
        classes={["small banner"]}
      />
    </section>
  );
};

export default FrontPage;
