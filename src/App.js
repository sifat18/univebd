import 'bootstrap/dist/css/bootstrap.min.css';
import Business from './Components/Business/Business';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Learn from './Components/Learn/Learn';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Individual from './Components/Developer/Individual';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/business" element={<Business />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/individual-learner" element={<Individual />} />
          <Route path="/upskill" element={<Individual />} />
        </Routes>
        <Footer />

      </BrowserRouter>


    </div>
  );
}

export default App;
