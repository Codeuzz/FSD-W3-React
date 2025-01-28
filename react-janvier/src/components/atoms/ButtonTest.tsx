interface ButtonTestProps {
  onClick: () => void;
}

export const ButtonTest = ({ onClick }: ButtonTestProps) => {
  return (
    <button
      className="border-2 border-blue-500 px-4 py-1 rounded-2xl hover:cursor-pointer hover:bg-blue-900"
      onClick={onClick}
    >
      CLICK ME
    </button>
  );
};
