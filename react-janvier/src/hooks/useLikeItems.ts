import { likeItem } from "src/api/itemsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLikeItems = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likeItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["item"] });
    },
  });
};
