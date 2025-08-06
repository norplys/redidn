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
    <div className="grid gap-2">
      <div className="flex justify-between">
        <div className="flex justify-center items-center gap-2 text-xs text-gray-400">
          <Community
            communityName={communityName}
            src={communityLogoImageLink}
            imageClassName="h-8 w-8"
            isPopular={false}
            titleClassName="text-base text-primary"
          />
          ◕{` ${time}`}
        </div>
        <div className="flex justify-center items-center">
          <Link
          href={communityLink}
          className="text-sm bg-blue-900 px-2 text-primary-foreground rounded-full"
          >
            Join
          </Link>
          <Button>...</Button>
        </div>
      </div>
      <h1 className="font-semibold">{title}</h1>
      {media && (
        <LazyImage
          src={media}
          alt={`${title} image`}
          className="w-full max-h-96 rounded-2xl"
        />
      )}
      <PostButton
        likesCount={likesCount}
        commentCount={commentCount}
        postLink={postLink}
      />
    </div>
  );
}

type PostButtonProps = {
  likesCount: number;
  commentCount: number;
  postLink: string;
};

function PostButton({ likesCount, commentCount, postLink }: PostButtonProps) {
  return (
    <div className="flex">
      <div>
        <Button>^</Button>
        {likesCount}
        <Button>v</Button>
      </div>
      <Button>{commentCount}</Button>
      <Button>Medal</Button>
      <Button
      // href={postLink}
      >
        Share
      </Button>
    </div>
  );
}
