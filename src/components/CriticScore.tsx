import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 90 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize="2xl" paddingX={2} borderRadius="10px">
      {score}
    </Badge>
  );
};

export default CriticScore;
