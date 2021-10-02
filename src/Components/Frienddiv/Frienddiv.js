import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
const Frienddiv = () => {
    const { friendid } = useParams()
    // console.log(params)
    const [friend, setFriend] = useState({})
    const { name, phone, website } = friend;
    const btnurl = `/button/${friend.company?.name}`;

    const history = useHistory();
    const handleClick = () => {
        history.push(`/button/${friend.company?.bs}`)
    }

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [])
    return (
        <div>
            <h2>welcome to friend Id:{friendid}</h2>
            <h2>Name:{name}</h2>
            <h2>phone number:{phone}</h2>
            <h2>website:{website}</h2>
            <h2>company Name:{friend.company?.name}</h2>
            {/* buuton second way */}
            <Link to={btnurl}><button>Go button</button></Link>
            {/* button 3rd way */}
            <button onClick={handleClick}>Go Button 2</button>
        </div>
    );
};

export default Frienddiv;