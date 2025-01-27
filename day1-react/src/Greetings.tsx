interface GreetingsProps {
  name: string;
  age: number;
}
export const Greetings: React.FC<GreetingsProps> = ({ name, age }) => {
  if (age < 15) {
    return <h1>Hello {name}, you are quite young.</h1>;
  }
  return (
    <h1>
      Hello {name} I know you are {age} olds.
    </h1>
  );
};
