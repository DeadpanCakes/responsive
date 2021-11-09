import "./Videos.css";
import MainVid from "./MainVid";

const Videos = () => {
  return (
    <section className="videos">
      <h2>Watch what we made you</h2>
      <MainVid
        vidSrc="https://www.youtube.com/embed/S1-wuoFsdT4"
        title="Nothing Ear (1) review: Style... and substance?"
        date="Jul 30, 2021"
      />
      <ul className="videoCarousel"></ul>
    </section>
  );
};

export default Videos;
