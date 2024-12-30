import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const MetaCritic = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge fontSize="14px" paddingX={2} colorScheme={color} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default MetaCritic;
