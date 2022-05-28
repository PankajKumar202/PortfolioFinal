import React, { Component, Fragment } from 'react';
import "./App.css";

const mailUrl = "https://mailerpk.herokuapp.com/sendingMsg"
class PortFolio extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
      msg: ""
    }
  }
  handleChange = (event) => {
    if (event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }
  sendMail = () => {
    let info = this.state;
    fetch(mailUrl, {
      method: "POST",
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    })
      .then((res) => res.json())
      .then((data) => {
        try {
          this.setState({
            msg: data.msg
          })
          console.log(data)
        } catch (error) {
          console.log("error", error)
          console.log(data)
        }
      })


  }


  App() {
    return (
      <Fragment>
        <div className="Wrapper">
          <div className="intro" id="intro1">
            <a href="https://drive.google.com/file/d/16rm0LLclWW33JnktoQPAsqCcTZtW2O89/view?usp=sharing" target="_blank">
              <button id="resbtn" type="button" className="btn" >Resume</button></a>
            <img id="profileImg" src="https://i.ibb.co/84Pkd43/Profile2.jpg" alt="Profile2" border="0" />
            <h1 className="intro-heading ">
              Hi,I'm
            </h1>
            <h1 className="intro-heading1">
              <br />Pankaj Kumar
            </h1>
            <p className="intro-paragraphs">
              I am a hard-working BCA graduate specialised in
              Computer Application with an Overall Cgpa of 7.7 out of 10.During my college
              i gained knowledge of <b>android app development</b> which increase a keen interest in me towards
              coding after that i find my interest in <b>full stack web development</b> so i choose MERN stack and did internship
              in edureka.Now, I developed two full fledged <b>pseudo project</b> in edureka which you find in my project section.I am also pursuing my <b>Masters
              in Computer Application by IGNOU</b>.I am disciplined and possess problem tackling abilities efficiently.I can work to the best of my capabilities even under pressure.
            </p>
            <p className="icons">

              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank"><img
                src="https://i.ibb.co/CPKx9gS/gmail.png" alt="gmail" title="parya209@gmail.com" /></a>

              <a href="https://instagram.com/pankaj_arya_99?utm_medium=copy_link" target="_blank"><img
                src="https://i.ibb.co/5FSCVw8/instagram-logo.png" alt="instagram-logo"
                title="Pankaj_arya_99" /></a>

              <a href="https://github.com/PankajKumar202" target="_blank"><img
                src="https://i.ibb.co/QQsjKHS/github.png" alt="github" border="0" title="Github Profile" /></a>
              <a href="https://www.linkedin.com/in/pankaj-kumar-314b5a111/" target="_blank"><img
                src="https://i.ibb.co/tYPx2cG/linkedin.png" alt="linkedin" border="0"
                title="Linkedin Profile" /></a>
              <a href="https://www.facebook.com/pankaj.arya.56808" target="_blank"><img
                src="https://i.ibb.co/g6xZv5K/facebook.png" alt="facebook" border="0"
                title="Facebook Profile" /></a>



            </p>
          </div>


          {/* <!-- bs 5 bootstrap --> */}

          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                aria-label="Toggle navigation" id='navIcon'>
                <span id="Menu">Menu</span>
              </button>

              <div className="collapse navbar-collapse float-end" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#skills">Skills</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link active" href="#map">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#intro1">AboutMe</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#map">Location</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#Projects">Projects</a>
                  </li>
                  <li className="nav-item" >
                    <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Social
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="https://mail.google.com/mail/u/0/#inbox?compose=new">Gmail</a></li>
                      <li><a className="dropdown-item" href="https://instagram.com/pankaj_arya_99?utm_medium=copy_link">Instagram</a></li>
                      <li><a className="dropdown-item" href="https://github.com/PankajKumar202">Github</a></li>
                      <li><a className="dropdown-item" href="https://www.linkedin.com/in/pankaj-kumar-314b5a111/">Linkedin</a></li>
                      <li><a className="dropdown-item" href="https://www.facebook.com/pankaj.arya.56808">Facebook</a></li>
                    
                    </ul>
                  </li>
                </ul>

              </div>
            </div>
          </nav>

          {/* <!-- bs5 ends --> */}

          {/* <!-- <div id="scroll"> */}


          {/* </div> --> */}
          {/* <!-- <section> --> */}
          <div id="skills">
            <h1>Skills</h1>
            <hr />
            <hr />
            <img src="https://i.ibb.co/0J529kV/icons8-c-programming-100.png" alt="C" />
            <img src="https://i.ibb.co/4VZKr87/icons8-c-100.png" alt="C++" />
            <img src="https://i.ibb.co/SxCYC5N/icons8-java-100.png" alt="Java" />
            <img src="https://i.ibb.co/c2yTc8T/icons8-html-5-100.png" alt="Html5" />
            <img src="https://i.ibb.co/7XqJjQz/icons8-cascading-style-sheets-language-used-for-describing-the-presentation-of-a-document-100.png"
              alt="Css3" />
            <img src="https://i.ibb.co/kcyyHNC/icons8-javascript-240.png" alt="" />
            <img src="https://i.ibb.co/TwjyqvQ/icons8-bootstrap-100.png" alt="" />
            <img src="https://img.icons8.com/color/144/000000/nodejs.png" />
            <img src="https://img.icons8.com/color/144/000000/mongodb.png" />
            <img src="https://i.ibb.co/q9RVSZ8/1174949-js-react-js-logo-react-react-native-icon.png"
              alt="1174949-js-react-js-logo-react-react-native-icon" border="0" />

          </div>


          {/* <!-- </section> --> */}
          {/* <!-- <section> --> */}
          <div className="Projects" id="Projects">
            <h1>
              Projects
            </h1>


            <div className="tileContainer">
              {/* <!-- front side --> */}
              <div className="img-container">
                <a href="https://github.com/PankajKumar202/Lifyplus.git" target='_blank'><img
                  src="https://i.ibb.co/9vfFcs0/mp.jpg" alt="mp" border="0" /></a><br />
              </div>
              {/* <!--back side --> */}
              {/* <div className='lifytint' > */}
              <div className="Tile-Component2">
                <b>Lifyplus</b>
              </div>
              <div className="Component-Subheading">
                Lifyplus is an android app which records timespan of an individual to control their addictions with
                the help of daily goals and alert system.<br /><br />
                <span><b>Software</b>: Android Studio</span><br />
                <span><b>Language</b>: Java</span><br />
                <span><b>Database</b>: Firebase</span><br />
              </div>

            </div>


            {/* </div> */}
            <div className="tileContainer">
              <div className="img-container">
                <a href="https://zomatopk.netlify.app" target="_blank"><img
                  src="https://i.ibb.co/ZT1hwbd/Capture.jpg" alt="Capture" border="0" /></a><br />
              </div>

              <div className="Tile-Component2">
                <b>Zomato</b>
              </div>
              <div className="Component-Subheading">
                This is the clone website of zomato which helps user to order food online.<br /><br />
                <span>Frontend Tools : HTML 5 , CSS 3 , Bootstrap 5 , React JS</span><br />
                <span>Backend Tools : Node JS [ JWT for Authentication , JSON for data ]</span>
              </div>

            </div>
            <div className="tileContainer">
              <div className="img-container">
                <a href="https://brewmusefspk.netlify.app" target="_blank"><img
                  src="https://i.ibb.co/F4zKMzz/Capture.jpg" alt="Capture" border="0" /></a><br />
              </div>
              <div className="Tile-Component2">
                <b> BrewMuse</b>
              </div>
              <div className="Component-Subheading">
                This is the clone website of Starbucks which helps user to order Coffee online.<br /><br />
                <span>Frontend Tools : HTML 5 , CSS 3 , Bootstrap 5 , React JS</span><br />
                <span>Backend Tools : Node JS [ JWT for Authentication , JSON for data ]</span>
              </div>

            </div>

            {/* <!-- <div className="tileContainer"> */}

            {/* </div> --> */}



          </div>
          {/* <!-- </section> --> */}
          <section id="contactSection">

            <div id="Map-heading">

              <h1 id="hide">Wanna Know Where am i live?</h1>
              <h1 id="hide1">Wanna Know</h1> <br />
              <center><h1 id="hide2">Contact Me</h1></center>
              <h1 id="contact">Contact Me</h1>
            </div>


            {/* <div id="Contact-heading">
              <h1>Contact Me</h1>
  
  
            </div> */}




            <div id="map">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.776447900474!2d77.16313531440957!3d28.726226186586484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0196c89079b3%3A0xc10154ba2e6a8db!2sA%20Block%20Rd%2C%20Bhalswa%20Jahangirpuri%2C%20Jahangirpuri%2C%20Delhi%2C%20110033!5e0!3m2!1sen!2sin!4v1637658498896!5m2!1sen!2sin"
                width="600" height="600" style={{ border: "0" }} allowFullScreen="" loading="lazy"></iframe>

              <div id="Contact-heading1">
                <h1>Contact Me</h1>


              </div>
              <div className="main-contact">
                <div className="contact">
                  <span>A-341 Jahangir puri <br /> Delhi-110033</span>

                </div>
                <div className="vertical">

                </div>
                <div className="contact1">
                  <span>parya209@gmail.com</span><br />
                  <span>+91-9821598163</span>
                </div>
              </div>
              {/* <!-- Form using bootstrap --> */}
              <div className="contactBar">
                <div className="panel panel-primary" style={{ width: "100%", height: "403px" }} >
                  <div className="panel-body">
                    <form>
                      <div className="form-group ">
                        <label form="form-control" htmlFor="fname">Name</label>
                        <input className="form-control" name='name' onChange={this.handleChange} id="fname" required />
                      </div>
                      <div className="form-group">
                        <label form="form-control" htmlFor="Phone">Phone</label>
                        <input className="form-control" name='phone' onChange={this.handleChange} id="Phone" type="tel" />
                      </div>
                      <div className="form-group">
                        <label form="form-control" htmlFor="email">Email</label>
                        <input className="form-control" id="email" onChange={this.handleChange} name='email' type="email" placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <label form="form-control" htmlFor="text">Enter Your message</label>
                        <textarea className="form-control" name="message" onChange={this.handleChange} id="text" row="6"
                          placeholder="Enter Your message">
                        </textarea>
                      </div>

                    </form>
                    <center><h5 style={{ color: "#7510F7" }}>{this.state.msg}</h5></center>
                    <center><button className="btn btn-success" type="submit"
                      style={{ marginTop: "3%", backgroundColor: "#7510F7" }} onClick={this.sendMail}>Submit</button></center>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer>
            &copy;AllAboutMySelf.com
          </footer>
        </div>




      </Fragment>

    )

  }
  render() {
    return (
      this.App()
    )
  }
}



export default PortFolio;
