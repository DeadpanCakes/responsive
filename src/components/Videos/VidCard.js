const VidCard = ({ imgSrc, imgAlt, title }) => {
  return (
    <li>
      <img src={imgSrc} alt={imgAlt} />
      <h3>{title}</h3>
    </li>
  );
};

export default VidCard;
