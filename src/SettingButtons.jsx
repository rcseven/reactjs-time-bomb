import SquareButton from "./SquareButton";

const SettingButtons = () => {
  return (
    <div className="flex flex-row justify-between w-full h-1/5 my-10 px-6 ">
      <div className="flex flex-row gap-2">
        <SquareButton color="green" name="Start" />
        <SquareButton color="yellow" name="Set" />
        <SquareButton color="red" name="Cancel" />
      </div>
      <div className="flex flex-row gap-2">
        <SquareButton color="#484F5F" name="min" />
        <SquareButton color="#484F5F" name="sec" />
      </div>
    </div>
  );
};

export default SettingButtons;
