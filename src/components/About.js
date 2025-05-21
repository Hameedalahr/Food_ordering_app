import UserContext from "../utils/UserContext";
import Header from "./Header";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("parent Constructor")
    }
    componentDidMount(){
        console.log("Parent Component did Mount")
    }
    render(){
        console.log("Parent Render")
        return(
        <div className="about">
            <div className="about-logo"><UserClass name={"Hameed Class"} location={"Nandyal Class"}/></div>
            <div className="social-profile">
                <a href="https://www.linkedin.com/in/abdul-hameed-syed/" target="_blank"><i className="fa-brands fa-linkedin" style={{color:"#29477a",fontSize:"30px",margin:"10px"}}></i></a>
                <a href="https://github.com/Hameedalahr" target="_blank"><i className="fa-brands fa-github" style={{color:"#29477a",fontSize:"30px",margin:"10px"}}></i></a>
            </div>
            <p>Hello, I’m Abdul Hameed Syed. I developed this Food Delivery Application as part of my learning and practice. Unlike typical approaches that rely on Create React App, I built this project using the Parcel bundler, allowing for greater customization and performance optimization.
What sets this project apart is that it does not use any static or hardcoded data. Instead, I integrated real-time APIs from Swiggy to fetch and display live data, ensuring a dynamic and realistic user experience.
Additionally, I ensured code reliability and functionality by thoroughly testing the application using Jest and React Testing Library.</p>
        </div>
    )
    }
}

export default About;