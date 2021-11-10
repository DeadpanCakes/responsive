import "./ArticleCard.css";

const ArticleCard = ({ link, topic, title, img, classes }) => {
  const classNames = Array.isArray(classes)
    ? classes.concat("articleCard").join(" ")
    : "articleCard";
  return (
    <a href={link} className={classNames} style={{ background: `url(${img}) blue`, backgroundSize: "cover" }}>
      <article>
        <div >
          <div className="articleCardContent">
            <p>{topic}</p>
            <h2>{title}</h2>
          </div>
        </div>
      </article>
    </a>
  );
};

export default ArticleCard;
