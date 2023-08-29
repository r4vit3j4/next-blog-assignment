import { useEffect, useState } from "react";
import axios from "axios";
import PostTitleCard from "@/components/posts/PostTitleCard";
import { Skeleton } from "@/components/ui/skeleton";

const BlogPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return response.data;
  };

  useEffect(() => {
    fetchPosts().then((res) => {
      setPosts(res);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="flex flex-col gap-8">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Blog Page
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? [...Array(20)].map((_, index) => {
                  return <Skeleton key={index} className="w-full h-24" />;
                })
              : posts.map((post) => {
                  return (
                    <PostTitleCard
                      key={post.id}
                      id={post.id}
                      title={post.title}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
