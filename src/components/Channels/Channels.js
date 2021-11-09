import "./Channels.css";
import ChannelCard from "./ChannelCard";

const Channels = () => {
  return (
    <section className="channels">
      <ul className="channelsList">
        <ChannelCard
          link="https://thenextweb.com/plugged"
          title="PLUGGED"
          desc="Your sardonic source for consumer tech stories"
          img={null}
        />
        <ChannelCard
          link="https://thenextweb.com/neural"
          title="NEURAL"
          desc="Human-centric AI news and analysis"
          img={null}
        />
        <ChannelCard
          link="https://thenextweb.com/shift"
          title="SHIFT"
          desc="Driving the future of sustainable mobility"
          img={null}
        />
        <ChannelCard
          link="https://thenextweb.com/growth-quarters"
          title="GROWTH QUARTERS"
          desc="No-nonsense perspective on startup growth"
          img={null}
        />
        <ChannelCard
          link="https://thenextweb.com/hardfork"
          title="HARD FORK"
          desc="Insied money, markets, and Big Tech"
          img={null}
        />
      </ul>
    </section>
  );
};

export default Channels;
