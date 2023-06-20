import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import MainPage from './components/pages/MainPage';
import GroupItemPage from './components/pages/GroupItemPage';
import RequestCreateNewGroupPage from './components/pages/RequestCreateNewGroupPage';
import AboutPage from './components/pages/AboutPage';
import LoginPage from './components/pages/LoginPage';
import RegisterLicencePage from './components/pages/RegisterLicencePage';
import RegisterPage from './components/pages/RegisterPage';
import GroupPage from './components/pages/GroupPage';
import AddNewGroupItemPage from './components/pages/AddNewGroupItemPage';
import UserPage from './components/pages/UserPage';
import AdminPage from './components/pages/AdminPage';
import reportWebVitals from './reportWebVitals';

import './i18n';
import './index.css';

function BasicLayout() {
  return (
    <>
      <Header />
      <div className="root_border">
          <div className="root_content">
            <Outlet />
          </div>
      </div>
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <BasicLayout />}>
          <Route index element={<MainPage />} />
          <Route path="requestCreateNewGroup" element={<RequestCreateNewGroupPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registerLicence" element={<RegisterLicencePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="group/:id" element={<GroupPage />} />
          <Route path="forumItem" element={<GroupItemPage />} />
          <Route path="addNewGroupItem/:id" element={<AddNewGroupItemPage />} />
          <Route path="user/:id" element={<UserPage />} />
          <Route path="admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
