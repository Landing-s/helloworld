import { useState, useEffect } from "react";

function FavoriteColor() {
    const [color, setColor] = useState("red");

    return (
        <body> 
            <h1>My Favorite Color is {color}</h1>
            <button type = "button" onClick = {() => setColor("blue")}>Blue</button>
        </body>
        )
}

export default FavoriteColor;