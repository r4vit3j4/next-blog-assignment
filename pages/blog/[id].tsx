import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const router = useRouter();
  const [post, setPost] = useState<IPost | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const id = router.query.id;

  const fetchPost = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  };

  useEffect(() => {
    if (!!id) {
      fetchPost()
        .then((res) => {
          setPost(res);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsError(true);
          setIsLoading(false);
        });
    }
  }, [id]);

  return (
    <div>
      <div className="container flex flex-col gap-8">
        <Button asChild className="self-start">
          <Link href="/blog">
            <ArrowLeft className="mr-1 h-4 w-4" /> All Posts
          </Link>
        </Button>

        {isLoading ? (
          <div className="flex justify-center">
            <Skeleton className="w-full max-w-xl h-40 rounded-lg" />
          </div>
        ) : (
          <div className="flex flex-col gap-4 items-center">
            <div>
              <p className="text-xl font-semibold tracking-tight">Post {id}</p>
            </div>
            <div className="p-4 border rounded-lg max-w-xl shadow-sm hover:shadow transition duration-300 ease-in-out">
              <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {isError ? "An error cccured, please try again" : post?.title}
              </h3>
              <p className="leading-7 [&:not(:first-child)]:mt-4">
                {post?.body}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
