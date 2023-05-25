import Nav from './pages/header/Nav';
import Main from './pages/main/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Photodiary from './pages/photodiary/Photodiary';
import Footer from './pages/footer/Footer';
import ScrollToTop from './utils/ScrollToTop';
import './style.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop/>
        <div className="container">
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/photodiary" element={<Photodiary />} />
          <Route path="/music" element={<Main />} />
          <Route path="/travel" element={<Main />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
