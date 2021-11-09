import "./App.css";
import PageHeader from "./components/PageHeader/PageHeader";
import FrontPage from "./components/FrontPage/FrontPage";
import Popular from "./components/Popular/Popular";
import Latest from "./components/Latest/Latest";
import Channels from "./components/Channels/Channels";
import Newsletter from "./components/Newsletter/Newsletter";
import Videos from "./components/Videos/Videos";
import Contact from "./components/Contact/Contact";
import PageFooter from "./components/PageFooter/PageFooter";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <FrontPage />
      <Popular />
      <Latest />
      <Channels />
      <Newsletter />
      <Videos />
      <Contact />
      <PageFooter />
    </div>
  );
}

export default App;
