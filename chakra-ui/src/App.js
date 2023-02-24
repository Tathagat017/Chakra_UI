import React, { useState } from "react";
import BoxR from "./Components/Box";
import CenterExample from "./Components/Center";
import "./App.css";
import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Button,
  InputRight,
  InputRightElement,
} from "@chakra-ui/react";

import ContainerExample from "./Components/Container";
function App() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  function Cont() {
    let h = [];
    for (let i = 0; i <= 12; i++) {
      h.push(
        <div>
          <BoxR />
        </div>
      );
    }
    console.log(<div style={{ display: "inline" }}>h</div>);
    return h;
  }

  return (
    <div className="App">
      <Stack spacing={4}>
        <InputGroup className="IN">
          <InputLeftAddon children="+234" />
          <Input type="tel" placeholder="phone number" />
        </InputGroup>

        {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
        <InputGroup size="sm">
          <InputLeftAddon children="https://" />
          <Input placeholder="mysite" />
        </InputGroup>

        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {Cont()}
      </Stack>
      <CenterExample />
      <ContainerExample />
    </div>
  );
}

export default App;
