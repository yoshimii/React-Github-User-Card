import React from 'react';
import axios from 'axios';

class UserList extends React.Component {
//CCR: C - Constructor
constructor() {
    super();
    this.state = {
        user: []
    }
}

componentDidMount() {
axios.get('').then((res)=> {
    console.log(res)
})
}

componentDidUpdate() {
    
}

render() {
    return (
        <div className='App'>
            <p>GitHub UsersList</p>
        </div>
    )
}

}

export default UserList;
