import React from "react";
const cards = [
  {
    img: "../../../h1.png",
    alt: "h1",
    tag: "7+",
    text: "Lorem Ipsum dummy"
  },
  {
    img: "../../../h2.png",
    alt: "h2",
    tag: "800+",
    text: "Lorem Ipsum dummy"
  },
  {
    img: "../../../h3.png",
    alt: "h3",
    tag: "200+",
    text: "Lorem Ipsum dummy"
  },
  {
    img: "../../../h4.png",
    alt: "h4",
    tag: "24/7",
    text: "Lorem Ipsum dummy"
  },
];
const Highlights = () => {
  return (
    <>
      <div className="h-section my-5 position-relative pt-5">
        <h2 className="text-dark fw-bold text-center"> Highlights</h2>
        <p className="text-dark  text-center">
        Lorem Ipsum  dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry.
        </p>
        <div className="content2 container my-5">
          <div className="row ">
            {cards.map((e, i) => (
              <div className="card text-center" key={i}>
                <div className="card-body ">

              <img src={e.img} alt={e.alt} className="img-2 "  />
              <h4 className="my-1 fw-bold">{e.tag}</h4>
              <p>{e.text}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content2 {
            width: 55vw;
            background-color: white;
          }
          .row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
          }
          .card{
            width: 12vw;
            // height: 20vh;
            border:none;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          }
          .img-2 {
            width: 3.6vw;
          }
          h4{
            color:#3D9DF2;
          }

        `}
      </style>
    </>
  );
};

export default Highlights;
