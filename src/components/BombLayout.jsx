import RedWire from "../assets/RedWire.svg";
import BlueWire from "../assets/BlueWire.svg";

const BombLayout = () => {
  const bomb_row_odd = "w-full h-1/4 bg-primary z-10";
  const bomb_row_even = "w-full h-1/4 bg-secondary z-10";
  const bomb_strap = "w-1/12  h-full bg-tertiary z-20";
  return (
    <>
      <div className="flex flex-col w-4/5 h-full ">
        <div className={bomb_row_odd}></div>
        <div className={bomb_row_even}></div>
        <div className={bomb_row_odd}></div>
        <div className={bomb_row_even}></div>
      </div>
      <div className="absolute top-0 px-10 flex flex-row justify-between w-4/5 h-full ">
        <div className={bomb_strap}></div>
        <div className={bomb_strap}></div>
      </div>

      <div className="absolute w-auto h-full top-0 right-24 z-0">
        <img src={RedWire} alt="red wire" className="relative w-auto h-1/2 " />
        <img
          src={BlueWire}
          alt="blue wire"
          className="relative w-auto h-1/2 "
        />
      </div>
    </>
  );
};

export default BombLayout;
