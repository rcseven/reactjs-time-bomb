import ScreenTimerDisplay from "./ScreenTimerDisplay";
import SettingButtons from "./SettingButtons";

const Device = () => {
  return (
    <div className="absolute top-1/4 left-0 right-1/4 m-auto w-1/3 h-1/2 rounded-lg    bg-device">
      <ScreenTimerDisplay />
      <SettingButtons />
    </div>
  );
};

export default Device;
