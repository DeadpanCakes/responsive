import "./ArticleCard.css";

const ArticleCard = ({ link, topic, title, img }) => {
  return (
    <article>
      <a href={link}>
        <div style={{ background: `url(${img}) blue` }}>
          <div className="articleCardContent">
            <p>{topic}</p>
            <h2>{title}</h2> from "./PageFooter";
          </div>
        </div>
      </a>
    </article>
  );
};

export default ArticleCard;
