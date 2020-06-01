import React from "react";
import Form from "../form/"
import '../style.css'


const Contact = (props) => (
  <div classNameName = "container">
        <div className= "row">
            <div className = "container justified-content-end">
              <div className = "jumbotron jumbobackground">
                <div className ="row">
                  <div className="col-sm-12">
                    <h1 id="aboutmetitle">Contact</h1>
                  </div>
                </div>
                <div className ="row">
                    <div className ="col-sm-12"> 
                      <Form
                      handleInputChange = {props.handleInputChange}
                      handleSubmit = {props.handleSubmit}  
                      />
                </div>
              </div>
            </div>
          </div>
        </div>
      
  </div>
);

export default Contact;
