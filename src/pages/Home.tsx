import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ministers from '../components/Ministers';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Navbar />

      {/* ===== TICKER SECTION ===== */}
      <div className="home__ticker">
        <div className="home__ticker-inner">

          <div className="home__ticker-badge">
            What's New »
          </div>

          <div className="home__ticker-scroll">
            <div className="home__ticker-text">
              RailOne - Official Indian Railways Super App! (Android / iOS) • 
              Unified Vendor Approval Management (U-VAM) • 
              Recent guideline on development of vendors • 
              Banaras Locomotive Works Vendor Development Program
            </div>
          </div>

        </div>
      </div>

      <Hero />

      <div className="home__content">
        <main className="home__main">
          <Ministers />
        </main>
        <div className="home__sidebar">
          <Sidebar />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;