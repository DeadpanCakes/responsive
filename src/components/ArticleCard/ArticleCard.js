import "./ArticleCard.css";

const ArticleCard = ({ link, topic, title, img }) => {
  return (
    <a href={link} className="articleCard">
      <article>
        <div style={{ background: `url(${img}) blue` }}>
          <div className="articleCardContent">
            <p>{topic}</p>
            <h2>{title}</h2> from "./PageFooter";
          </div>
        </div>
      </article>
    </a>
  );
};

export default ArticleCard;
