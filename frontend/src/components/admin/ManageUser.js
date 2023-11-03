import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageUser = () => {
  const [userList, setUserList] = useState([]);

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const fetchUserData = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user/getall`);
    const data = await res.json();
    console.log(data);
    setUserList(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const deleteUser = async (id) => {
    console.log(id);
    const res = await fetch(`${process.env.REACT_APP_API_URL}/user/delete` + id, { method: 'DELETE' });
    if (res.status === 200) {
      fetchUserData();
    }
  }

  return (
    <div className="h-100">
     <section className="col-log-6 pt-3" style={{ backgroundImage: 'url("/hi.avif")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="container"  >
        {/* <h3>Loggedin as {currentUser.name}</h3> */}
        <h1 style={{color:"white" ,textAlign: "center"}}>User Details</h1>
        <hr />
        <table className="table table-striped">
          <thead>
            <tr style={{color:"white"}}>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th colSpan={2} className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user._id}>
                <td style={{color:"white"}}>{user._id}</td>
                <td style={{color:"white"}}>{user.name}</td>
                <td style={{color:"white"}}>{user.email}</td>
                <td style={{color:"white"}}>{user.password}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
                <td>
                  <Link to={'/admin/update/' + user._id}><button className="btn btn-primary" >
                    <i class="fas fa-edit"></i>
                  </button></Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </section>
    </div>
  );
};

export default ManageUser;