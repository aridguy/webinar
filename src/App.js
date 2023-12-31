// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Swal from 'sweetalert2'

function App() {
  // MAKE API CALLS AND VALIDATE THE FORM, THEN SUBMIT FORM DETAILS TO THE DATAABASE
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const data = {
      first: firstName,
      last: lastName,
      phone: phoneNum,
      email: email,
    };
  
    fetch("https://sheetdb.io/api/v1/nmdtoigixgu7c", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'You have successfully registered!',
          text: 'An email will be sent to you after registration has been confirmed',
          showConfirmButton: false,
          footer: '<a href="/">Read more about the Study Webinar</a>',
          timer: 2500
        });
  
        // Reset the input fields to their initial placeholder values
        setFirstName("");
        setLastName("");
        setPhoneNum("");
        setEmail("");
      })
      .catch((error) => {
        // Handle errors
        console.log(error);
      });

      fetch("send_email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}`, // Replace with the email address
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            console.log("Email sent successfully");
          } else {
            console.error("Email sending failed");
          }
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    





      // ending of the button 
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
                          placeholder="E-mail"
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
