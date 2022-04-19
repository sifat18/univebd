import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
import Paths from './Components/Paths/Paths';
import Unlimited from './Components/PricingLinks/Unlimited/Unlimited';
import './App.css'
import Univewhy from './Components/Whyunive/Univewhy';
import HowItworks from './Components/HowItWorks/HowItworks';
import Contact from './Components/Contact/Contact';
import Nopage from './Components/Nopage/Nopage';
import Authprovider from './Components/AuthProvider/Authprovider';
import Recruiting from './Components/Recruting/Recruiting';
import Assessments from './Components/Assessments/Assessments';
import Blogs from './Components/Blogs/Blogs';
import Instructor from './Components/Instructor/Instructor';
import Contributor from './Components/Contributor/Contributor';
import Enterprise from './Components/Enterprise/Enterprise';
import Privacy from './Components/Privacy/Privacy';
import EnterPriseTerm from './Components/EnterPriseTerm/EnterPriseTerm';
import Terms from './Components/Terms/Terms';
import EnterprisePricing from './Components/EnterprisePricing/EnterprisePricing';
import { useEffect } from 'react';
import FAQ from './Components/FAQ/FAQ';
import OurTeam from './Components/OurTeam/OurTeam';
import Careers from './Components/Careers/Careers';
import CourseCatalog from './Components/CourseCatalog/CourseCatalog';
import Scholarships from './Components/Scholarships/Scholarships';
import Press from './Components/Press/Press';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Authprovider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/why-unive" element={<Univewhy />} />
          <Route path="/how-it-works" element={<HowItworks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business" element={<Business />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/individual-learner" element={<Individual />} />
          <Route path="/upskill" element={<Upskill />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/learning-plans" element={<LearningPlan />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/paths" element={<Paths />} />
          <Route path="/unlimited" element={<Unlimited />} />
          <Route path="/recruiting" element={<Recruiting />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/become-an-unive-instructor" element={<Instructor />} />
          <Route path="/write-on-edpresso" element={<Contributor />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/enterprise-terms" element={<EnterPriseTerm />} />
          <Route path="/enterprise-price" element={<EnterprisePricing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/course-catalogue" element={<CourseCatalog />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/press" element={<Press />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />

      </BrowserRouter>


    </Authprovider>
  );
}

export default App;
