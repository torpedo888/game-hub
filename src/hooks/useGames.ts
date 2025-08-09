import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {

    const abortController = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: abortController.signal })
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
       if (error.name === "CanceledError") return;
       console.log(error); 
        setError("Failed to fetch games: " + error.message);
      });

      return () => abortController.abort();
  }, []);

  return { games, error };
}

  export default useGames;