import "./Latest.css";
import ArticleCard from "../ArticleCard/ArticleCard";

const Latest = () => {
  return (
    <section className="latest">
      <h2>Latest Stories</h2>
      <div className="latestArticles">
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="Expanding black holes could be playing Pac Man with the universe"
          img={null}
          classes={['latestStories']}
        />
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="Why Elon Musk is an idiot"
          img={null}
          classes={['latestStories']}
        />
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="Your Spotify Wrapped 2021 is embarassing and there's nothing you can do about it"
          img={null}
          classes={['latestStories']}
        />
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="Gig startup want you to believe they can replace your job-- don't fall for it"
          img={null}
          classes={['latestStories']}
        />
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="Paging the plagarism police-- AI is getting better at writing students' essays"
          img={null}
          classes={['latestStories']}
        />
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="The Facebook whistleblower must-have rules to rein in social media"
          img={null}
          classes={['latestStories']}
        />
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="Here are 10 awesome deals on power generators and solar panels at special pre-Black Friday prices"
          img={null}
          classes={['latestStories']}
        />
        <ArticleCard
          link="google.com"
          topic="Facial Recognition"
          title="Would you buy a car without its promised tech? BMW latest to make compromises due to chip shortage"
          img={null}
          classes={['latestStories']}
        />
      </div>
      <button className="allNewsBtn">See All News</button>
    </section>
  );
};

export default Latest;
