import React from "react";

const OrderedList = ({data}) => {
  return (
    <div className="w-full pt-6">
      <ol className="space-y-7">
        <ListItem count={1} text={ data && data[0].suggestion1} />
        <ListItem count={2} text={data && data[0].suggestion2} />
        <ListItem count={3} text={data && data[0].suggestion3} />
        <ListItem count={4} text={data && data[0].suggestion4} />
        <ListItem count={5} text={data && data[0].suggestion5} />
      </ol>
    </div>
  );
};

export default OrderedList;

const ListItem = ({ count, text }) => {
  return (
    <li className="text-body-color text-black flex text-base">
      <span className="relative z-10 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-white">
        <span className="bg-blue-600 absolute top-0 left-0 z-[-1] h-full w-full -rotate-45 rounded"></span>
        {count}
      </span>
      {text}
    </li>
  );
};
