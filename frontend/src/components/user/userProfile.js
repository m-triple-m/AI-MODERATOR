import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const UserProfile = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [userData, setUserData] = useState('');

    const userForm = useFormik({
        initialValues: currentUser ? currentUser : {
            name: '',
            email: '',
            number: '',
            address: '',
        },
        onSubmit: async (values) => {
            console.log(values)
            const res = await fetch('http://localhost:5000/user/update/' + currentUser._id, {
                method: 'PUT',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res.status);

            if (res.status === 200) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500,
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }
        }
    })

    const fetchProfileData = async () =>  {
        const res = await fetch('http://localhost:5000/user/getbyid/' + currentUser._id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setUserData(data);
        }
    }

    useEffect(() => { 
        fetchProfileData();
     }, [])



    return (
        <div>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        className="rounded-circle img-fluid"
                                        style={{ width: 150 }}
                                    />
                                    <h5 className="my-3">{currentUser.name}</h5>
                                    <p className="text-muted mb-1">{currentUser.email}</p>
                                    <p className="text-muted mb-4">{currentUser.number}</p>

                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-0">
                                    <ul className="list-group list-group-flush rounded-3">
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fas fa-globe fa-lg text-warning" />
                                            <p className="mb-0">https://aimoderator.com</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i
                                                className="fab fa-github fa-lg"
                                                style={{ color: "#333333" }}
                                            />
                                            <p className="mb-0">aimoderator</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i
                                                className="fab fa-twitter fa-lg"
                                                style={{ color: "#55acee" }}
                                            />
                                            <p className="mb-0">@aimoderator</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i
                                                className="fab fa-instagram fa-lg"
                                                style={{ color: "#ac2bac" }}
                                            />
                                            <p className="mb-0">aimoderator</p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i
                                                className="fab fa-facebook-f fa-lg"
                                                style={{ color: "#3b5998" }}
                                            />
                                            <p className="mb-0">aimoderator</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">

                                <div className="card-body">
                                    <h1 className='mb-3 text-center'>Update Profile</h1>
                                    <form onSubmit={userForm.handleSubmit}>
                                        <div className="row mb-3">
                                            <label htmlFor="name" className="col-sm-3 col-form-label">
                                                Name
                                            </label>
                                            <div className="col-sm-9">
                                                <input type="text" id="name" onChange={userForm.handleChange} value={userForm.values.name} className="form-control" required="" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="email" className="col-sm-3 col-form-label">
                                                Email
                                            </label>
                                            <div className="col-sm-9">
                                                <input type="email" id="email" onChange={userForm.handleChange} value={userForm.values.email} className="form-control" required="" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="number" className="col-sm-3 col-form-label">
                                                Phone Number
                                            </label>
                                            <div className="col-sm-9">
                                                <input type="tel" id="number" onChange={userForm.handleChange} value={userForm.values.number} className="form-control" required="" />
                                            </div>
                                        </div>



                                        <div className="row">
                                            <div className="col-sm-9 offset-sm-3">
                                                <button type="submit" className="btn btn-primary">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                            <p className="mb-4">
                                                <p className="text-primary font-italic me-1">
                                                    Extensions

                                                </p>
                                                <div className="progress rounded" style={{ height: 5 }}>
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "100%" }}
                                                        aria-valuenow={100}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>

                                            </p>
                                            <div className="row justify-content-between">
                                                <div className='col-md-8'>
                                                    <p>Number of Extensions Used</p>
                                                </div>
                                                <div className='col-md-4'>
                                                    <p className="h3">{currentUser.numExt}</p>
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                            <p className="mb-4">
                                                <p className="text-primary font-italic me-1">
                                                    Plugins

                                                </p>
                                                <div className="progress rounded" style={{ height: 5 }}>
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{ width: "100%" }}
                                                        aria-valuenow={100}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    />
                                                </div>

                                            </p>
                                            <div className="row justify-content-between">
                                                <div className='col-md-8'>
                                                    <p>Number of Plugins Used</p>
                                                </div>
                                                <div className='col-md-4'>
                                                <p className="h3">{currentUser.numPlugin}</p>
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default UserProfile
