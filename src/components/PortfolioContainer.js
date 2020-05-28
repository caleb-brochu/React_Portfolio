import React, { Component } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Projects from "./pages/Portfolio";
import Contact from "./pages/Contact";
import mongoStore from "./utils/mongostore"

class Portfolio extends Component {
  state = {
    currentPage: "Home",
    name:"",
    email:"",
    message: ""
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const input = event.target.name;
    const value = event.target.value;

    // Updating the input's state
    this.setState({
      [input]: value
    });
    console.log(input)
    console.log(value)
  };

  handleSubmit = event =>{
      event.preventDefault()

    let contact = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
    console.log(contact)
    mongoStore(contact)
  }

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <About />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Projects />;
    } else {
      return <Contact 
        handleInputChange = {this.handleInputChange}
        handleSubmit = {this.handleSubmit}  
        />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
          handleInputChange = {this.handleInputChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
