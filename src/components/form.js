import React from "react";

function Form() {
    return (
        <>
            <div>form</div>
            <h1>Amazon Scamming Services</h1>
            <input type = "text" placeholder = "Username"></input>
            <input type = "email" placeholder = "Email Address"></input>
            <input type = "tel" placeholder = "Phone Number"></input>

            <h3>Your opinion matters to us.</h3>
            <h5>Please rate us!</h5>
            <input type = "radio" value = "amazing" id = "rateUs">Amazing, just amazing!</input>
            <input type = "radio" value = "great" id = "rateUs">Great</input>
            <input type = "radio" value = "good" id = "rateUs">Good</input>
            <input type = "radio" value = "average" id = "rateUs">Average</input>
            <input type = "radio" value = "badVeryBad" id = "rateUs">Bad, very bad...</input>

            <h5>How did you hear about us?</h5>
            <input type = "radio" value = "friends" id = "rateUs">My friends!</input>
            <input type = "radio" value = "social" id = "rateUs">Social Media</input>
            <input type = "radio" value = "advertisement" id = "rateUs">A somewhat boring advertisement...</input>
            <input type = "radio" value = "commercial" id = "rateUs">An informative commercial</input>
            <input type = "radio" value = "other" id = "rateUs">A little bird told me</input>

            <h5>Give us your feedback!</h5>
            <div class = "input-group">
                <span class = "input-group-text">Comments</span>
                <textarea class = "form-control" aria-label = "withTextarea"></textarea>
            </div>
        </>
    )
}

export default Form;