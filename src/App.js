import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Business from './Components/Business/Business';
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
import Recruiting from './Components/Recruiting/Recruiting';
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
import ScrollToTop from './Components/Common/ScrollToTop';
import Overview from './Components/Course_Overview/Overview';
import CourseStart from './Components/StartCourse/CourseStart';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Board from './Components/Board/Board';
import AdminRoute from './Components/AdminRoute/AdminRoute';
import AddInstructor from './Components/Board/AddInstructor/AddInstructor';
import Admin from './Components/Board/AddAdmin/Admin';
import Maas from './Components/Maas/Maas';
import CourseAdd from './Components/Addcourse/CourseAdd';
import Edit from './Components/CourseEdit/Edit';
// import Welcome from './Components/Board/Welcome';
import Dashboard from './views/dashboard/Dashboard';
import MyCourses from './Components/Board/UserRoutes/MyCourses';
import ProfileUpdate from './Components/Board/UserRoutes/Profile_Update';
import Candidate from './Components/Board/Candidates/Candidate';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Authprovider>
      <BrowserRouter>
        <ScrollToTop>
          {/* <Header /> */}
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
            <Route path="/become-a-contributor" element={<Contributor />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/enterprise-terms" element={<EnterPriseTerm />} />
            <Route path="/enterprise-price" element={<EnterprisePricing />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/maas" element={<Maas />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/course-catalogue/:tag" element={<CourseCatalog />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/press" element={<Press />} />
            <Route path="/learn/:courseID" element={<Overview />} />
            <Route path="/learn/start/:courseID" element={<PrivateRoute><CourseStart /></PrivateRoute>} />
            {/* <Route path="/dashb" element={<Board />} /> */}
            <Route path="/dashboard" element={<PrivateRoute><Board /></PrivateRoute>} >
              <Route path="" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="update_profile" element={<PrivateRoute><ProfileUpdate /></PrivateRoute>} />
              <Route path="mycourses" element={<PrivateRoute><MyCourses /></PrivateRoute>} />
              <Route path="candidates" element={<AdminRoute><Candidate /></AdminRoute>} />
            
              <Route path="adadmin" element={<AdminRoute><Admin /></AdminRoute>} />
              <Route path="adtutor" element={<AdminRoute><AddInstructor /></AdminRoute>} />
              <Route path="edit/:id" element={<AdminRoute><Edit /></AdminRoute>} />
              <Route path="addcourse" element={<AdminRoute><CourseAdd /></AdminRoute>} />
            </Route>
            <Route path="*" element={<Nopage />} />
          </Routes>

        </ScrollToTop>
      </BrowserRouter>


    </Authprovider >
  );
}

export default App;
