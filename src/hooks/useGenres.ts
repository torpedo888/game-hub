import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGames] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

  useEffect(() => {

    const abortController = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchGenresResponse>("/genres", { signal: abortController.signal })
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
       if (error.name === "CanceledError") return;
       console.log(error); 
        setError("Failed to fetch genres: " + error.message);
        setLoading(false);
      });

      return () => abortController.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;