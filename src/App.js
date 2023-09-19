// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  // MAKE API CALLS AND VALIDATE THE FORM, THEN SUBMIT FORM DETAILS TO THE DATAABASE
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, phoneNum, email);
    const data = {
      first: firstName,
      last: lastName,
      email: email,
      phone: phoneNum,
    };
    // axios.post("https://sheetdb.io/api/v1/nmdtoigixgu7c", {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   mode: "cors",
    //   body: JSON.stringify(data),
    // })
    // fetch('https://sheetdb.io/api/v1/nmdtoigixgu7c')
    // .then((response) => {
    //     console.log(response);
    //     // setEmail("");
    //     // setFirstName("");
    //     // setLastName("");
    //     // setPhoneNum("");
    //   })
    //   .catch((error) =>{
    //     console.log(error)
    //   })

    fetch(
      "https://sheetdb.io/api/v1/nmdtoigixgu7c",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  };

  // numbers only input (function)
  // const [value, setValue] = useState("");
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    setPhoneNum(numericValue);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="form-body">
            <div className="row">
              <div className="form-holder">
                <div className="form-content">
                  <div className="form-items">
                    <h3>Great Adventure_IBU STUDY ABROAD WEBINAR</h3>
                    <h5>Register Today</h5>
                    <p>Fill in your data below.</p>
                    <form
                      className="requires-validation"
                      onSubmit={handleSubmit}
                    >
                      <div className="col-md-12">
                        <input
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstName}
                          className="form-control"
                          type="text"
                          name="fname"
                          placeholder="First Name"
                          required
                        />
                        <div className="valid-feedback">
                          First name field is valid!
                        </div>
                        <div className="invalid-feedback">
                          First field cannot be blank!
                        </div>
                      </div>
                      <div className="col-md-12">
                        <input
                          onChange={(e) => setLastName(e.target.value)}
                          value={lastName}
                          className="form-control"
                          type="text"
                          name="lname"
                          placeholder="Last Name"
                          required
                        />
                        <div className="valid-feedback">
                          Last name field is valid!
                        </div>
                        <div className="invalid-feedback">
                          Last name field cannot be blank!
                        </div>
                      </div>

                      <div className="col-md-12">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="E-mail Address"
                          required
                        />
                        <div className="valid-feedback">
                          Email field is valid!
                        </div>
                        <div className="invalid-feedback">
                          Email field cannot be blank!
                        </div>
                      </div>

                      <div className="col-md-12">
                        <input
                          onChange={handleInputChange}
                          value={phoneNum}
                          className="form-control"
                          type="text"
                          placeholder="Phone number"
                          required
                        />
                        <div className="valid-feedback">
                          Phone number field is valid!
                        </div>
                        <div className="invalid-feedback">
                          Phone number field cannot be blank!
                        </div>
                      </div>

                      <div className="form-button mt-3">
                        <button
                          id="submit"
                          type="submit"
                          className="btn btn-primary"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
