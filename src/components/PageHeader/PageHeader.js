import "./PageHeader.css";

const PageHeader = () => {
  return (
    <header className="pageHeader">
      <nav className="headerNav">
        <li>
          <a href="https://thenextweb.com/">TNW</a>
        </li>
        <li>
          <a href="https://thenextweb.com/">HOME</a>
        </li>
        <li>
          <a href="https://thenextweb.com/">NEWS</a>
        </li>
        <li>
          <a href="https://thenextweb.com/">EVENTS</a>
        </li>
        <li>
          <a href="https://thenextweb.com/programs">PROGRAMS</a>
        </li>
        <li>
          <a href="https://thenextweb.com/spaces">SPACES</a>
        </li>
        <li>
          <a href="https://thenextweb.com/partnerships">PARTNER WITH US</a>
        </li>
        <li>
          <a href="https://thenextweb.com/partnerships">MAIL</a>
        </li>
      </nav>
    </header>
  );
};

export default PageHeader;
