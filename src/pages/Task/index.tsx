import React from "react";

import useHook from "./useHook";
import Table from "./components/table";

const Task: React.FC = () => {
  const { timeSeries, metaData, error, loading } = useHook();
  return (
    <div className="grid grid-cols-4 gap-2">
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="col-span-1 flex flex-col gap-3 bg-neutral-50 px-4 py-2">
            {metaData.map((item: { title: string; value: string }, index: number) => {
              return (
                <p className="leading-none" key={index}>
                  <span className="font-bold">{item.title}</span> — {item.value}
                </p>
              );
            })}
          </div>
          <div className="col-span-3 bg-neutral-50 px-4 py-2">
            <div className="grid grid-cols-8 gap-2 border-b border-b-gray-700 pb-1">
              <p className="col-span-3 font-medium">Timeline</p>
              <p className="font-medium">Open</p>
              <p className="font-medium">High</p>
              <p className="font-medium">Low</p>
              <p className="font-medium">Close</p>
              <p className="font-medium">Volume</p>
            </div>
            <div className="mt-1 grid max-h-[calc(100vh-200px)] grid-cols-8 gap-2 overflow-y-auto">
              <Table table={timeSeries} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
