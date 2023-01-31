import './App.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
import Body from './component/body';
import Footer from './component/footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Body />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
