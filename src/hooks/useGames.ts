import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";
import useData from "./useData";

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

const useGames = () => useData<Game>("/games")

export default useGames;