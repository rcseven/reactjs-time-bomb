const SquareButton = ({ color, name, onClick, isActive }) => {
  const border_color = isActive ? "2px solid red" : "";
  return (
    <button
      className="aspect-[1/1] rounded-sm text-white font-black text-lg"
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
