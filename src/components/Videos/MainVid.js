const MainVid = ({ vidSrc, title, date }) => {
  return (
    <div className="mainVidContainer">
      <iframe
        className="mainVid"
        width="100%"
        height="auto"
        src={vidSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default MainVid;
