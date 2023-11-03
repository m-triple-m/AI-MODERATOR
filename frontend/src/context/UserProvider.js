import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import app_config from '../config';

const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [loggedIn, setLoggedIn] = useState(currentUser!==null);
  const navigate = useNavigate();
  const { apiUrl } = app_config;

  useEffect(() => {
    setCurrentUser(JSON.parse(sessionStorage.getItem('user')));
  }, [loggedIn])
  

  const logout = () => {
    sessionStorage.removeItem('user');
    setLoggedIn(false);
    navigate('/main/login');
  };

  const updateUser = async (userdata, cb) => {

    const res = await fetch(apiUrl + '/user/update/' + currentUser._id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userdata)
    });

    const data = await res.json();
    sessionStorage.setItem('user', JSON.stringify(data));
    console.log(data);
    cb(data);
  };

  return <UserContext.Provider value={{ loggedIn, setLoggedIn, logout, updateUser, setCurrentUser }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
