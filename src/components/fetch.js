import { useState, useEffect } from "react";

function Fetch() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "content-type": "application/json",
                authorization: "bearer 393494e7-5977-4569-9156-841961011f26"
            }
        }
        fetch("https://qoverflow.api.hscc.bdpa.org/v1/users", requestOptions).then (
            (body) => {
                body.json().then((res) => setData(res["users"]));                
            }
        )
    }, []);
    return(
        <div>{data.map((user) => {
            return <div>{user.username}</div>

        })}</div>
    );
}

export default Fetch;