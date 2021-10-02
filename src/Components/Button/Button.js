import React from 'react';
import { useParams } from 'react-router';

const Button = () => {
    const { btnname } = useParams();
    // const [comdata, setComdata] = useState({})
    const url = `https://jsonplaceholder.typicode.com/users/${btnname}`;
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setComdata(data))
    // }, [])
    // console.log(params);
    return (
        <div>
            <h1>welcome to the button area:{btnname}</h1>
            {/* <p>company name:{comdata}</p> */}
        </div>
    );
};

export default Button;