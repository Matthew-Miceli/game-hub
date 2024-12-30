import React from "react";
import { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconsList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
