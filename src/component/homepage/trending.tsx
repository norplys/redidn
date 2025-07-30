export function Trending() {
  return (
    <div className="flex gap-4">
      <TrendingCard />
      <TrendingCard />
      <TrendingCard />
      <TrendingCard />
    </div>
  );
}

function TrendingCard() {
  return (
    <div className="bg-[url('https://i0.wp.com/articles.connectnigeria.com/wp-content/uploads/2024/05/TRENDING.jpg?fit=800%2C613&ssl=1')] bg-cover bg-center rounded-lg p-4 w-60 h-48 border-border border"></div>
  );
}
