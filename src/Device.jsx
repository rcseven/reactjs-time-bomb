import ScreenTimerDisplay from "./ScreenTimerDisplay";
import SettingButtons from "./SettingButtons";
import { TimeConrtoller } from "./TimeController";
import { useSubject } from "./useSubjectHook";
import explosion from "./assets/explosion.gif";

const controller = new TimeConrtoller(5);

const Device = () => {
  const time = useSubject(controller.timer);

  return (
    <div className="absolute top-1/4 left-0 right-1/4 m-auto w-1/3 h-1/2 rounded-lg    bg-device">
      <ScreenTimerDisplay controller={controller} />
      <SettingButtons controller={controller} />
      {time[0] <= 0 && (
        <img
          src={explosion}
          alt="BOOOOOOOOOOOOOOOM!!!!"
          className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ maxWidth: "unset", width: "140em" }}
        />
      )}
    </div>
  );
};

export default Device;
