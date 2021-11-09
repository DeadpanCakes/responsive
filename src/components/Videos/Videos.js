import "./Videos.css";
import MainVid from "./MainVid";
import VidCard from "./VidCard";

const Videos = () => {
  return (
    <section className="videoSection">
      <h2 className="vidHeader">Watch what we made you</h2>
      <div className="videos">
        <MainVid
          vidSrc="https://www.youtube.com/embed/S1-wuoFsdT4"
          title="Nothing Ear (1) review: Style... and substance?"
          date="Jul 30, 2021"
        />
        <ul className="videoCarousel">
          <VidCard imgSrc={null} imgAlt="vid" title="This is a video" />
          <VidCard imgSrc={null} imgAlt="vid" title="This is a video" />
          <VidCard imgSrc={null} imgAlt="vid" title="This is a video" />
          <VidCard imgSrc={null} imgAlt="vid" title="This is a video" />
          <VidCard imgSrc={null} imgAlt="vid" title="This is a video" />
        </ul>
      </div>
    </section>
  );
};

export default Videos;
