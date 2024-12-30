import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { error, games } = useGames();
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
