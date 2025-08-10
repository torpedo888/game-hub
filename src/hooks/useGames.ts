import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export interface Platform {
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {

    const abortController = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchGamesResponse>("/games", { signal: abortController.signal })
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
       if (error.name === "CanceledError") return;
       console.log(error); 
        setError("Failed to fetch games: " + error.message);
        setLoading(false);
      });

      return () => abortController.abort();
  }, []);

  return { games, error, isLoading };
}

  export default useGames;