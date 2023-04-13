import CounterButtons from "./CounterButtons";

import Timer from "./Timer";
import { useSubject } from "./useSubjectHook";

const ScreenTimerDisplay = ({ controller }) => {
  const [time, setTime] = useSubject(controller.timer);
  const minute = String(Math.floor(time / 60)).padStart(2, "0");
  const second = String(time % 60).padStart(2, "0");

  return (
    <div className="flex flex-row gap-16 w-8/10 h-1/2 ml-6 mt-6">
      <div className="grid place-items-center w-1/2 h-full bg-screen rounded-md">
        <Timer time={`${minute}:${second}`} />
      </div>
      <CounterButtons controller={controller} />
    </div>
  );
};

export default ScreenTimerDisplay;
