import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class UserList extends React.Component {
//CCR: C - Constructor
constructor() {
    super();
    this.state = {
        user: []
    }
}

componentDidMount() {
    console.log(this.state.user)
axios.get(`https://api.github.com/users/yoshimii`).then((res)=> {
    this.setState({
        user: res.data
    })
}).catch(err => console.log('error... errorr... does not compute'))
}

componentDidUpdate() {
    
}

render() {
    console.log(this.state.user)
    return (
        <div className='App'>
            <h1>GitHub Users</h1>
            <UserCard
            user={this.state.user}
            />
        </div>
    )
}

}

export default UserList;
