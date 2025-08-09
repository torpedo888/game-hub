import { HStack, Image, space } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} alt="Logo" boxSize="50px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
