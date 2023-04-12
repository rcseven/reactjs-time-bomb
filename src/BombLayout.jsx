import RedWire from "./assets/RedWire.svg";
import BlueWire from "./assets/BlueWire.svg";

const BombLayout = () => {
  return (
    <>
      <div className="flex flex-col w-4/5 h-full">
        <div className="w-full h-1/4 bg-primary"></div>
        <div className="w-full h-1/4 bg-secondary"></div>
        <div className="w-full h-1/4 bg-primary"></div>
        <div className="w-full h-1/4 bg-secondary"></div>
      </div>
      <div className="absolute top-0 px-10 flex flex-row justify-between w-4/5 h-full">
        <div className="w-1/12 h-full bg-tertiary"></div>
        <div className="w-1/12 h-full bg-tertiary"></div>
      </div>

      <div className="absolute w-auto h-full top-0 right-24 ">
        <img
          src={RedWire}
          alt="red wire"
          className="relative w-auto h-1/2 -z-10"
        />
        <img
          src={BlueWire}
          alt="blue wire"
          className="relative w-auto h-1/2 -z-10"
        />
      </div>
    </>
  );
};

export default BombLayout;
