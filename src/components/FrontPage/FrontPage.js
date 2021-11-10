import "./FrontPage.css";
import "../ArticleCard/ArticleCard";
import ArticleCard from "../ArticleCard/ArticleCard";
import fbFace from "../../assets/fbFace.jpg";
import metaLegs from "../../assets/metaLegs.jpg";
import appleCar from "../../assets/appleCar.jpg";
import iems from "../../assets/iems.webp";
import conference from "../../assets/conference.jpg";

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
        img={fbFace}
        classes={["large firstArticle"]}
      />
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
        img={metaLegs}
        classes={["large secondArticle"]}
      />
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
        img={appleCar}
        classes={["large thirdArticle"]}
      />
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
        img={iems}
        classes={["large fourthArticle"]}
      />
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
        img={conference}
        classes={["large fifthArticle"]}
      />
      <div className="smallContainer articleContainer">
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="There's something fishy about Facebook's pivot on facial recognition"
          img={fbFace}
          classes={["small"]}
        />
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="There's something fishy about Facebook's pivot on facial recognition"
          img={metaLegs}
          classes={["small"]}
        />
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="There's something fishy about Facebook's pivot on facial recognition"
          img={appleCar}
          classes={["small"]}
        />
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="There's something fishy about Facebook's pivot on facial recognition"
          img={iems}
          classes={["small"]}
        />
      </div>
      <ArticleCard
        link="google.com"
        topic="Facial Recognition"
        title="There's something fishy about Facebook's pivot on facial recognition"
        img={conference}
        classes={["small banner"]}
      />
    </section>
  );
};

export default FrontPage;
