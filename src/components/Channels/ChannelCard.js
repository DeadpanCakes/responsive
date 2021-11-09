const ChannelCard = ({ link, title, desc, img }) => {
  const imgBG = {
    background: `url(${img})`,
  };
  return (
    <li className="channelListing">
      <a href={link}>
        <div style={imgBG}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </a>
    </li>
  );
};

export default ChannelCard;
