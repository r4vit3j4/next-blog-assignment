import Link from "next/link";

interface IPostTitleCard {
  title: string;
  id: number;
}

const PostTitleCard = ({ title, id }: IPostTitleCard) => {
  return (
    <Link href={`/blog/${id}`} className="inline-grid">
      <div className="border p-4 rounded-md shadow-sm hover:shadow transition duration-300 ease-in-out">
        <h3 className="scroll-m-20 text-lg font-medium tracking-tight">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default PostTitleCard;
