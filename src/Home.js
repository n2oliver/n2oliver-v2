
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
import './css/home.css';
import './css/games.css';
import './css/header.css';

import 'jquery';
import Navbar from './components/navbar.js';
import Header from './components/header.js';
import Footer from './components/footer.js';


function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
