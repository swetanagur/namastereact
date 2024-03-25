const User = ({ name, location}) => {
    return (
        <div className="user-card">
            <h2>Name : {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact: sweta@xyz.com</h3>
        </div>
    )
}

export default User;