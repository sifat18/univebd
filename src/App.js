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
import Upskill from './Components/ProductsPages/Upskill/Upskill';
import Onboarding from './Components/ProductsPages/Onboarding/Onboarding';
import LearningPlan from './Components/ProductsPages/LearningPlan/LearningPlan';
import Projects from './Components/ProductsPages/Projects/Projects';

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
          <Route path="/upskill" element={<Upskill />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/learning-plans" element={<LearningPlan />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />

      </BrowserRouter>


    </div>
  );
}

export default App;
