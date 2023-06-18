import React from "react";
import {FaAngleRight} from 'react-icons/fa';
const cards = [
  {
    img: "../../../n1.png",
    alt: "h1",
    text: "Remaining essentially unchanged. It was popularised",
  },
  {
    img: "../../../n2.png",
    alt: "h2",

    text: "Remaining essentially unchanged. It was popularised",
  },
  {
    img: "../../../n3.png",
    alt: "h3",

    text: "Remaining essentially unchanged. It was popularised",
  },
];
const News = () => {
  return (
    <>
      <div className="h-section my-5 position-relative pt-5">
        <h2 className="text-dark fw-bold text-center"> News-Guides-Updates</h2>
        <p className="text-dark  text-center">
          Lorem Ipsum dummy text of the printing and typesetting industry.
          <br /> Lorem Ipsum has been the industry.
        </p>
        <div className="content2 container my-4">
          <div className="row ">
            {cards.map((e, i) => (
              <div className="card p-0 " key={i}>
                <img src={e.img} alt={e.alt} className="img-2 m-0" />
                <div className="card-body ">
                  <h6 className="fw-bold">{e.text}</h6>
                  <p>
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                   
                  </p>

                  <h6 className="more">Read more <FaAngleRight className="more-icon" /></h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content2 {
            width: 66vw;
            background-color: white;
          }
          .row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
          }
          .card {
            width: 20vw;

            border: none;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          }
          .img-2 {
            width: 100%;
          }
          .more{
            color : #FF4900;
            border-bottom : 2px dotted #FF4900;
            width : 99px;
            padding-bottom:5px;
            cursor: pointer;
          }
          .more:hover{
            color : #FF9E00;
            border-bottom : 2px solid #FF9E00;
      
          }
          .more-icon{
            color : #FF4900;
          }
        `}
      </style>
    </>
  );
};

export default News;
