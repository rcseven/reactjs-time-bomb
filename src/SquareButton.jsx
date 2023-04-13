const SquareButton = ({ color, name, onClick, isActive }) => {
  const border_color = isActive ? ".5em solid white" : "";
  return (
    <button
      className="aspect-[1/1] rounded-sm text-white font-black text-lg  hover:scale-110"
      style={{ backgroundColor: color, border: border_color }}
      onClick={() => {
        onClick();
      }}
    >
      {name}
    </button>
  );
};

export default SquareButton;
