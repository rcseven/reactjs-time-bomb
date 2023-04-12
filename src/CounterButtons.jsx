const CounterButtons = () => {
  return (
    <div className="flex flex-col gap-5 justify-center h-auto w-auto">
      <button
        className="w-0 h-0 
  border-l-[40px] border-l-transparent
  border-b-[65px] border-b-screen
  border-r-[40px] border-r-transparent"
      ></button>
      <button
        className="w-0 h-0 
  border-l-[40px] border-l-transparent
  border-t-[65px] border-t-screen
  border-r-[40px] border-r-transparent"
      ></button>
    </div>
  );
};

export default CounterButtons;
