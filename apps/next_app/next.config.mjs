/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "picsum.photos",
			},
		],
	},
	transpilePackages: ["@repo/ui"],
};

export default nextConfig;
