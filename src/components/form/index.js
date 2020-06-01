import React, { Component } from "react";

function Form(props){
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className = "containter">
        <form className="form">
          Name:
          <br/>  
          <input
          
            value={props.name}
            name="name"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Name"
            id = "namefield"
          />
          <br/><br/>
          Email:
          <br/>
          <input
            value={props.lastName}
            name="email"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Email"
            id = "emailfield"
          />
          <br/><br/>
          Message:
          <br/>
          <textarea
            value={props.message}
            name="message"
            onChange={props.handleInputChange}
            type="textarea"
            placeholder="Enter Message"
            id = "messagefield"
          />
          <br/><br/>
          <button 
          
          onClick={props.handleSubmit}
          id = "submit"
          
          >Submit</button>
        </form>
      </div>
    );
}
export default Form;


