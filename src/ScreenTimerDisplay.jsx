import CounterButtons from "./CounterButtons";

const ScreenTimerDisplay = () => {
  return (
    <div className="flex flex-row gap-16 w-8/10 h-1/2 ml-6 mt-6">
      <div className="w-1/2 h-full bg-screen rounded-md"></div>
      <CounterButtons />
    </div>
  );
};

export default ScreenTimerDisplay;
