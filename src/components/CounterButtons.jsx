import { useState } from "react";

const CounterButtons = ({ controller }) => {
  return (
    <div className="flex flex-col gap-5 2xl:gap-3 justify-center">
      <button
        onClick={() => {
          controller.increment();
        }}
        className="w-0 h-0 
  border-l-[40px] 2xl:border-l-[25px] lg:border-l-[20px] border-l-transparent
  border-b-[65px] 2xl:border-b-[40px] lg:border-b-[35px] border-b-screen
  border-r-[40px] 2xl:border-r-[25px] lg:border-r-[20px] border-r-transparent hover:scale-110 "
      ></button>
      <button
        onClick={() => controller.decrement()}
        className="w-0 h-0 
  border-l-[40px] 2xl:border-l-[25px] lg:border-l-[20px] border-l-transparent
  border-t-[65px] 2xl:border-t-[40px] lg:border-t-[35px] border-t-screen
  border-r-[40px] 2xl:border-r-[25px] lg:border-r-[20px] border-r-transparent hover:scale-110"
      ></button>
    </div>
  );
};

export default CounterButtons;
