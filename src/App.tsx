import React from "react";
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import * as io from 'socket.io-client'
import Home from "./page/Home";
import './normalize.css'
import './index.css'
import JobPage from "./page/JobPage";
import NewsPage from "./page/NewsPage";
import PracticPage from "./page/PracticPage";
import EmployersAuthPage from "./page/employers/EmployersAuthPage";
import InfoNews from "./page/InfoNews";
import FormAuthentication from "./page/FormAuthentication";
import FormRegistration from "./page/FormRegistration";
import Person from "./page/person/Person";
import Notifications from "./page/person/Notifications";
import Response from "./page/person/Response";
import Chat from "./page/person/Chat";
import Info from "./page/person/Info";
import Specialization from "./page/person/Specialization";
import Experiences from "./page/person/Experiences";
import Educations from "./page/person/Educations";
import Contact from "./page/person/Contact";
import EventPage from "./page/EventPage";
import Test from "./components/Test";
import Summary from "./page/person/Summary";
import University from "./page/person/University";
import Additional from "./page/person/Additional";
import ReAdditional from "./page/person/ReAdditional";
import ReUniversity from "./page/person/ReUniversity";
import ReSummary from "./page/person/ReSummary";
import ViewItem from "./page/ViewItem";
import EmployersRegisterPage from "./page/employers/EmployersRegisterPage";
import Home1 from "./page/employers/Home";
import NotificationEmployers from "./page/employers/NotificationEmployers";
import EmployersCreate from "./page/employers/EmployersCreate";
import EmployersChat from "./page/employers/EmployersChat";
import EmployersCreateJob from "./page/employers/EmployersCreateJob";
import EmployersAbout from "./page/employers/EmployersAbout";
import EmployersContact from "./page/employers/EmployersContact";
import EmployersRefactorJob from "./page/employers/EmployersRefactorJob";
import EmployersViewCompany from "./page/employers/EmployersViewCompany";
import ViewSummary from "./page/person/ViewSummary";
const socket = io.connect('http://localhost:5000')

function App() {
  const Path = () => {
    const routes = useRoutes([
      {path: "/", element: <Home />},
      {path: "/sign", element: <FormAuthentication socket={socket} />},
      {path: "/registration", element: <FormRegistration />},
      // News
      {path: "/news", element: <NewsPage />},
      {path: "/news/:id", element: <InfoNews />},
      // Job
      {path: "/job", element: <JobPage />},
      {path: "/job/:id", element: <ViewItem typePage='job' />},
      // Practic
      {path: "/practic", element: <PracticPage />},
      {path: "/practic/:id", element: <ViewItem typePage='practic' />},
      // Event
      {path: "/event", element: <EventPage />},
      {path: "/event/:id", element: <ViewItem typePage='event' />},
      // Employers
      {path: "/employers/auth", element: <EmployersAuthPage />},
      {path: "/employers/register", element: <EmployersRegisterPage />},
      {path: "/employers/home", element: <Home1 />},
      {path: "/employers/notifications", element: <NotificationEmployers />},
      {path: "/employers/create_job", element: <EmployersCreate />},
      {path: "/employers/chat", element: <EmployersChat socket={socket} />},
      {path: "/employers/create_job_card", element: <EmployersCreateJob />},
      {path: "/employers/info", element: <EmployersAbout />},
      {path: "/employers/contact", element: <EmployersContact />},
      {path: "/employers/refactor_job", element: <EmployersRefactorJob />},
      {path: "/employers/view_company", element: <EmployersViewCompany />},
      // Person
      {path: "/person", element: <Person />},
      {path: "/person/notifications", element: <Notifications />},
      {path: "/person/response", element: <Response />},
      {path: "/person/chat", element: <Chat socket={socket} />},
      {path: "/person/info", element: <Info />},
      {path: "/person/specialization", element: <Specialization />},
      {path: "/person/experiences", element: <Experiences />},
      {path: "/person/educations", element: <Educations />},
      {path: "/person/contact", element: <Contact />},
      {path: "/person/experiences/summary", element: <Summary />},
      {path: "/person/educations/university_educations", element: <University />},
      {path: "/person/educations/additional_educations", element: <Additional />},
      {path: "/person/educations/readditional_educations", element: <ReAdditional />},
      {path: "/person/educations/reuniversity_educations", element: <ReUniversity />},
      {path: "/person/educations/resummary", element: <ReSummary />},
      {path: "/person/view_summary", element: <ViewSummary />},
      // Chat
      {path: "/person/chat/:id", element: <Chat socket={socket} />},
      //
      {path: "/test", element: <Test socket={socket} />},
      {path: "*", element: <NewsPage />},
    ])
    return routes
  }

  return (
    <React.Fragment>
      <Router>
        <Path />
      </Router>
    </React.Fragment>
  );
}

export default App;
