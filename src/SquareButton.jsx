const SquareButton = ({ color, name }) => {
  return (
    <button
      className="aspect-[1/1] rounded-sm text-white font-black text-lg"
      style={{ backgroundColor: color }}
    >
      {name}
    </button>
  );
};

export default SquareButton;
