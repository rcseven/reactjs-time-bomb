import BombLayout from "./BombLayout";
import Device from "./Device";

const Bomb = () => {
  return (
    <div className="relative container w-2/3 h-3/5 bg-transparent">
      <BombLayout />
      <Device />
    </div>
  );
};

export default Bomb;
