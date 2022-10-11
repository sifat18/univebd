import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense, useEffect } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
// import Home from './Components/Home/Home';
// import Learn from './Components/Learn/Learn';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import AdminRoute from './Components/AdminRoute/AdminRoute';
import Authprovider from './Components/AuthProvider/Authprovider';
import Admin from './Components/Board/AddAdmin/Admin';
import Restore from './Components/Board/DeletedCourses/Restore';
import DeleteForm from './Components/Board/EmployerPAges/CourseDeleteRequest/DeleteForm';
import JobEdit from './Components/Board/EmployerPAges/JobEdit/JobEdit';
import JobPost from './Components/Board/EmployerPAges/JobPost/JobPost';
import EmployRoute from './Components/Board/EmployerRoute/EmployRoute';
import TutorProfile from './Components/Board/TutorRoutes/TutorProfile';
import MyJobs from './Components/Board/UserRoutes/MyJobs';
import AppliedCandidates from './Components/Common/AppliedCandidates';
import ScrollToTop from './Components/Common/ScrollToTop';
import JobBrowsing from './Components/JobBrowsing/JobBrowsing';
import JobDetails from './Components/JobDetails/JobDetails';
import Nopage from './Components/Nopage/Nopage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
// import EmployerProfile from './Components/Board/EmployerPAges/EmployerProfile';

// import Individual from './Components/Developer/Individual';
// import Upskill from './Components/ProductsPages/Upskill/Upskill';
// import Onboarding from './Components/ProductsPages/Onboarding/Onboarding';
// import LearningPlan from './Components/ProductsPages/LearningPlan/LearningPlan';
// import Projects from './Components/ProductsPages/Projects/Projects';
// import Paths from './Components/Paths/Paths';
// import Unlimited from './Components/PricingLinks/Unlimited/Unlimited';
// import Univewhy from './Components/Whyunive/Univewhy';
// import HowItworks from './Components/HowItWorks/HowItworks';
// import Contact from './Components/Contact/Contact';
// import Business from './Components/Business/Business';

// import Recruiting from './Components/Recruiting/Recruiting';
// import Assessments from './Components/Assessments/Assessments';
// import Blogs from './Components/Blogs/Blogs';
// import Instructor from './Components/Instructor/Instructor';
// import Contributor from './Components/Contributor/Contributor';
// import Enterprise from './Components/Enterprise/Enterprise';
// import Privacy from './Components/Privacy/Privacy';
// import EnterPriseTerm from './Components/EnterPriseTerm/EnterPriseTerm';
// import Terms from './Components/Terms/Terms';
// import EnterprisePricing from './Components/EnterprisePricing/EnterprisePricing';
// import FAQ from './Components/FAQ/FAQ';
// import OurTeam from './Components/OurTeam/OurTeam';
// import Careers from './Components/Careers/Careers';
// import CourseCatalog from './Components/CourseCatalog/CourseCatalog';
// import Scholarships from './Components/Scholarships/Scholarships';
// import Press from './Components/Press/Press';
// import Overview from './Components/Course_Overview/Overview';
// import CourseStart from './Components/StartCourse/CourseStart';
// import Board from './Components/Board/Board';
// import AddInstructor from './Components/Board/AddInstructor/AddInstructor';
// import Maas from './Components/Maas/Maas';
// import CourseAdd from './Components/Addcourse/CourseAdd';
// import Edit from './Components/CourseEdit/Edit';
// import Welcome from './Components/Board/Welcome';
// import Dashboard from './views/dashboard/Dashboard';
// import MyCourses from './Components/Board/UserRoutes/MyCourses';
// import ProfileUpdate from './Components/Board/UserRoutes/Profile_Update';
// import Candidate from './Components/Board/Candidates/Candidate';
// import CandidateDetail from './Components/Board/CandidateDetail/CandidateDetail';
// import AddEmployer from './Components/Board/AddEmployer/AddEmployer';

