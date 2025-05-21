import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"Dummy Name",
                Profile:"Dummy profile"
            }
        }
        // console.log("Child Constructor")
    }
    async componentDidMount(){
        // console.log("Children Component Did Mount")
        const data=await fetch("https://api.github.com/users/hameedalahr");
        const  json=await data.json()
        this.setState({
            userInfo:json
        });

    }
    render(){
        console.log("Child Render")
        return(
            <div className="user-class">
                <div className="user-img-container"><img className="user-img"src={this.state.userInfo.avatar_url}></img></div>
                <p>{this.state.userInfo.login}</p>
            </div>
        );
    }

}
export default UserClass;