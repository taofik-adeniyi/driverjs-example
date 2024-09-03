import React, { useState } from "react";

const SwitchToSandbox = () => {
  const [more, setMore] = useState(false);
  const [hasDemoAccount, setHasDemoAccount] = useState(false);
  const [message, setMessage] = useState("");
  const [demoAccountCreated, setDemoAccountCreated] = useState(false);
  const onSwitch = (e) => {
    // e.stopPropagation();
    if (!hasDemoAccount) {
      setMessage("Setting up a demo account for you!!!");
      setTimeout(() => {
        setDemoAccountCreated(true);
      }, 1000);
    }
  };
  return (
    <div
      //   onClick={() => setMore(!more)}
      className="absolute p-3 rounded-md top-3 right-3 w-48 shadow-sm bg-gray-100 min-h-36"
    >
      <h3 className="text-sm text-black font-semibold">
        Switch to Demo Account(Sandbox)
      </h3>
      <div onClick={onSwitch} className="w-fit mt-5 mx-auto text-2xl">
        Switch
      </div>
      {message && <p className="text-xs text-center my-2">{message}</p>}
      {demoAccountCreated && <p>Demo account created redirecting you ....</p>}
      {more && (
        <p className="text-xs">
          Get a step by step Walkthrough of the application features in an
          environemnt that simulate all the amazinf features the platform has to
          offer
        </p>
      )}
    </div>
  );
};

export default SwitchToSandbox;
