import apiClient from "@/services/api-client";
import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";


interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

  useEffect(() => {

    const abortController = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: abortController.signal, ...requestConfig })
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
       if (error.name === "CanceledError") return;
       console.log(error); 
        setError("Failed to fetch genres: " + error.message);
        setLoading(false);
      });

      return () => abortController.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

export default useData;