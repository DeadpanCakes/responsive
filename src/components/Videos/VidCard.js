const VidCard = ({ imgSrc, imgAlt, title }) => {
  return (
    <li className="vidCard">
      <img src={imgSrc} alt={imgAlt} />
      <h3>{title}</h3>
    </li>
  );
};

export default VidCard;
