import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           userInfo: {
            login:'',
            location: '',
            }

        }
    };

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/swetamn");
        const json = await data.json();
        
        this.setState({
            userInfo: json
        });
        
    }
    render() {
        const { login, type, avatar_url }= this.state.userInfo;
        
        return (
            <div className="user-card">
                <img src={avatar_url }></img>
            <h2>Name : {login}</h2>
            <h3>Location: {type}</h3>
            <h3>Contact: sweta@xyz.com</h3>
        </div>
        )
    }
}

export default UserClass;