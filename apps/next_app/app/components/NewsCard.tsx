import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@repo/ui/components/ui/card";
import Image from "next/image";

interface NewsCardProps {
	title: string;
	description: string;
	imageUrl: string;
	date: string;
}

export function NewsCard({
	title,
	description,
	imageUrl,
	date,
}: NewsCardProps) {
	return (
		<Card className="overflow-hidden transition-shadow hover:shadow-lg">
			<div className="relative h-48 w-full">
				<Image src={imageUrl} alt={title} fill className="object-cover" />
			</div>
			<CardHeader>
				<div className="text-muted-foreground text-sm">{date}</div>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
		</Card>
	);
}
