import React from "react";
import { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import MetaCritic from "./MetaCritic";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconsList>
          <MetaCritic score={game.metacritic}></MetaCritic>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
