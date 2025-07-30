import { LazyImage } from "../common/lazy-image";
import clsx from "clsx";

type CommuntiyProps = {
  src: string;
  communityName: string;
  memberCount?: number;
  titleClassName?: string;
  imageClassName: string;
  isPopular: boolean;
};

export function Community({
  src,
  communityName,
  memberCount,
  titleClassName,
  imageClassName,
  isPopular,
}: CommuntiyProps) {
  return (
    <div className="flex items-center gap-2">
      <LazyImage
        src={src}
        alt={`${communityName} logo`}
        className={clsx("rounded-full", imageClassName)}
      />
      <div>
        <h2 className={titleClassName}>{communityName}</h2>
        {isPopular && (
          <p className="text-xs text-gray-500">{memberCount} members</p>
        )}
      </div>
    </div>
  );
}
