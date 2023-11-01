import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import app_config from '../config';

const AdminContext = createContext();

const AdminProvider = ({ children }) => {

  const [currentAdmin, setCurrentAdmin] = useState(JSON.parse(sessionStorage.getItem('admin')));

  const [loggedIn, setLoggedIn] = useState();
  const navigate = useNavigate();
  const { apiUrl } = app_config;

  useEffect(() => {
    setCurrentAdmin(JSON.parse(sessionStorage.getItem('admin')));
  }, [loggedIn])
  

  const logout = () => {
    sessionStorage.removeItem('admin');
    setLoggedIn(false);
    navigate('/main/login');
  };

//   const updateUser = async (userdata, cb) => {

//     const res = await fetch(apiUrl + '/user/update/' + currentUser._id, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(userdata)
//     });

//     const data = await res.json();
//     sessionStorage.setItem('user', JSON.stringify(data));
//     console.log(data);
//     cb(data);
//   };

//   return <AdminContext.Provider value={{ loggedIn, setLoggedIn, logout, updateUser }}>{children}</AdminContext.Provider>;
// };
  return <AdminContext.Provider value={{ loggedIn, setLoggedIn, logout}}>{children}</AdminContext.Provider>;
};

export const useAdminContext = () => useContext(AdminContext);

export default AdminProvider;
