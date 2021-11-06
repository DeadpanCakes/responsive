import "./Newsletter.css";

const Newsletter = () => {
  return (
    <form className="newsletter">
      <h2>Get the snarkiest newsletter in tech</h2>
      <h3>
        Subscribe to our twice weekly{" "}
        <a href="https://share.hsforms.com/1eT1w-z6ZSAiGIVEzvR5QMw47gef">
          Big Spam
        </a>{" "}
        or check out our{" "}
        <a href="https://thenextweb.com/newsletters">other newsletters.</a>
      </h3>
      <label className="newsletterLabel" for="newsletterInput">
        Email
      </label>
      <input id="newsletterInput" placeholder="Email" />
      <button>SUBSCRIBE</button>
    </form>
  );
};

export default Newsletter;
