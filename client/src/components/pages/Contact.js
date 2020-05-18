import React from "react";
import Form from "../form/index"



const Contact = (props) => (
  <div className = "container">
    <h2>Contact</h2>
    <Form
     handleInputChange = {props.handleInputChange}
     handleSubmit = {props.handleSubmit}  
    />
      
  </div>
);

export default Contact;
