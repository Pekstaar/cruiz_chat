import React from "react";

export const Cards = () => {
  return (
    <>
      <p
        className=" text-3xl font-medium underline uppercase slab text-center"
        style={{ color: "#172962" }}
      >
        Features
      </p>
      <div className=" flex justify-evenly">
        <Div
          title={"Share Media"}
          imgUrl="https://chatdrop.org/wp-content/uploads/sites/3/2017/03/share-media-chat-rooms.jpg"
        />
        <Div
          title={"Make video calls"}
          imgUrl="https://miro.medium.com/max/1400/1*XEu9XT-U1RKmuTtz8k3qMQ.png"
        />
        <Div
          title={"Group chat"}
          imgUrl="https://d1pfint8izqszg.cloudfront.net/web7/images/group-chat.jpg"
        />
        {/* <div className="card p-4">card2</div>
      <div className="card p-4">card3</div> */}
      </div>
    </>
  );
};

const Div = (props) => (
  <div className="card p-4  text-center flex flex-col gap-4 shadow-lg">
    <img src={props.imgUrl} alt="" width="90%" className="m-auto my-3 " />
    <span className="text-xl slab text-gray-500 ">{props.title}</span>
    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dignissimos
      eligendi consequuntur adipisci quis! Fugit perspiciatis quis impedit.
      Labore officia error iure, alias quis dolores explicabo deleniti ducimus
      non at.
    </span>
  </div>
);
