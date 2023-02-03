import './App.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
import Body from './component/body';
import Footer from './component/footer';
import About from './pages/about';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faq from './pages/faq';
import Contact from './pages/contact';

function App() {
  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Body />}/>
        <Route path='about' element={<About />}/>
        <Route path='faq' element={<Faq />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
