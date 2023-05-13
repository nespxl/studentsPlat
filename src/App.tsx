import React from "react";
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import * as io from 'socket.io-client'
import Home from "./page/Home";
import './normalize.css'
import './index.css'
import JobPage from "./page/JobPage";
import NewsPage from "./page/NewsPage";
import PracticPage from "./page/PracticPage";
import EmployersPage from "./page/EmployersPage";
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
const socket = io.connect('http://localhost:5000')

function App() {
  const Path = () => {
    const routes = useRoutes([
      {path: "/", element: <Home />},
      {path: "/job", element: <JobPage />},
      {path: "/news", element: <NewsPage />},
      {path: "/practic", element: <PracticPage />},
      {path: "/employers", element: <EmployersPage />},
      {path: "/news/:id", element: <InfoNews />},
      {path: "/sign", element: <FormAuthentication />},
      {path: "/registration", element: <FormRegistration />},
      {path: "/event", element: <EventPage />},
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
      // Chat
      {path: "/person/chat/:id", element: <Chat socket={socket} />},
      //
      {path: "/test", element: <Test socket={socket} />},
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
