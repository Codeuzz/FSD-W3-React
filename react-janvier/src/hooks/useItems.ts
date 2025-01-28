import { fetchItems } from "src/itemsApi";
import { useQuery } from "@tanstack/react-query";

export const useItems = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: fetchItems,
  });
};
