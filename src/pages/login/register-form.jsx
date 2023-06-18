import React, { useState,useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const RegistrationForm = () => {
  const router = useRouter();

  const [formValidity, setFormValidity] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const inputValue = value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };


    // form validate from frontend
  const validateForm = () => {
    const { name, username, email, password, confirm_password } = formData;

    const isFormValid =
      name !== "" &&
      username !== "" &&
      email !== "" &&
      password !== "" &&
      confirm_password !== "" &&
      password === confirm_password;

    setFormValidity(isFormValid);
  };
    // Validate the form
    useEffect(() => {
      validateForm();
    }, [formData]);

  const handleRegister = (event) => {
    event.preventDefault();


    // Prepare the request body
    const requestBody = {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      confirm_password: formData.confirm_password,
    };

    // Send the POST request using Axios
    axios
      .post("https://eventx.codeandgrow.net/api/create-user", requestBody)
      .then((response) => {
        console.log(response.data);
        // Handle the response data as needed
        router.push('/');
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error
      });
  };

  return (
    <div className="mtop40 authentication-form">
      <h3 className="text-center">Register</h3>

      <div className="row">
        <form
          onSubmit={handleRegister}
        >
          <div
            className="tab-content"
            style={{ padding: "15px 20px 10px !important" }}
          >
            <div className="customtab" id="register">
              <div className="form-group my-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control input-lg c2"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />

                <span id="error_gstin" className="validate invisible"></span>
              </div>

              <div className="form-group my-2">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control input-lg"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <span id="error_company" className="validate invisible"></span>
              </div>

              <input type="hidden" name="address" id="caddress" />

              <div className="form-group my-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control input-lg c3 "
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <span id="error_email" className="validate invisible"></span>
              </div>

              <div className="row  ">
                <div className="col-md-6">
                  <div className="input-group">
                    <input
                      type="number"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                      pattern="[1-9]{1}[0-9]{9}"
                      value={formData.password}
                      onChange={handleInputChange}
                    />

                    <span
                      
                      className="validate invisible"
                      style={{ position: "absolute", marginTop: "42px" }}
                    ></span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group d-flex">
                    <input
                      type="number"
                      name="confirm_password"
                      id="confirm_password"
                      className="form-control"
                      placeholder="Confirm password"
                      value={formData.confirm_password}
                      onChange={handleInputChange}
                    />

                    <span
                      id="error_otp"
                      className="validate invisible"
                      style={{ position: "absolute", marginTop: "42px" }}
                    ></span>
                  </div>
                </div>
              </div>

              <button
                className="btn btn-info w-100 my-4"
               type="submit"
               disabled={!formValidity}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
      <style jsx>
        {`
          .c-btn {
            height: 34px !important;
            border-radius: 0 !important;
            border-top-right-radius: 4px !important;
            border-bottom-right-radius: 4px !important;
          }
          .authentication-form {
            background: #1a2038;
            opacity: 0.9;
            border: none;
            width: 700px;
            height: auto;
            border-radius: 2px;
          }

          .authentication-form h3 {
            margin: 0 0 25px 0;
            padding: 10px 0;
            color: #ffb433;
            border-bottom: dashed 1px rgba(255, 180, 109, 0.9);
            text-transform: none;
          }
          p {
            font-size: 10px;
            font-weight: 400;
            color: #9a9a9a;
            margin-bottom: 0px;
            text-align: center;
          }

          .form-control {
            display: block;
            width: 100%;
            height: 34px;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857143;
            color: black;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -webkit-transition: border-color ease-in-out 0.15s,
              -webkit-box-shadow ease-in-out 0.15s;
            -o-transition: border-color ease-in-out 0.15s,
              box-shadow ease-in-out 0.15s;
            transition: border-color ease-in-out 0.15s,
              box-shadow ease-in-out 0.15s;
          }
          .authentication-form .btn-info {
            color: #fff;
            background-color: #ffb433;
            border: 0;
            margin-top: 20px;
          }
          .btn {
            display: inline-block;
            padding: 6px 12px;
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.42857143;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            background-image: none;
            border: 1px solid transparent;
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  );
};

export default RegistrationForm;
