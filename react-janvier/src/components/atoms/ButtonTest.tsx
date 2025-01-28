interface ButtonTestProps {
  onClick: () => void;
}

export const ButtonTest = ({ onClick }: ButtonTestProps) => {
  return (
    <button className="border-2 border-blue-500 px-4 py-2" onClick={onClick}>
      CLICK ME
    </button>
  );
};
