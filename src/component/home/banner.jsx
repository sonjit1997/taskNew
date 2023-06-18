import React from "react";
import Navbar from "../navbar";
const logo = [
  {
    img: "../../../1.png",
    alt: "1",
  },
  {
    img: "../../../2.png",
    alt: "2",
  },
  {
    img: "../../../3.png",
    alt: "3",
  },
  {
    img: "../../../4.png",
    alt: "4",
  },
];
const Banner = () => {
  return (
    <>
      <div className="full-container container-fluid ">
        <Navbar />
        <div className="content text-center">
          <h2 className="text-light fw-bold">Premium LOL ELO Boost</h2>
          <p className="text-light ">
            It is a long established fact that a reader{" "}
          </p>
          <button className="custom-btn me-1">Boosting</button>
          <button className=" account-btn ms-1">Accounts</button>
        </div>
        <div className="content2 container">
          <div className="row">
            {logo.map((e, i) => (
              <img src={e.img} alt={e.alt} className="img-2 " key={i} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .full-container {
            background-image: url("../../../main.jpg");
            height: 80vh;
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
            background-color: rgba(0, 0, 0, 0.579);
            /* Adjust the alpha value (0.5) to control the opacity */
          }
          .content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        

       
          .img-2 {
            width: 10vw;
          }
            .content2 {
            background-color: white;
            box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
              rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
            width: 55vw;
            height: 100px;
            position: absolute;
            top: 100%;
            border-radius: 8px;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;
          }
        `}
      </style>
    </>
  );
};

export default Banner;
