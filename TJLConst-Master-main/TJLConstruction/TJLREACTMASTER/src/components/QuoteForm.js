import React from "react";

import "./QuoteForm.css";


const QuoteForm = (props) => {
  
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [town, setTown] = React.useState("");
    const [description, setDescription] = React.useState("");


    const handleNameChange = event => setName(event.target.value);
    const handleEmailChange = event => setEmail(event.target.value);
    const handlePhoneNumberChange = event => setPhoneNumber(event.target.value);
    const handleTownChange = event => setTown(event.target.value);
    const handleDescriptionChange = event => setDescription(event.target.value);

    async function sampleFunc(toInput) {
        const response = await fetch("/api/newClient", {
            method: "POST", 
            mode: "cors",
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow", 
            referrerPolicy: "no-referrer", 
            body: JSON.stringify(toInput)
        });
        
        
    }

    const handleSubmit = variables => {
        const toInput = { name, email, phoneNumber, town, description };
        sampleFunc(toInput);
        setName("");
        setEmail("");
        setPhoneNumber("");
        setTown("");
        setDescription("");
    };

    
    return (
        <div className="body">
              <form onSubmit={handleSubmit}>
                <div className="formBody">
                    <div className="formName">
                        <label htmlFor="input" className=" col-form-label">Name</label>
                        <div className="col-lg-5">
                            <input type="text" className="form-control" name="name"  value={name} onChange={handleNameChange}  />
                        </div>
                    </div>
                    <div className="formEmail">
                        <label htmlFor="input" className=" col-form-label">Email</label>
                        <div className="col-lg-5">
                            <input type="text" className="form-control" name="email" value={email} onChange={handleEmailChange}  />
                        </div>
                    </div>
                    <div className="formPhone">
                        <label htmlFor="input" className=" col-form-label">Phone Number</label>
                        <div className="col-lg-5">
                            <input type="text" className="form-control" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange}  />
                        </div>
                    </div>
                    <div className="formTown">
                        <label htmlFor="input" className=" col-form-label">Town</label>
                        <div className="col-lg-5">
                            <input type="text" className="form-control" name="town" value={town} onChange={handleTownChange}  />
                        </div>
                    </div>
                    <div className="formDescription">
                        <label htmlFor="input" className=" col-form-label"> Brief Description</label>
                        <div className="col-lg-5">
                            <input type="text" className="form-control" name="description" value={description} onChange={handleDescriptionChange}  />
                        </div>
                    </div>
                    <div className="button">
                        <button type="submit" class="btn btn-info">Submit</button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default QuoteForm;