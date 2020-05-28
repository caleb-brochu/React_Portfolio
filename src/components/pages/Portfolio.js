import React from "react";
import Suitcase from '../project_photos/suitcase.JPG'
import Password from '../project_photos/Password-generator.JPG'
import Planner from '../project_photos/DayPlanner.png'
import Weather from '../project_photos/Weather_Dashboard.JPG'
import Burger from '../project_photos/Burgers.JPG'



const Portfolio = () => (
  <div className = "container">
        <div className= "row">
          <div className = "col-md-7 offset-md-2 col-sm-12">
            <div className = "container-fluid">
              <div className = "jumbotron jumbobackground">
                <div className ="row">
                    <div className="col-sm-12">
                        <h1 id = "aboutmetitle">Portfolio</h1>
                    </div>
                </div> 
                <div className ="row">
                  <div className = "col-md-6">
                    <div className="card">
                      <img src= {Suitcase} class="card-img-top" alt="Suitcase"/>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                  <div className = "col-md-6">
                    <div className="card">
                      <img src= {Password} class="card-img-top" alt="Suitcase"/>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                </div>
            </div>
            <div className ="row">
                  <div className = "col-md-6">
                    <div className="card">
                      <img src= {Planner} class="card-img-top" alt="Suitcase"/>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                  <div className = "col-md-6">
                    <div className="card">
                      <img src= {Weather} class="card-img-top" alt="Suitcase"/>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                </div>
            </div>
            <div className ="row">
                  <div className = "col-md-6">
                    <div className="card">
                      <img src= {Burger} class="card-img-top" alt="Suitcase"/>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
                  <div className = "col-md-6">
                    <div className="card">
                      <img src= {Burger} class="card-img-top" alt="Suitcase"/>
                      <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
