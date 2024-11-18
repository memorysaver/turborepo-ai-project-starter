import { NewsCard } from "./components/NewsCard";

// Sample news data
const newsItems = [
	{
		title: "The Future of AI",
		description:
			"Exploring the latest developments in artificial intelligence and their impact on society.",
		imageUrl: "https://picsum.photos/800/600?random=1",
		date: "2024-03-20",
	},
	{
		title: "Space Exploration Breakthrough",
		description:
			"Scientists discover potential signs of life on distant exoplanet.",
		imageUrl: "https://picsum.photos/800/600?random=2",
		date: "2024-03-19",
	},
	{
		title: "Climate Change Update",
		description:
			"New research shows promising results in carbon capture technology.",
		imageUrl: "https://picsum.photos/800/600?random=3",
		date: "2024-03-18",
	},
	// Add more news items as needed
];

export default function Page() {
	return (
		<main className="container mx-auto py-8">
			<h1 className="mb-8 font-bold text-4xl">Latest News</h1>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{newsItems.map((news, index) => (
					<NewsCard
						key={index}
						title={news.title}
						description={news.description}
						imageUrl={news.imageUrl}
						date={news.date}
					/>
				))}
			</div>
		</main>
	);
}
