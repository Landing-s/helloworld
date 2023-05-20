import { useState, useEffect } from "react";

function Fetch(){
    const [data, setData]=useState([]);
    useEffect(()=>{
        const requestOptions={
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'bearer 393494e7-5977-4569-9156-841961011f26'
            }       
        }
        fetch('https://qoverflow.api.hscc.bdpa.org/v1/users',requestOptions).then(
            (body)=>{
                const users=body.json();
                console.log(users);
               setData(users['users'])
            }
        )
    },[]);
    return(
        <div>{data.map((user)=>{
          <div>{user.username}</div>
        })}</div>
    );
}

export default Fetch;