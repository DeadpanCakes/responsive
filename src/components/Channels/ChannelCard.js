import "./ChannelCard.css";

const ChannelCard = ({ link, title, desc, img }) => {
  const imgBG = {
    background: `url(${img})`,
  };
  return (
    <li className="channelListing">
      <a href={link} className="test">
        <div style={imgBG} className="channelContents">
          <h3>{title}</h3>
          <p className="channelDesc">{desc}</p>
        </div>
      </a>
    </li>
  );
};

export default ChannelCard;
