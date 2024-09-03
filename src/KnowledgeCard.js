import React from "react";

const KnowledgeCard = () => {
  return (
    <div className="rounded-md relative max-w-[450px] p-4 border mx-auto mt-24">
      <h1 className="text-center text-sm">Payment Link Feature Walkthrough</h1>
      <div className="absolute top-1 right-2 rounded-full bg-blue-700 w-5 cursor-pointer h-5 p-0 text-center text-sm text-white">
        x
      </div>
      <div className="relative rounded-md h-[320px] mt-3 w-full border mb-2">
        <div className="h-full w-full "></div>

        <div className="absolute w-fit mx-auto transform -translate-x-1/2 left-1/2 bottom-0 py-2">
          <div className="flex space-x-1">
            <div className=" min-w-1 min-h-1 bg-black rounded-full" />
            <div className=" min-w-1 min-h-1 bg-gray-500 rounded-full" />
            <div className=" min-w-1 min-h-1 bg-gray-500 rounded-full" />
            <div className=" min-w-1 min-h-1 bg-gray-500 rounded-full" />
          </div>
        </div>

        <div className="absolute inset-0 m-auto px-2 h-12 w-full">
          <div className="flex justify-between">
            <div className="p-1 rounded-full bg-blue-100">{"<-"}</div>
            <div className="p-1 rounded-full bg-blue-100">{"->"}</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-3">
        <label htmlFor="noshow" className="flex items-center space-x-1">
          <input type="checkbox" />
          <h6 className="text-sm">Dont show me again</h6>
        </label>

        <button className="text-sm" type="button" style={{ padding: "4px" }}>
          Next {"->"}
        </button>
      </div>
    </div>
  );
};

export default KnowledgeCard;
