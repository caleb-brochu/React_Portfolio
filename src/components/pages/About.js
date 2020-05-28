import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link }  from 'react-router-dom';
import './style.css'
import profile from '../images/head_shot.jfif'

class About extends Component{

  render(){
    return(

      <div classNameName = "container">
        <div className= "row">
            <div className = "container justified-content-end">
              <div className = "jumbotron jumbobackground">
                <div className ="row">
                  <div className="col-sm-12">
                    <h1 id="aboutmetitle">About Me</h1>
                  </div>
                </div>
                <div className ="row">
                    <div className ="col-sm-12"> 
                      <img className="img-profile float-left " src={profile} alt="Portfolio Picture"/>  
                      <p >
                            Hello, my name is Caleb. I am from Glens Falls, New York. I attended college at Rochester Institute
                            Technology and graduated in 2015 with a degree in Electromechanical Engineering. My hobbies include
                            hiking, rock climbing and making delicious coffee. I am passionate about leaning and am eager to build
                            and develop skills. I am enrolled in University of Washington Coding Bootcamp to build a better future.
                      </p>
                  </div>
                </div>
              </div>
              <div className ="row">
                <div className = "col-lg-4 col-md-4 col-sm-4">
                  <div className="content">
                    <a href="https://github.com/caleb-brochu"><i className="fab fa-github social-logo"></i></a>
                    <div className = "card-content">Follow on GitHub</div>
                    
                  </div>
                </div>
                <div className = "col-lg-4 col-md-4 col-sm-4">
                  <div className="content">
                    <a href="https://www.linkedin.com/in/caleb-brochu-a11321b3" ><i className="fab fa-linkedin social-logo"></i></a>
                    <div className = "card-content">Connect on LinkedIn</div>
                  </div>
                </div>
                <div className = "col-lg-4 col-md-4 col-sm-4">
                  <div className="content">
                    <a href={'../resume/CalebBrochuResume.pdf'}><i className="far fa-file-alt social-logo"></i></a>
                    <div className = "card-content">Veiw Resume</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default About;
