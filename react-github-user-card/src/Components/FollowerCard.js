import React from 'react';

function FollowerCard(props) {
    return (
        <>
        {props.follower.map((follower)=> {
             return (
                <div key={follower.id} className='user'>
                <img src={follower.avatar_url} alt={follower.name} />
                <p className='location'>{follower.location}</p>
                <p className='bio'>{follower.bio}</p>
                </div> 
                )
        })}
        
        </>
    )
}

export default FollowerCard;


// {props.followers.map((follower)=> {
//     return (
//     <div key={follower.id} className='user'>
//     <img src={follower.avatar_url} alt={follower.name} />
//     <p className='location'>{follower.location}</p>
//     <p className='bio'>{follower.bio}</p>
//     </div> 
//     )
// })}