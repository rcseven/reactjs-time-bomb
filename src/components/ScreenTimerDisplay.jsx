import CounterButtons from "./CounterButtons";

import Timer from "./Timer";
import { useSubject } from "../hooks/useSubjectHook";

const ScreenTimerDisplay = ({ controller }) => {
  const [time, setTime] = useSubject(controller.timer);
  const minute = String(Math.floor(time / 60)).padStart(2, "0");
  const second = String(time % 60).padStart(2, "0");

  return (
    <div className="flex flex-row space-x-16 2xl:space-x-8 lg:space-x-4 w-8/10 h-1/2 ml-6 mt-6 2xl:ml-4 2xl:mt-4 lg:ml-2 lg:mt-2">
      <div className="grid place-items-center w-1/2 h-full bg-screen rounded-md">
        <Timer time={`${minute}:${second}`} />
      </div>
      <CounterButtons controller={controller} />
    </div>
  );
};

export default ScreenTimerDisplay;
