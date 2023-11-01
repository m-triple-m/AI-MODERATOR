import { useFormik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom'
import { Tilt } from 'react-tilt'
import Swal from 'sweetalert2';
import './home.css';

const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 10,     // max tilt rotation (degrees)
  perspective: 800,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 800,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


const Home = () => {

  const feedbackForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      feedback: ''
    },
    onSubmit: async (values, { setSubmitting }) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/feedback/add', {
        method: 'POST',
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
        // navigate('/main/Login');
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    },
    // validationSchema: SignupSchema,

  });






  return (

    <div>

      {/* Header */}
      <>
        <header style={{backgroundColor: '#010003'}}>
          <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <img className='w-100' src="https://cdn.dribbble.com/users/214929/screenshots/4967879/ai-loader-opt.gif" alt="" />
            </div>
            <div className="col-md-6 my-auto">
              <p className="hero-title">
                AI
              </p>
              <p className='hero-sub-title'>
              Moderator
              </p>
              <p className='fs-4 text-white'>Moderate your Website Content and in your Browser with no Effort</p>
            </div>
          </div>
          </div>
        </header>
      </>
      {/* Header */}

      {/* Benefits */}
      <>
        <div className="container ">
          {/* Section */}
          <section>
            <div className='heading'>
              <h3 className="mt-5 mb-3 text-center display-3">
                <span><b>TOOLS OF AI MODERATOR </b></span>
              </h3>
            </div>

            {/* Grid row */}

            <div className="row">
              <Tilt options={defaultOptions} className="col-md-6">

                <div className="card">
                  <img
                    src="https://media.kasperskydaily.com/wp-content/uploads/sites/36/2012/11/05101446/browser-plugin.jpg"
                    className="card-img-top"
                    alt="Fissure in Sandstone"


                  />
                  <div className="card-body">
                    <h5 className="card-title">Extension</h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      Extensions are small software programs that customize the browsing experience. They enable users to tailor Chrome functionality and behavior to individual needs or preferences. They are built on web technologies such as HTML, JavaScript, and CSS.
                    </p>

                  </div>


                </div>
              </Tilt>
              <Tilt options={defaultOptions} className="col-md-6" >

                <div className="card">
                  <img
                    src="https://media.kasperskydaily.com/wp-content/uploads/sites/36/2012/11/05101446/browser-plugin.jpg"
                    className="card-img-top"
                    alt="Fissure in Sandstone"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Plugins</h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      Plugins are software that adds capabilities to an existing program without impacting that program's code. These pieces of software effectively "plug in" to existing operational frameworks, allowing users to get the features they want.
                    </p>

                  </div>
                </div>


              </Tilt>
            </div>

            {/* Grid row */}
          </section>
          {/* Section */}
        </div>
      </>
      {/* Benefits */}

      {/* About Us */}
      <>
        <div className='mb-5'>
          <div style={{ display: "none" }} />
          <div>
            <div data-draggable="true" style={{ position: "relative" }}>
              {/**/}
              {/**/}
              <section
                draggable="false"
                className="overflow-hidden pt-0"
                data-v-271253ee=""
              >
                <section>
                  {" "}
                  {/* Jumbotron */}
                  <div className="py-2 text-center" style={{ backgroundColor: '#f6feff' }}>
                    <div className="container pb-md-5">
                      <div className="row d-flex justify-content-center">
                        <div className="header-text col-lg-10">
                          <div className='heading'>
                            <h3 className="mt-5 mb-3 display-3">
                              <span>What is use of AI-MODERATOR?</span>
                            </h3>
                          </div>

                          <div className='content'>
                            <p className="mb-5 justify-content-between" style={{ textAlign: "justify" }}>
                              AI or automated tools can offer some advantages over human moderation, such as speed, scalability, consistency, and cost-effectiveness. AI can analyze large volumes of data, detect patterns and anomalies, and flag or remove inappropriate or harmful content based on predefined rules or criteria.
                            </p>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* Jumbotron */}
                </section>
              </section>
              {/**/}
            </div>
          </div>
        </div>
      </>
      {/* About Us */}


      {/* Feedback Form */}
      <div className='mb-5' >
        <div id="feedback-form-wrapper " align="right">
          <div id="icon" className='position-fixed top-50 ms-3 translate-middle'>
            <button
              style={{ backgroundColor: 'black', transform: 'rotateZ(-90deg)', color: 'white' }}
              type="button"
              className="btn btn-sm rounded-4"
              data-mdb-toggle="modal"
              data-mdb-target="#exampleModal"


            >
              Feedback
            </button>
          </div>
          <div id="feedback-form-modal">
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={{ backgroundColor: '#96CBFA' }}>
                  <div className="d-md-flex justify-content-md-end mt-2 me-2">
                    <button
                      type="button"
                      className="btn-close"
                      data-mdb-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <form className="feedback-form mx-1 mx-md-4 text-black" onSubmit={feedbackForm.handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-5">
                        <div className="flex-fill mb-0">
                          <div className='mb-5'>
                            <h3>
                              How helpful was this?
                            </h3>
                          </div>
                          <div className='mb-4'>
                            <input
                              type="text"
                              id="name"
                              name='name'
                              className="form-control form-control-lg"
                              placeholder="Enter Full Name"
                              value={feedbackForm.values.name}
                              onChange={feedbackForm.handleChange}
                            />
                          </div>
                          <div className='mb-4'>
                            <input
                              type="email"
                              id="email"
                              name='email'
                              className="form-control form-control-lg"
                              placeholder="Enter Email Address"
                              value={feedbackForm.values.email}
                              onChange={feedbackForm.handleChange}
                            />
                          </div>

                          <div className='mb-5'>
                            {/* Text area fields */}
                            <textarea class="form-control" id="feedback" rows="4"
                              placeholder='Enter message....'
                              name='feedback'
                              value={feedbackForm.values.feedback}
                              onChange={feedbackForm.handleChange}
                            ></textarea>
                          </div>
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                            style={{ borderRadius: "10px", marginLeft: '0px' }}
                          >
                            Send Your Feedback &nbsp;
                            <i className="far fa-paper-plane" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feedback Form */}



      <>
        <div className='mb-10'>
          <div style={{ display: "none" }} />
          <div>
            <div data-draggable="true" style={{ position: "relative" }}>
              {/**/}
              {/**/}
              <section
                draggable="false"
                className="overflow-hidden pt-0"
                data-v-271253ee=""
              >
                <section className="overflow-hidden">
                  {" "}
                  {/* Background image */}
                  <div
                    className="px-4 py-5 px-md-5 text-center bg-image"
                    style={{
                      backgroundImage: 'url("/images/background-img1.jp")',
                      height: 450,
                      backgroundSize: "cover",
                      backgroundPosition: "50% 50%",
                      backgroundAttachment: "fixed",
                      position: "relative"
                    }}
                    aria-controls="#picker-editor"
                  >
                    <div
                      className=" container mask"
                      style={{ backgroundColor: "rgb(191, 218, 217)" }}
                    >
                      <div className="container h-80">
                        <div className="row d-flex justify-content-center align-items-center h-80">
                          <div className="col-lg-10">
                            <div className="content pb-5">
                              <h1 className="mt-5 mb-5 display-3">
                                {" "}
                                <span><h1>To create a browser extension or plugin!</h1></span> {" "}

                              </h1>{" "}
                              <Link
                                className="btn btn-primary py-3 px-5 mb-5 mb-md-3 me-md-2"
                                to="/main/signup"
                                role="button"
                                aria-controls="#picker-editor"
                              >
                                Get Started
                              </Link>{" "}


                            </div>
                            <span><h4>Already registered? </h4>
                              <Link
                                className="btn btn-primary py-3 px-5 mb-5 mb-md-3 me-md-2"
                                to="/main/login"
                                role="button"
                                aria-controls="#picker-editor"
                              >
                                Login
                              </Link>{" "} </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className=""
                    style={{
                      height: 30,
                      marginTop: "-30px",
                      transform: "scale(2)",
                      transformOrigin: "top center",
                      color: "#fff"
                    }}
                  >
                  </div>{" "}
                  {/* Background image */}
                </section>
              </section>
              {/**/}
            </div>
          </div>
        </div>
      </>

      <div className='mb-10'>
        <div data-draggable="true" style={{ position: "relative" }}>
          {/**/}
          {/**/}
          <section
            draggable="false"
            className="container"
            data-v-271253ee=""
          >
            <section>
              <div className='heading'>
                <h1 className='text-center display-3 fw-bold mb-3'>Why AI Moderator</h1>
                {/* <h2 className="mb-3 text-center display-3 bg-info">
                  <span>NEEDS OF AI-MODERATOR</span>
                </h2> */}
              </div>


              {/* row - 1 */}
              <div className="row gx-lg-5 mb-5 align-items-center ">
                <div className="col-md-6 mb-4 mb-md-0">
                  {" "}
                  <img
                    src="/ai5.webp"
                    className="w-100 shadow-4-strong rounded-7 mb-4"
                    alt=""
                    aria-controls="#picker-editor"
                    height={250}
                    width={300}
                  />{" "}
                </div>
                <div className="content text-center col-md-6 mb-4 mb-md-0">
                  <h4 className="fw-bold mb-3">
                    <strong>Scalability And Speed</strong>
                  </h4>
                  <p className="align-items-justify mb-4" style={{ textAlign: "justify" }}>
                    According to World Economic Forum estimations, by 2025, the amount of data created by humans each day will be about 463 Exabyte (one Exabyte is equal to one billion gigabytes), which equates to more than 200 million DVDs per day. With such
                    large quantities of user-generated content, humans will hardly be able to keep pace. AI, on the other hand, can provide scalable handling of data across multiple channels and in real time. AI can excel humans in terms of the sheer size and volume of the user-generated content it can analyze and detect.
                  </p>
                </div>
              </div>
              {/* row - 1 */}

              {/* row - 2 */}
              <div className="row gx-lg-5 mb-5 flex-lg-row-reverse align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  {" "}
                  <img
                    src="/ai6.webp"
                    className="w-100 shadow-4-strong rounded-7 mb-4"
                    alt=""
                    aria-controls="#picker-editor"
                    height={250}
                    width={300}
                  />{" "}
                </div>
                <div className="content text-center col-md-6 mb-4 mb-md-0">
                  <h4 className="fw-bold mb-3">
                    <strong>Automation And Content Filtering</strong>
                  </h4>
                  <p className="align-items-justify mb-4" style={{ textAlign: "justify" }}>
                    Given the immense volume of user-generated data, moderating content manually becomes a challenge that needs scalable solutions. AI-backed content moderation can automatically analyze texts, visuals and videos for toxic content. AI also can filter and classify content that’s considered inappropriate for the given case and helps prevent it from being posted, thereby supporting human moderators in the content review process and helping brands keep their content clean and safe.
                  </p>{" "}
                </div>
              </div>
              {/* row - 2 */}

              {/* row - 3 */}
              <div className="row gx-lg-5 mb-5 align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  {" "}
                  <img
                    src="/ai7.jpg"
                    className="w-100 shadow-4-strong rounded-7 mb-4"
                    alt=""
                    aria-controls="#picker-editor"
                    height={250}
                    width={300}
                  />{" "}
                </div>
                <div className="content text-center col-md-6 mb-4 mb-md-0">
                  <h4 className="fw-bold mb-3">
                    <strong>Less Exposure To Harmful Content</strong>
                  </h4>
                  <p className="align-items-justify mb-4" style={{ textAlign: "justify" }}>
                    Human moderators deal with challenging content on a daily basis, and many times, their intervention is questioned by users who see human moderators’ decisions as biased. Passing through massive quantities of indecent content makes moderation a tough job for humans that can even cause negative psychological effects. AI can assist human moderators by filtering suspicious content for human review, thus preventing content moderation teams from having to go through all the content reported by users and reducing human exposure to disturbing content. AI can make human labor more productive, helping people manage online content faster, more effectively and with fewer errors.
                  </p>{" "}
                </div>



              </div>
              {/* row - 3 */}

              {/* row - 4 */}

              <div className="row gx-lg-5 mb-5 flex-lg-row-reverse align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  {" "}
                  <img
                    src="/ai8.jpg"
                    className="w-100 shadow-4-strong rounded-7 mb-4"
                    alt=""
                    aria-controls="#picker-editor"
                    height={250}
                    width={300}
                  />{" "}
                </div>
                <div className="content text-center col-md-6 mb-4 mb-md-0">
                  <h4 className="fw-bold mb-3">
                    <strong>Moderation Of Live Content</strong>
                  </h4>
                  <p className="align-items-justify mb-4" style={{ textAlign: "justify" }}>
                    AI could also be used in content moderation to analyze live content. Moderating real-time data is crucial to provide users with a safe user experience. AI can help in livestream content moderation by analyzing content instantly and automatically detecting any harmful cases before they go live.
                  </p>{" "}
                </div>
              </div>
              {/* row - 4 */}

            </section>
          </section>
          {/**/}
        </div>
      </div>




      {/* Team Members */}
      <>
        <div className="mb-10">
          <div data-draggable="true" style={{ position: "relative" }}>
            {/**/}
            {/**/}
            <section draggable="false" className="container" data-v-271253ee="">
              <section className="">
                <div className='heading'>
                <h1 className='text-center display-3 fw-bold mb-3'>Meet Our Team</h1>
                  {/* <h2 className="mb-3 text-center display-3 bg-info">
                    <span>Meet Our Team</span>
                  </h2> */}
                </div>
                <div className='sub-heading'>
                  <h4 className="mb-10 text-center ">
                    <span>Faces behind our success</span>
                  </h4>
                </div>

                <div className="row text-center gx-lg-5">

                  <div className="col-lg-6 mb-10 mb-lg-0 hover-zoom">
                    <div className="card rounded-7 shadow-2-strong h-100">
                      <div
                        className="d-flex justify-content-center"
                        style={{ marginTop: "-75px" }}
                      >
                        {" "}
                        <img
                          src="/yuvi.jpeg"
                          className="rounded-circle shadow-5-strong"
                          alt=""
                          style={{ width: 150, height: 150 }}
                          aria-controls="#picker-editor"
                        />{" "}
                      </div>
                      <div className="card-body">
                        <h4 className="card-tittle fw-bold mb-3">
                          <strong>Yuvaraj</strong>
                        </h4>
                        <h6 className="mb-3 ">Frontend Developer</h6>
                        {/* icons */}
                        <div>
                          <button type="button" className="btn btn-floating  mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-floating  mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-instagram" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-floating mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-linkedin" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-floating mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-github" />
                            </a>
                          </button>
                        </div>
                        {/* icons */}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 mb-10 mb-lg-0 hover-zoom">
                    <div className="card rounded-7 shadow-2-strong h-100">
                      <div
                        className="d-flex justify-content-center"
                        style={{ marginTop: "-75px" }}
                      >
                        {" "}
                        <img
                          src="/avaneesh.jpeg"
                          className="rounded-circle shadow-5-strong"
                          alt=""
                          style={{ width: 150, height: 150 }}
                          aria-controls="#picker-editor"
                        />{" "}
                      </div>
                      <div className="card-body">
                        <h4 className="card-tittle fw-bold mb-3">
                          <strong>Avaneesh Tiwari</strong>
                        </h4>
                        <h6 className="mb-3">Backend Developer</h6>
                        {/* icons */}
                        <div>
                          <button type="button" className="btn btn-floating  mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-floating  mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-instagram" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-floating  mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-linkedin" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-floating  mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-github" />
                            </a>
                          </button>
                        </div>
                        {/* icons */}
                      </div>
                    </div>
                  </div>

                </div>

              </section>
            </section>
            {/**/}
          </div>
        </div>
      </>
      {/* Team Members */}

      {/* FAQ */}
      <>
        {<div className="container mb-8">

          <section>
            <div className='heading'>
              <h2 className="mb-3 text-center display-3">
                <span>FAQ</span>
              </h2>
            </div>
            <div className='sub-heading'>
              <h4 className="mb-8 text-center">
                <span>Frequently Asked Questions</span>
              </h4>
            </div>
            <div className="accordion" id="basicAccordion">
              <div className="accordion-item rounded-7 shadow-4-strong">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button rounded-7 collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                   What is content moderator ?
                  </button>
                </h2>
                <div
                  id="basicAccordionCollapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-mdb-parent="#basicAccordion"
                  style={{}}
                >
                  <div className="accordion-body align-item-justify">
                  Content moderators play a vital role in ensuring the safety, integrity, and positive user experience on online platforms by upholding community standards and enforcing content guidelines
                  </div>
                </div>
              </div>
              <div className="accordion-item rounded-7 shadow-4-strong">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button rounded-7 collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What is AI content Moderator ?
                  </button>
                </h2>
                <div
                  id="basicAccordionCollapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-mdb-parent="#basicAccordion"
                  style={{}}
                >
                  <div className="accordion-bodylign-item-justify">
                  AI content moderation systems analyze various types of content, including text, images, videos, and audio, to detect patterns and characteristics that may indicate violations of community guidelines or terms of service. These systems can be trained on large datasets of labeled content to learn and recognize different categories of problematic content, such as hate speech, nudity, violence, spam, or other forms of inappropriate or harmful material.
                  </div>
                </div>
              </div>
              <div className="accordion-item rounded-7 shadow-4-strong">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button rounded-7 collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What is use of AI Content Moderator ?
                  </button>
                </h2>
                <div
                  id="basicAccordionCollapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-mdb-parent="#basicAccordion"
                  style={{}}
                >
                  <div className="accordion-body lign-item-justify">
                  AI content moderation serves several purposes and offers various benefits for platforms and online communities. <br/> <br/>
                  Here are some key uses of AI content moderation:<br/> <br/>

Scalability: AI content moderation enables platforms to handle large volumes of user-generated content efficiently. With the ability to process content at a rapid pace, AI systems can assist in reviewing and filtering massive amounts of data, ensuring a more streamlined moderation process.<br/> <br/>

Efficient Flagging: AI algorithms can quickly flag potentially problematic content for further review by human moderators. By automating the initial screening process, AI content moderation helps prioritize the content that requires human attention, allowing moderators to focus on complex or ambiguous cases.<br/> <br/>

Faster Response Times: AI content moderation can significantly reduce response times for addressing violations and enforcing community guidelines. By automating the identification of violating content, platforms can take prompt action, such as removing or restricting access to the content, issuing warnings, or applying appropriate penalties.<br/> <br/>

Consistency: AI content moderation helps achieve more consistent application of community guidelines and terms of service across a platform. Algorithms follow predefined rules and criteria, reducing the potential for human biases or variations in judgment. This helps create a more uniform and predictable moderation experience for users.<br/> <br/>

User Protection: AI content moderation plays a crucial role in protecting users from harmful or inappropriate content. By quickly identifying and flagging content that violates community standards, AI systems contribute to maintaining a safer and more positive user experience. This is particularly important for preventing the dissemination of hate speech, harassment, violence, or explicit material.<br/> <br/>

Moderation at Scale: With the ever-increasing amount of user-generated content, AI content moderation is essential for platforms to moderate content effectively at scale. It assists in handling the sheer volume of posts, comments, and media files posted by users, ensuring that platforms can maintain a healthy and safe environment for their communities.<br/> <br/>

Cost-Effectiveness: AI content moderation can be a cost-effective solution compared to relying solely on manual moderation. While human moderators are still necessary for complex cases and final decision-making, AI systems can significantly reduce the workload and allow platforms to allocate their human moderation resources more efficiently.<br/> <br/>
                  </div>
                </div>
              </div>
              <div className="accordion-item rounded-7 shadow-4-strong">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button rounded-7 collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How can AI content moderation systems be trained to recognize and flag different types of violating content?
                  </button>
                </h2>
                <div
                  id="basicAccordionCollapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-mdb-parent="#basicAccordion"
                  style={{}}
                >
                  <div className="accordion-body">
                  AI content moderation systems can be trained to recognize and flag different types of violating content through a combination of supervised learning, data labeling, and feature engineering.<br/>
                   Here's a general process for training AI moderation systems:<br/> <br/>

Data Collection: Gather a diverse and representative dataset of labeled content that includes examples of different types of violating content you want the AI system to detect. This dataset should cover a range of violations such as hate speech, nudity, violence, spam, etc.<br/> <br/>

Data Labeling: Assign labels to each sample in the dataset based on the type of violation it represents. Human moderators or annotators review the content and apply appropriate labels. The labeled data serves as the training set for the AI model.<br/> <br/>

Feature Extraction: Extract relevant features from the labeled data to represent the content effectively. These features can include textual characteristics, image attributes, audio properties, or other relevant metadata. The choice of features depends on the type of content being moderated.<br/> <br/>

Model Selection: Choose a machine learning algorithm or model architecture that suits the content moderation task. Common choices include convolutional neural networks (CNNs) for images, recurrent neural networks (RNNs) for text, or a combination of multiple models for multi-modal content.<br/> <br/>

Training the Model: Feed the labeled data and extracted features into the chosen AI model for training. The model learns to associate the features with the corresponding violation labels during this phase. The training process involves optimizing the model's parameters to minimize the prediction errors.<br/> <br/>

Validation and Evaluation: Set aside a portion of the labeled dataset as a validation set to monitor the model's performance during training. Regularly evaluate the model's accuracy, precision, recall, and other relevant metrics to assess its effectiveness in recognizing and flagging violating content.<br/> <br/>

Iterative Refinement: Analyze the model's performance and identify areas of improvement. Address any false positives (incorrectly flagging non-violating content) or false negatives (failing to flag violating content) by adjusting the model's parameters, fine-tuning the training process, or updating the dataset with new labeled examples.<br/> <br/>

Ongoing Updates and Monitoring: Continuously update the AI model with new labeled data and retrain it periodically to adapt to emerging content patterns or evolving violation types. Monitor the model's performance in real-world scenarios and make adjustments as needed.<br/> <br/>
                  </div>
                </div>
              </div>
              
            </div>
          </section>
        </div>}
      </>
      {/* FAQ */}

    </div>

  )
}

export default Home