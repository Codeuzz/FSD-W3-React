interface GreetingsProps {
  name: string;
  age: number;
}
export const Greetings: React.FC<GreetingsProps> = ({ name, age }) => {
  return (
    <h1>
      Hello {name} I know you are {age} olds.
    </h1>
  );
};
