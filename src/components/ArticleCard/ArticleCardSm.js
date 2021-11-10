import "./ArticleCardSm.css";

const ArticleCardSm = ({ title, rank }) => {
  return (
    <li className="articleCardSm">
      <article>
        <h2 className="headlineSm">{title}</h2>
      </article>
    </li>
  );
};

export default ArticleCardSm;
