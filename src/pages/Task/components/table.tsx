import React from "react";
interface ITable {
  table: any;
}

const Table: React.FC<ITable> = ({ table }) => {
  console.log(Object.entries(table));
  return Object.entries(table).map((item: any) => {
    return (
      <>
        <p className="col-span-3">{item[0]}</p>
        <p>{item[1]["1. open"]}</p>
        <p>{item[1]["2. high"]}</p>
        <p>{item[1]["3. low"]}</p>
        <p>{item[1]["4. close"]}</p>
        <p>{item[1]["5. volume"]}</p>
      </>
    );
  });
};

export default Table;
