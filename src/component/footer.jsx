import React from "react";
const logo = [
  {
    img: "../../../f.png",
    alt: "h1",
  },
  {
    img: "../../../f1.png",
    alt: "h2",
  },
  {
    img: "../../../f2.png",
    alt: "h3",
  },
  {
    img: "../../../f3.png",
    alt: "h3",
  },
  
];
const Footer = () => {
  return (
    <div className="full-container ">
      <div className="container">
        <div className="row">
          <div className="col-5 text-center">
            <img src="../../108816459_2721138061.png" className="nav-logo" />
            <p className="text-clr my-3">
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <button className="ft-btn">Term of use </button>
            <button className="ft-btn">Privacy policy</button>
          </div>
          <div className="col-7 ps-5">
            <div className="row">
              <div className="col">
                <div className="my-2 mb-5">
                  <h6 className="fw-bold">Games we service </h6>
                  <ul className="ps-0">
                    <li>League of legend</li>
                  </ul>
                </div>
                <div className="my-2">
                  <h6 className="fw-bold">Services we offer</h6>
                  <ul className="ps-0">
                    <li>Lol Boost</li>
                    <li>Lol Duo Boost</li>
                    <li>Lol Placement Boost</li>
                    <li>Lol Win Boost</li>
                    <li>Lol Smurf Boost</li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="my-2">
                  <h6 className="fw-bold">Helpful links</h6>
                  <ul className="ps-0">
                    <li>Blog</li>
                    <li>Faqs</li>
                    <li>Demo</li>
                    <li>Jobs</li>
                  </ul>
                </div>
              </div>
              <div className="grid-container1 mt-2">
                {logo.map((clients, index) => {
                  return (
                    <div className="grid-item " key={index}>
                      <a href="/#">
                        <img
                          src={clients.img}
                          alt={clients.alt}
                          className="img-fluid logo-img"
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .grid-container1 {
            width: 310px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr ;
          }
          #footerPopUp {
            cursor: pointer;
          }
          .grid-item {
            transition: transform 0.3s;
            text-align: start;
          }
          .logo-img {
            height: 28px;
            width: auto;
          }
          .col-5 {
            border-right: 1.5px solid #919ea9;
          }
          .nav-logo {
            width: 12vw;
          }
          .text-clr {
            line-height: 14px;
            color: #919ea9;
          }
          li,
          h6 {
            color: #919ea9;
            border-bottom : 1px solid transparent;
            padding-bottom:2px;
            cursor: pointer;
            
          }
          li{
            width:100px;
          }
          li:hover{
            color: white;
            border-bottom : 1px solid white;
          }

          .full-container {
            padding: 3rem 15rem;
            background-image: url("../../../wp6868656.jpg");
            height: 62vh;
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
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
