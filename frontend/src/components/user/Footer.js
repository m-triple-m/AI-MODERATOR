import React from 'react'

const Footer = () => {
    return (
        <div>
            <>
                {/* Footer */}
                <footer className="text-center text-lg-start text-muted" style={{backgroundColor:'black'}}>
                    {/* Section: Social media */}
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        {/* Left */}
                        <div className="me-5 d-none d-lg-block text-white">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        {/* Left */}
                        {/* Right */}
                        <div>
                            <a href="" className="me-4 link-secondary  text-white ">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="" className="me-4 link-secondary text-white">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="" className="me-4 link-secondary text-white">
                                <i className="fab fa-google" />
                            </a>
                            <a href="" className="me-4 link-secondary text-white">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="" className="me-4 link-secondary text-white">
                                <i className="fab fa-linkedin" />
                            </a>
                            <a href="" className="me-4 link-secondary text-white">
                                <i className="fab fa-github" />
                            </a>
                        </div>
                        {/* Right */}
                    </section>
                    {/* Section: Social media */}
                    {/* Section: Links  */}
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            {/* Grid row */}
                            <div className="row mt-3">
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* Content */}
                                    <h6 className="text-uppercase fw-bold mb-4  text-white">
                                        <i className="fas fa-gem me-3 text-secondary  text-white" />
                                        AI MODERATOR
                                    </h6>
                                    <p className=' text-white'  style={{textAlign: "justify"}}>
                                    AI-powered technologies have made their mark on a lot of user-oriented services. Google leverages machine learning to predict the search intent of the users and offer them results with great accuracy. 
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4  text-white">Technology</h6>
                                    <p className=' text-white'>
                                        <a href="#!" className="text-reset">
                                            ReactJS
                                        </a>
                                    </p>
                                    <p className=' text-white'>
                                        <a href="#!" className="text-reset">
                                            Node.js
                                        </a>
                                    </p>
                                    <p className=' text-white'>
                                        <a href="#!" className="text-reset">
                                            Express.js
                                        </a>
                                    </p>
                                    <p className=' text-white'>
                                        <a href="#!" className="text-reset">
                                            MongoDB
                                        </a>
                                    </p>
                                </div>
                                
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4 text-white">Contact</h6>
                                    <p className=' text-white'>
                                        <i className="fas fa-home me-3 text-secondary text-white" /> BBD UNIVERSITY LUCKNOW UTTAR PRADESH, 226028, UP, INDIA
                                        
                                    </p>
                                    <p className=' text-white'>
                                        <i className="fas fa-envelope me-3 text-white" />
                                        aimoderator@example.com
                                    </p>
                                    <p className=' text-white'>
                                        <i className="fas fa-phone me-3 text-white" /> +91-8840290552
                                    </p>
                                
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                        </div>
                    </section>
                    {/* Section: Links  */}
                    {/* Copyright */}
                    <div
                        className="text-center p-4  text-white"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
                    >
                        © 2023 Copyright:
                        <a className="text-reset fw-bold" href="#">
                            AI-MODERATOR 
                        </a>
                    </div>
                    {/* Copyright */}
                </footer>
                {/* Footer */}
            </>

        </div>
    )
}

export default Footer
