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
import Colors from './views/theme/colors/Colors';
import Typography from './views/theme/typography/Typography';
import Cards from './views/base/cards/Cards';
import Accordion from './views/base/accordion/Accordion';
import Breadcrumbs from './views/base/breadcrumbs/Breadcrumbs';
import Carousels from './views/base/carousels/Carousels';
import Collapses from './views/base/collapses/Collapses';
import ListGroups from './views/base/list-groups/ListGroups';
import Navs from './views/base/navs/Navs';
import Paginations from './views/base/paginations/Paginations';
import Placeholders from './views/base/placeholders/Placeholders';
import Popovers from './views/base/popovers/Popovers';
import Spinners from './/views/base/spinners/Spinners';
import Progress from './views/base/progress/Progress';
import Tables from './views/base/tables/Tables';
import Tooltips from './views/base/tooltips/Tooltips';
import Buttons from './views/buttons/buttons/Buttons';
import Dropdowns from './views/buttons/dropdowns/Dropdowns';
import ButtonGroups from './views/buttons/button-groups/ButtonGroups';
import Charts from './views/charts/Charts';
import FormControl from './views/forms/form-control/FormControl';
import Select from './views/forms/select/Select';
import ChecksRadios from './views/forms/checks-radios/ChecksRadios';
import Range from './views/forms/range/Range';
import InputGroup from './views/forms/input-group/InputGroup';
import FloatingLabels from './views/forms/floating-labels/FloatingLabels';
import Layout from './views/forms/layout/Layout';
import Validation from './views/forms/validation/Validation';
import CoreUIIcons from './views/icons/coreui-icons/CoreUIIcons';
import Flags from './views/icons/flags/Flags';
import Brands from './views/icons/brands/Brands';
import Alerts from './views/notifications/alerts/Alerts';
import Badges from './views/notifications/badges/Badges';
import Modals from './views/notifications/modals/Modals';
import Toasts from './views/notifications/toasts/Toasts';
import Widgets from './views/widgets/Widgets';
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
            <Route path="/dashboard" element={<Board />} >
              <Route path="" element={<Dashboard />} />
              <Route path="theme" element={<Colors />} />
              <Route path="theme/colors" element={<Colors />} />
              <Route path="theme/typography" element={<Typography />} />
              <Route path="base" element={<Cards />} />
              <Route path="base/accordion" element={<Accordion />} />
              <Route path="base/breadcrumbs" element={<Breadcrumbs />} />
              <Route path="base/cards" element={<Cards />} />
              <Route path="base/carousels" element={<Carousels />} />
              <Route path="base/collapses" element={<Collapses />} />
              <Route path="base/list-groups" element={<ListGroups />} />
              <Route path="base/navs" element={<Navs />} />
              <Route path="base/paginations" element={<Paginations />} />
              <Route path="base/placeholders" element={<Placeholders />} />
              <Route path="base/progress" element={<Progress />} />
              <Route path="base/spinners" element={<Spinners />} />
              <Route path="base/popovers" element={<Popovers />} />
              <Route path="base/tables" element={<Tables />} />
              <Route path="base/tooltips" element={<Tooltips />} />
              <Route path="buttons" element={<Buttons />} />
              <Route path="buttons/buttons" element={<Buttons />} />
              <Route path="buttons/dropdowns" element={<Dropdowns />} />
              <Route path="buttons/button-groups" element={<ButtonGroups />} />
              <Route path="charts" element={<Charts />} />
              <Route path="forms" element={<FormControl />} />
              <Route path="forms/form-control" element={<FormControl />} />
              <Route path="forms/select" element={<Select />} />
              <Route path="forms/checks-radios" element={<ChecksRadios />} />
              <Route path="forms/range" element={<Range />} />
              <Route path="forms/input-group" element={<InputGroup />} />
              <Route path="forms/floating-labels" element={<FloatingLabels />} />
              <Route path="forms/layout" element={<Layout />} />
              <Route path="forms/validation" element={<Validation />} />
              <Route path="icons" element={<CoreUIIcons />} />
              <Route path="icons/coreui-icons" element={<CoreUIIcons />} />
              <Route path="icons/flags" element={<Flags />} />
              <Route path="icons/brands" element={<Brands />} />
              <Route path="notifications/badges" element={<Badges />} />
              <Route path="notifications" element={<Alerts />} />
              <Route path="notifications/alerts" element={<Alerts />} />
              <Route path="notifications/modals" element={<Modals />} />
              <Route path="notifications/toasts" element={<Toasts />} />
              <Route path="widgets" element={<Widgets />} />
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
