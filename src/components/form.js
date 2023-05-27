import React from "react";

function Form() {
    return (
        <>
            <div>form</div>
            <h1>Amazon Scamming Services</h1>
            <input type = "text" placeholder = "Username"/><br/>
            <input type = "email" placeholder = "Email Address"/><br/>
            <input type = "tel" placeholder = "Phone Number"/><br/>

            <h3>Your opinion matters to us.</h3>
            <h5>Please rate us!</h5>
            <input type = "radio" value = "amazing" id = "rateUs"/>Amazing, just amazing!<br/>
            <input type = "radio" value = "great" id = "rateUs"/>Great<br/>
            <input type = "radio" value = "good" id = "rateUs"/>Good<br/>
            <input type = "radio" value = "average" id = "rateUs"/>Average<br/>
            <input type = "radio" value = "badVeryBad" id = "rateUs"/>Bad, very bad...<br/>

            <h5>How did you hear about us?</h5>
            <input type = "radio" value = "friends" id = "rateUs"/>My friends!<br/>
            <input type = "radio" value = "social" id = "rateUs"/>Social Media<br/>
            <input type = "radio" value = "advertisement" id = "rateUs"/>A somewhat boring advertisement...<br/>
            <input type = "radio" value = "commercial" id = "rateUs"/>An informative commercial<br/>
            <input type = "radio" value = "other" id = "rateUs"/>A little bird told me<br/>

            <h5>Give us your feedback!</h5>
            <div class = "input-group">
                <span class = "input-group-text">Comments</span>
                <textarea class = "form-control" aria-label = "withTextarea"></textarea>
            </div>
        </>
    )
}

export default Form;