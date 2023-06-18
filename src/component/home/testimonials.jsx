import React from "react";
import {FaStar} from 'react-icons/fa';
const Testimonials = () => {
  return (
    <div className="full-container ">
      <div className="container">
        <div className="row">
          <div className="col-4 ">
            <h3 className="text-light fw-bold text-start ">
              See what our <br />
              coustomer think
            </h3>
            <img  src="../../../Group.png" className="my-3 h-25 text-start "/> 
            <button className="custom-btn w-100 "><FaStar className="mb-1 me-2 star "/>Boosting</button>
          </div>
          <div className="col-8 ps-3">
            <div className="row card"> 
            <div className="card-body py-1">

            <p className="mb-1"><span><FaStar className="text-info text-info"/><FaStar className="text-info"/><FaStar className="text-info"/><FaStar className="text-info"/><FaStar className="text-info"/> </span> <span className="ms-2 me-2 text-clr">Anonymous</span></p>
            <p className="text-clr">Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            </div>
            <div className="row card mt-2"> 
            <div className="card-body py-1">

            <p className="mb-1"><span><FaStar className="text-info text-info"/><FaStar className="text-info"/><FaStar className="text-info"/><FaStar className="text-info"/><FaStar className="text-info"/> </span> <span className="ms-2 me-2 text-clr">Anonymous</span></p>
            <p className="text-clr">Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`

        .card{
          background-color: #22313E;
          border:none;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        }
        .text-clr{
          color:#747C83;
        }
      
          .full-container {
            padding: 4rem 16rem;
            background-image: url("../../../uwp3786066.jpeg");
            height: 56vh;
            z-index: 1;
            position: relative;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          .full-container:before {
            content: "";
            position: absolute;
            top: 0;
            z-index: -1;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(29, 37, 62, 0.58);
            /* Adjust the alpha value (0.5) to control the opacity */
          }
        `}
      </style>
    </div>
  );
};

export default Testimonials;
