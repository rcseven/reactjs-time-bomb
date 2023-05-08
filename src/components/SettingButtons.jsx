import SquareButton from "./SquareButton";
import { useSubject } from "../hooks/useSubjectHook";

const SettingButtons = ({ controller }) => {
  const [mode, setMode] = useSubject(controller.set_mode);

  return (
    <div className=" flex flex-row justify-between w-full h-1/5 mt-8 2xl:mt-6 lg-mt-4 px-6 2xl:px-4 lg:px-2 overflow-y-hidden">
      <div className=" flex flex-row gap-2 2xl:gap-1 h-full">
        <SquareButton
          color="green"
          name="Start"
          onClick={() => {
            controller.start();
          }}
        />
        <SquareButton
          color="yellow"
          name="Reset"
          onClick={() => controller.reset()}
        />
        <SquareButton
          color="red"
          name="Cancel"
          onClick={() => controller.stop()}
        />
      </div>
      <div className="flex flex-row gap-2 2xl:gap-1">
        <SquareButton
          color="#484F5F"
          name="min"
          onClick={() => controller.setMinutes()}
          isActive={mode === "minutes"}
        />
        <SquareButton
          color="#484F5F"
          name="sec"
          onClick={() => controller.setSeconds()}
          isActive={mode === "seconds"}
        />
      </div>
    </div>
  );
};

export default SettingButtons;
