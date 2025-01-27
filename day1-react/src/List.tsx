import { useEffect, useState } from "react";

interface ListProps {
  laListe: string[];
}

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
  liked?: boolean;
}

export const List: React.FC<ListProps> = ({}) => {
  const [posts, setPosts] = useState<Posts[]>([]);

  const fetchPosts = () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPosts(data);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const handleLike = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked } : post
      )
    );
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts &&
        posts.map((item, i) => (
          <li
            key={i}
            style={item.liked ? { color: "magenta" } : { color: "white" }}
          >
            {item.title}{" "}
            <button onClick={() => handleLike(item.id)}>
              {item.liked ? "Unlike" : "Like<3"}
            </button>
          </li>
        ))}
    </div>
  );
};
