import { CommunityPost } from "@/component/communities/community-post";
import { HomeFilter } from "@/component/homepage/home-filter";
import { PopularCommunities } from "@/component/homepage/popular-communities";
import { Trending } from "@/component/homepage/trending";

export default function Page() {
  return (
    <div className="grid gap-5">
      <Trending />
      <section className="grid  grid-cols-12 gap-5">
        <div className="col-span-9 grid gap-5">
          <HomeFilter />
          <CommunityPost
            commentCount={10}
            communityLink="www.google.com"
            communityLogoImageLink="/logo/gray.png"
            communityName="mockCom"
            likesCount={10}
            media="/logo/gray.png"
            postLink="www.google.com"
            time="10:00"
            title="mockTitle"
          />
        </div>
        <PopularCommunities />
      </section>
    </div>
  );
}
