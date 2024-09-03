import React from "react";

const OverviewKnowledge = () => {
  return (
    <div className="w-6/12 mt-20 space-y-4 rounded-xl p-4 mx-auto bg-red-400">
      <h2 className="text-xl font-semibold">Tutorial Central</h2>

      <div className="w-full grid gap-5 grid-cols-4 grid-rows-3">
        <div className=" col-span-1 p-2 min-h-32 bg-gray-100">Card One</div>
        <div className=" col-span-1 p-3 min-h-32 bg-gray-200">Card Two</div>
        <div className=" col-span-1 p-3 min-h-32 bg-gray-300">Card Three</div>
        <div className=" col-span-1 p-3 min-h-32 bg-gray-400">Card Four</div>
        <div className=" col-span-1 p-2 min-h-32 bg-gray-500">Card One</div>
        <div className=" col-span-1 p-3 min-h-32 bg-gray-600">Card Two</div>
        <div className=" col-span-1 p-3 min-h-32 bg-gray-700">Card Three</div>
        <div className=" col-span-1 p-3 min-h-32 bg-gray-800">Card Four</div>
        <div className=" col-span-1 p-2 min-h-32 bg-gray-900">Card One</div>
        <div className=" col-span-1 p-3 min-h-32 bg-gray-100">Card Two</div>
        <div className=" col-span-1 p-3 min-h-32 bg-gray-200">Card Three</div>
        <div className=" col-span-1 p-3 min-h-32 bg-gray-300">Card Four</div>
      </div>

      <div className="flex p-2 justify-end">
        <button>skip</button>
      </div>
    </div>
  );
};
export default OverviewKnowledge;
