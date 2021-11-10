import "./Popular.css";
import ArticleCardSm from "../ArticleCard/ArticleCardSm";

const Popular = () => {
  return (
    <section className="popular">
      <h2 className="popularHeading">Popular Articles Today</h2>
      <ol className="articleList">
        <ArticleCardSm title="This pop-up cabin is a huge step up over that cramped little tent." />
        <ArticleCardSm title="The Volvo C40 shows how luxury cars can be green" />
        <ArticleCardSm title="The Bluesound Node is the music streamer every Hi-Fi setup needs." />
        <ArticleCardSm title="Microsoft's metaverse doesn't have legs -- literally." />
        <ArticleCardSm title="Here's why invesment in ebikes is booming." />
      </ol>
    </section>
  );
};

export default Popular;
