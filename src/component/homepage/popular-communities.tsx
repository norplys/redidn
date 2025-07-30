import { Community } from "../communities/community";

export function PopularCommunities() {
  return (
    <div className="col-span-3">
      <section className="bg-gray-200 p-5 rounded-2xl grid gap-5">
        <h1>Popular Communities</h1>
        <Community
          src="/logo/gray.png"
          communityName="mockCommunity"
          imageClassName="w-10 h-10"
          memberCount={0}
          isPopular={true}
        />
        <button className="text-start text-xs">See more</button>
      </section>
    </div>
  );
}
