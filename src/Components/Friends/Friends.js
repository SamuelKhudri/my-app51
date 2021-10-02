import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h1>This is my buddies:{friends.length}</h1>
            <div className="friends-card">
                {
                    friends.map(friend => <Friend
                        key={friend.key}
                        friend={friend}>
                    </Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;