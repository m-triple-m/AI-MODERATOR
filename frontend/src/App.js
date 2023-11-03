//import logo from './logo.svg';
import './App.css';

import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
import Navbar from './components/main/Navbar';
import Signup from './components/main/Signup';
import AboutUs from './components/main/AboutUs';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Admin from './components/admin';
import ManageUser from './components/admin/ManageUser';
import UpdateUser from './components/admin/UpdateUser';

import ToxicityPrediction from './components/Toxicity';
import ExtensionManager from './components/user/ExtensionManager';
import User from './components/user';
import ModeratorPlugin from './plugin/ModeratorPlugin';

import Extension from './components/user/ExtensionGen';
import Plugin from './components/user/PluginGen';
import Comment from './components/user/comment';
import Review from './components/user/review';
import UserAuth from './auth/UserAuth';
import ContactUs from './components/main/ContactUs';
import { Toaster } from 'react-hot-toast';
import CustomizePlugin from './components/user/CustomizePlugin';
import { useState } from 'react';
import UserProvider from './context/UserProvider';
import Dashboard from './components/user/Dashboard';
import UserProfile from './components/user/userProfile';
//import ALogin from "./components/admin/ALogin";
import AdminProvider from './context/AdminProvider';
import AdminAuth from './auth/AdminAuth';
import AdminProfile from './components/admin/AdminProfile';
import LoginAuth from './auth/LoginAuth';

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [currentAdmin, setCurrentAdmin] = useState(JSON.parse(sessionStorage.getItem('admin')));

  return (
    <div>
      <Toaster position="top-center" />
      <BrowserRouter>
        <AdminProvider currentAdmin={currentAdmin}>
          <UserProvider currentUser={currentUser}>
            <Routes>
              <Route path="/" element={<Navigate to="/main/home" />} />
              <Route path="/admin" element={<Navigate to="/main/adminlogin" />} />
              <Route path="main" element={<Main />}>
                <Route path="home" element={<Home />} />
                <Route path="login" element={<LoginAuth><Login /> </LoginAuth>} />
                <Route path="signup" element={<LoginAuth> <Signup /> </LoginAuth>} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="contactus" element={<ContactUs />} />
                {/* <Route path="adminlogin" element={<ALogin />} /> */}
              </Route>
              <Route
                path="admin"
                element={
                  <AdminAuth>
                    {' '}
                    <Admin />{' '}
                  </AdminAuth>
                }
              >
                {/* <Route path="admin" element={ <Admin /> }> */}
                <Route path="manage" element={<ManageUser />} />
                <Route path="profile" element={<AdminProfile />} />
                <Route path="update/:userid" element={<UpdateUser />} />
              </Route>

              <Route
                path="user"
                element={
                  <UserAuth>
                    {' '}
                    <User />{' '}
                  </UserAuth>
                }
              >
                <Route path="manageextension" element={<ExtensionManager />} />
                <Route path="modplugin" element={<ModeratorPlugin />} />

                <Route path="extensiongen" element={<Extension />} />
                <Route path="plugingen" element={<Plugin />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="custPlugin" element={<CustomizePlugin />} />
                <Route path="custPlugin/:pluginName" element={<CustomizePlugin />} />
                <Route path="comment" element={<Comment />} />
                <Route path="review" element={<Review />} />

                {/* <Route path="extensiongen" element={<Extension />} /> */}
                {/* <Route path="plugingen" element={<Plugin />} /> */}
                <Route path="comment" element={<Comment />} />
                <Route path="review" element={<Review />} />
                <Route path="profile" element={<UserProfile />} />
              </Route>
              <Route path="toxic" element={<ToxicityPrediction />} />
            </Routes>
          </UserProvider>
        </AdminProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
