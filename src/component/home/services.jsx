import React from "react";

const Services = () => {
  return (
    <div className="full-container">
      <div className="container mt-5">
        <div className="row">
          <div className="col-4 text-center">
            <div className="row my-3 text-end">
              <div className="col-10">
                <h6>What is Lorem Ipsum</h6>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
               
                </p>
              </div>
              <div className="col-2 p-0"><div className="img-blck">
              <img src="../../../shap.png"/> </div></div>
            </div>
            <div className="row my-3 text-end">
              <div className="col-10">
                <h6>What is Lorem Ipsum</h6>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
               
                </p>
              </div>
              <div className="col-2 p-0"><div className="img-blck">
              <img src="../../../shap.png"/> </div></div>
            </div>
          </div>
          <div className="col-4 ">
            </div>
          <div className="col-4 text-center">

           <div className="row my-3 ">
            <div className="col-2 text-start p-0">
            <div className="img-blck">
              <img src="../../../shap.png"/> </div>
            </div>
            <div className="col-10 text-start ">
            <h6>What is Lorem Ipsum</h6>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
               
                </p>
            </div>

           </div>
           <div className="row my-3 ">
            <div className="col-2 text-start p-0">
            <div className="img-blck">
              <img src="../../../shap.png"/> </div>
            </div>
            <div className="col-10 text-start ">
            <h6>What is Lorem Ipsum</h6>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
               
                </p>
            </div>

           </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .full-container{
            padding-top: 3rem;
            background-image: url("../../../bloss.png");
            height: 87vh;
            z-index: 1;
            position: relative;
            background-position: top center;
            background-repeat: no-repeat;
            background-size: auto 100%;
          }
          .img-blck {
            width: 65px ;
            height: 65px;
            border-color:#9B9D4F;
            border-width: 2px;
            border-style: solid;
            background: rgba(21, 30, 38, 1);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        `}
      </style>
    </div>
  );
};

export default Services;
