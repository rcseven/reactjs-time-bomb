const SquareButton = ({ color, name, onClick, isActive }) => {
  const border_color = isActive ? "border-8 2xl:border-4 solid white" : "";

  return (
    <button
      className={`aspect-[1/1] rounded-sm text-white font-black text-lg 2xl:text-xs lg:text-[0.5rem]  hover:scale-110 ${border_color}`}
      style={{ backgroundColor: color }}
      onClick={() => {
        onClick();
      }}
    >
      {name}
    </button>
  );
};

export default SquareButton;
