import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, HStack } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HStack>
        <Button colorPalette="blue">Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </>
  );
}

export default App;
