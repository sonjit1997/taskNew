import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const LoginForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value,} = event.target;
    const inputValue =  value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (event) => {
    console.log(formData);
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://eventx.codeandgrow.net/api/login-users",
        formData
      );
      console.log(response.data);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="authentication-form">
      <h1 className="text-center">Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="control-label my-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
           
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="email" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="control-label  my-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-info w-100 ">
            Login
          </button>
        </div>
        <div  className="form-group mt-2"></div>
      </form>
      <style jsx>
        {`
          .authentication-form {
            background: #1a2038;
            opacity: 0.9;
            border: none;
            width: 382px;
            height: 360px;
            border-radius: 2px;
          }
          .authentication-form h1 {
            margin: 0 0 25px 0;
            padding: 10px 0;
            color: #ffb433;
            border-bottom: dashed 1px rgba(255, 180, 109, 0.9);
            text-transform: none;
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
          .authentication-form a,
          label {
            color: #ffffff;
            min-height: 20px;

            margin-bottom: 0;
            font-weight: 400;
            font-size: small;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default LoginForm;
