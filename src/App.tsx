import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Button
        handleClick={() => console.log("Click Me!")}
        label="Hello World"
      />
    </>
  );
}

export default App;
