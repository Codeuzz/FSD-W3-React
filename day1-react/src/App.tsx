import { Greetings } from "./Greetings";
import { List } from "./List";

function App() {
  return (
    <>
      <Greetings age={12} name={"Joe"} />
      <List laListe={["hello", "joe", "joe", "hello"]} />
    </>
  );
}

export default App;