const Home = React.lazy(() => import("./Components/Home/Home"));
const Learn = React.lazy(() => import("./Components/Learn/Learn"));
const Individual = React.lazy(() => import("./Components/Developer/Individual"));
const Upskill = React.lazy(() => import("./Components/ProductsPages/Upskill/Upskill"));
const Onboarding = React.lazy(() => import("./Components/ProductsPages/Onboarding/Onboarding"));
const LearningPlan = React.lazy(() => import("./Components/ProductsPages/LearningPlan/LearningPlan"));
const Paths = React.lazy(() => import("./Components/Paths/Paths"));
const Unlimited = React.lazy(() => import("./Components/PricingLinks/Unlimited/Unlimited"));
const Univewhy = React.lazy(() => import("./Components/Whyunive/Univewhy"));
const HowItworks = React.lazy(() => import("./Components/HowItWorks/HowItworks"));
const Projects = React.lazy(() => import("./Components/ProductsPages/Projects/Projects"));
const Contact = React.lazy(() => import("./Components/Contact/Contact"));
const Business = React.lazy(() => import("./Components/Business/Business"));
const Recruiting = React.lazy(() => import("./Components/Recruiting/Recruiting"));
const Assessments = React.lazy(() => import("./Components/Assessments/Assessments"));
const Blogs = React.lazy(() => import("./Components/Blogs/Blogs"));
const Contributor = React.lazy(() => import("./Components/Contributor/Contributor"));
const Enterprise = React.lazy(() => import("./Components/Enterprise/Enterprise"));
const Privacy = React.lazy(() => import("./Components/Privacy/Privacy"));
const Instructor = React.lazy(() => import("./Components/Instructor/Instructor"));
const EnterPriseTerm = React.lazy(() => import("./Components/EnterPriseTerm/EnterPriseTerm"));
const Terms = React.lazy(() => import("./Components/Terms/Terms"));
const EnterprisePricing = React.lazy(() => import("./Components/EnterprisePricing/EnterprisePricing"));
const FAQ = React.lazy(() => import('./Components/FAQ/FAQ'));
const OurTeam = React.lazy(() => import('./Components/OurTeam/OurTeam'));
const Careers = React.lazy(() => import('./Components/Careers/Careers'));
const CourseCatalog = React.lazy(() => import('./Components/CourseCatalog/CourseCatalog'));
const Scholarships = React.lazy(() => import('./Components/Scholarships/Scholarships'));
const Press = React.lazy(() => import('./Components/Press/Press'));
const Overview = React.lazy(() => import('./Components/Course_Overview/Overview'));
const CourseStart = React.lazy(() => import('./Components/StartCourse/CourseStart'));
const Board = React.lazy(() => import('./Components/Board/Board'));
const AddInstructor = React.lazy(() => import('./Components/Board/AddInstructor/AddInstructor'));
const Maas = React.lazy(() => import('./Components/Maas/Maas'));
const CourseAdd = React.lazy(() => import('./Components/Addcourse/CourseAdd'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const MyCourses = React.lazy(() => import('./Components/Board/UserRoutes/MyCourses'));
const Edit = React.lazy(() => import('./Components/CourseEdit/Edit'));
const ProfileUpdate = React.lazy(() => import('./Components/Board/UserRoutes/Profile_Update'));
const FormsAll = React.lazy(() => import('./Components/Board/Forms/AllForms'));
// const Candidate = React.lazy(() => import('./Components/Board/Candidates/Candidate'));
const CandidateDetail = React.lazy(() => import('./Components/Board/CandidateDetail/CandidateDetail'));
const Search = React.lazy(() => import('./Components/Board/Candidates/Search'));
const AddEmployer = React.lazy(() => import('./Components/Board/AddEmployer/AddEmployer'));
const EmployerProfile = React.lazy(() => import('./Components/Board/EmployerPAges/profile/EmployerProfile'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Suspense fallback={loading}>
      {/* //Authprovider wraps the contents BrowserRouter and distributes the user info from that is stored in it   */}
      <Authprovider>
        <BrowserRouter>
          {/* ScrollToTop moves to the top of page during switching pages */}
          <ScrollToTop>
            {/* route definitions and resulting page components */}
            <Routes>
              <Route path="/" element={<Home />} />
              {/* educ-5542f.firebaseapp.com */}
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
              <Route path="/individual" element={<Unlimited />} />
              <Route path="/recruiting" element={<Recruiting />} />
              <Route path="/assessments" element={<Assessments />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/job_browse" element={<JobBrowsing />} />
              <Route path="/job_browse/:id" element={<JobDetails />} />
              <Route path="/become-an-unive-instructor" element={<Instructor />} />
              <Route path="/become-a-contributor" element={<Contributor />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/enterprise-terms" element={<EnterPriseTerm />} />
              <Route path="/enterprise-plans" element={<EnterprisePricing />} />
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
              <Route path="/dashboard" element={<PrivateRoute><Board /></PrivateRoute>} >
                <Route path="" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="employer_profile" element={<EmployRoute><EmployerProfile /></EmployRoute>} />
                <Route path="tutor_profile" element={<EmployRoute><TutorProfile /></EmployRoute>} />
                <Route path="employer_jobpost" element={<JobPost />} />
                <Route path="update_profile" element={<PrivateRoute><ProfileUpdate /></PrivateRoute>} />
                <Route path="mycourses" element={<PrivateRoute><MyCourses /></PrivateRoute>} />
                <Route path="myjobs" element={<PrivateRoute><MyJobs /></PrivateRoute>} />
                <Route path="candidates" element={<AdminRoute><Search /></AdminRoute>} />
                <Route path="delete_request_form" element={<AdminRoute><DeleteForm /></AdminRoute>} />
                <Route path="candidate/detail/:id" element={<AdminRoute><CandidateDetail /></AdminRoute>} />
                <Route path="deletedCourses" element={<AdminRoute><Restore /></AdminRoute>} />

                <Route path="adadmin" element={<AdminRoute><Admin /></AdminRoute>} />
                <Route path="ademployer" element={<AdminRoute><AddEmployer /></AdminRoute>} />
                <Route path="adtutor" element={<AdminRoute><AddInstructor /></AdminRoute>} />
                <Route path="edit/:id" element={<AdminRoute><Edit /></AdminRoute>} />
                <Route path="posted_jobs" element={<PrivateRoute><AppliedCandidates /></PrivateRoute>} />
                <Route path="edit_job/:id" element={<AdminRoute><JobEdit /></AdminRoute>} />
                <Route path="addcourse" element={<AdminRoute><CourseAdd /></AdminRoute>} />
                <Route path="form_management" element={<AdminRoute><FormsAll /></AdminRoute>} />
              </Route>
              <Route path="*" element={<Nopage />} />
            </Routes>

          </ScrollToTop>
        </BrowserRouter>


      </Authprovider >
    </Suspense>
  );
}

export default App;
