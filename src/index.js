import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import Clock from './components/clock/Clock';
// import CommentList from './components/comment/CommentList'
// import NotificationList from './components/notification/NotificationList';
// import Accomodate from './components/counter/Accomodate';
// import ConfirmButton from './components/confirm/ConfirmButton';
// import LandingPage from './components/toolbar/LandingPage';
// import AttendanceBook from './components/attendancebook/AttendanceBook';
// import SignUp from './components/signup/SignUp';
// import Calculator from './components/temperatureInput/Calculator';
// import ProfileCard from './components/card/ProfileCard';
import DarkOrLight from './components/themecontext/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Clock /> */}
    {/* <CommentList /> */}
    {/* <NotificationList /> */}
    {/* <Accomodate /> */}
    {/* <ConfirmButton /> */}
    {/* <LandingPage /> */}
    {/* <AttendanceBook /> */}
    {/* <SignUp /> */}
    {/* <Calculator /> */}
    {/* <ProfileCard /> */}
    <DarkOrLight />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
