import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="Logo" boxSize="50px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
