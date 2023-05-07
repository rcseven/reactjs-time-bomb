import SquareButton from "./SquareButton";
import { useSubject } from "../hooks/useSubjectHook";

const SettingButtons = ({ controller }) => {
  const [mode, setMode] = useSubject(controller.set_mode);

  return (
    <div className="flex flex-row justify-between w-full h-1/5 my-10 px-6 ">
      <div className="flex flex-row gap-2">
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
      <div className="flex flex-row gap-2">
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
