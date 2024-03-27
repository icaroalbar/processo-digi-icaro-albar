import axios from "axios";
import useSWR from "swr";

export function useFetch<Data, Error>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async () => {
    const response = await axios.get(`http://localhost:3001/${url}`);
    return response.data;
  });

  return { data, error, key: url };
}