import { fetchItems } from "src/api/itemsApi";
import { useQuery } from "@tanstack/react-query";

export const useItems = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: fetchItems,
  });
};
