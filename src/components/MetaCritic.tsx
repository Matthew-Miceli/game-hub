import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const MetaCritic = ({ score }: Props) => {
  let color;
  if (score > 75) {
    color = "green";
  } else if (score > 60) {
    color = "yellow";
  } else {
    color = "red";
  }
  return (
    <Badge fontSize="14px" paddingX={2} colorScheme={color} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default MetaCritic;
