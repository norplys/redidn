import Link from "next/link";
import { Community } from "./community";
import { LazyImage } from "../common/lazy-image";
import { Button } from "../ui/button";

type CommunityPostProps = {
  title: string;
  media: string;
  communityLink: string;
  communityName: string;
  communityLogoImageLink: string;
  time: string;
  likesCount: number;
  commentCount: number;
  postLink: string;
};

export function CommunityPost({
  title,
  media,
  communityLink,
  communityName,
  communityLogoImageLink,
  time,
  likesCount,
  commentCount,
  postLink,
}: CommunityPostProps) {
  return (
    <Link href={postLink} className="grid">
      <div>
        <Community
          communityName={communityName}
          src={communityLogoImageLink}
          imageClassName="h-8 w-8"
          isPopular={false}
        />
        {` ${time}`}
        <div>
          <Link href={communityLink}>Join</Link>
          <button>...</button>
        </div>
      </div>
      <LazyImage src={media} alt={`${title} image`} />
      <PostButton
        likesCount={likesCount}
        commentCount={commentCount}
        postLink={postLink}
      />
    </Link>
  );
}

type PostButtonProps = {
  likesCount: number;
  commentCount: number;
  postLink: string;
};

function PostButton({ likesCount, commentCount, postLink }: PostButtonProps) {
  return (
    <div>
      <div>
        <Button>^</Button>
        {likesCount}
        <Button>v</Button>
      </div>
      <Button>{commentCount}</Button>
      <Button>Medal</Button>
      <Link href={postLink}>Share</Link>
    </div>
  );
}
