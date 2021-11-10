import "./PageFooter.css";

const PageFooter = () => {
  return (
    <footer className="pageFooter">
      <div className="footerContent">
        <hgroup className="footerLogo">
          <a href="https://thenextweb.com/">
            <img alt="The Next Web" />
          </a>
          <h2>The heart of tech</h2>
        </hgroup>
        <div className="footerSocial">
          <ul className="socialLinks">
            <li>
              <a href="https://facebook.com/thenextweb">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/thenextweb/">Instagram</a>
            </li>
            <li>
              <a href="https://twitter.com/thenextweb">Twitter</a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/thenextweb">Youtube</a>
            </li>
            <li>
              <a href="https://flipboard.com/@thenextweb">Flipboard</a>
            </li>
            <li>
              <a href="https://thenextweb.com/newsletters">Email</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/the-next-web">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="footerMore">
          <h3>More TNW</h3>
          <ul>
            <li>
              <a href="https://thenextweb.com/latest">Media</a>
            </li>
            <li>
              <a href="https://thenextweb.com/events">Events</a>
            </li>
            <li>
              <a href="https://thenextweb.com/programs">Pograms</a>
            </li>
            <li>
              <a href="https://thenextweb.com/spaces">Spaces</a>
            </li>
            <li>
              <a href="https://thenextweb.com/newsletters">Newsletters</a>
            </li>
            <li>
              <a href="https://deals.thenextweb.com/">Deals</a>
            </li>
          </ul>
        </div>
        <div className="footerAbout">
          <h3>About TNW</h3>
          <ul>
            <li>
              <a href="https://thenextweb.com/partnerships">Partner with us</a>
            </li>
            <li>
              <a href="https://thenextweb.homerun.co/">Jobs</a>
            </li>
            <li>
              <a href="https://thenextweb.com/terms-and-conditions">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="https://thenextweb.com/cookie-statement">
                Cookie Statement
              </a>
            </li>
            <li>
              <a href="https://thenextweb.com/privacy-statement">
                Privacy Statement
              </a>
            </li>
            <li>
              <a href="https://ip-about-us.cdn.prismic.io/ip-about-us/51083d4d-d367-474c-9fb4-4edc135b70ea_25_january_2021_editorial_code_of_practice.pdf">
                Editorial Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          TNW is a <a href="https://www.ft.com/">Financial Times</a> company
        </p>
        <p>
          Copyright © 2006—2021, The Next Web B.V. Made with {"<3"} in
          Amsterdam.
        </p>
      </div>
    </footer>
  );
};

export default PageFooter;
