import React from "react";
import Suitcase from '../project_photos/suitcase.JPG'
import Password from '../project_photos/Password-generator.JPG'
import Planner from '../project_photos/DayPlanner.png'
import Weather from '../project_photos/Weather_Dashboard.JPG'
import Burger from '../project_photos/Burgers.JPG'
import Forage from '../project_photos/forage.JPG'
import Hiking from '../project_photos/hiking.JPG'
import '../style.css'


const Portfolio = () => (
  <div classNameName = "container">
  <div className= "row">
      <div className = "container justified-content-end">
        <div className = "jumbotron jumbobackground">
          <div className ="row">
            <div className="col-sm-12">
                        <h1 id = "aboutmetitle">Portfolio</h1>
                    </div>
                </div> 
                <div className ="row">
                  <a href="https://caleb-brochu.github.io/Project-1/">
                    <div className="card col-md-12">
                      <img src= {Suitcase} class="card-img-top" alt="Suitcase"/>
                      <div className="card-body">
                        <p className="card-text">Suitcase</p>
                      </div>
                    </div>
                    </a>
                </div>
                <div className ="row">
                  <a href="https://polar-cliffs-12845.herokuapp.com/api/restaurants">
                    <div className="card">
                      <img src= {Forage} class="card-img-top" alt="Urban Forage"/>
                      <div className="card-body">
                        <p className="card-text">Urban Forage</p>
                      </div>
                    </div>
                    </a>
                  </div>
                  <div className ="row">
                  <a href="https://fair-weather-hiking.herokuapp.com/">
                    <div className="card">
                      <img src= {Hiking} class="card-img-top" alt="Fair Weather Hiking"/>
                      <div className="card-body">
                        <p className="card-text">Fair Weather Hiking</p>
                      </div>
                    </div>
                    </a>
                  </div>
                  <div className ="row">
                  <a href="https://caleb-brochu.github.io/Project-1/">
                    <div className="card">
                      <img src= {Suitcase} class="card-img-top" alt="Suitcase"/>
                      <div className="card-body">
                        <p className="card-text">Suitcase</p>
                      </div>
                    </div>
                    </a>
                  </div>
              </div>
        </div>
      </div>
    </div>
);

export default Portfolio;
