import React from 'react';

function UserCard(props) {
    return (
        <>
            <div key={props.user.id} className='user'>
            <img src={props.user.avatar_url} alt={props.user.name} />
            <p className='location'>{props.user.location}</p>
            <p className='bio'>{props.user.bio}</p>
            </div>    
        </>
    )
}

export default UserCard;