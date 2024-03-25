import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props)
    
    }

     componentDidMount() {
    
      
    }
    render() {
        return (
            <div>
                <h1>About</h1>
                <h1>This is React series</h1>
                <UserClass name={ "sweta (class)"} location="Montreal"/>
            </div>
        )

    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h1>This is React series</h1>
            
//             <UserClass name={ "sweta (class)"} location="Montreal"/>
//         </div>
//     )
// }

export default About;

