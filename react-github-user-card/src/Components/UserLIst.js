import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import FollowerCard from './FollowerCard';
import Grid from '@material-ui/core/Grid';

//CCR: C - class Component
class UserList extends React.Component {
//CCR: C - Constructor
constructor() {
    super();
    this.state = {
        user: [],
        followers: []
    }
}

componentDidMount() {
    console.log(this.state.user)
axios.get(`https://api.github.com/users/yoshimii`).then((res)=> {
    this.setState({
        user: res.data
    })
    return res.data.followers_url;
}).then((res)=> {
    axios.get(`${res}`).then((res)=> {
        res.data.forEach((follower)=> {
            axios.get(`https://api.github.com/users/${follower.login}`).then((res)=> {
                this.setState({
                    followers: [...this.state.followers, res.data]
                })
            })
        })
    })
})

.catch(err => console.log('error... errorr... does not compute'))
}

componentDidUpdate() {
    
}
//CCR: R - Render
render() {
    console.log(this.state.followers)
    return (
        <div className='App'>
            <section className='user-card'>
            <h1>Emma's GitHub Network</h1>
            <UserCard
            user={this.state.user}
            />
            </section>
            <section className='follower-cards'>
            <Grid container spacing={3}>
          
            <FollowerCard
            follower={this.state.followers}
            />
  
            </Grid>
            </section>
        </div>
    )
}

}

export default UserList;
