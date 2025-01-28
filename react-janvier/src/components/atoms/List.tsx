import { useItems } from "src/hooks/useItems";
import { useLikeItems } from "src/hooks/useLikeItems";

export const List = () => {
  const { data, isLoading, isError, error, refetch } = useItems();
  const { mutate: likeItem } = useLikeItems();

  if (isLoading) {
    return <p>Loading</p>;
  }
  if (isError) {
    console.log(error);
    return <p>il y a une erreur </p>;
  }

  return (
    <div>
      <h2>Posts list</h2>
      <button onClick={() => refetch()}>Rafraîchir</button>
      <ul>
        {data.map((post: any) => (
          <li key={post.id}>
            {post.title} {post.completed ? "X" : ""}
            <button onClick={() => likeItem(post.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
