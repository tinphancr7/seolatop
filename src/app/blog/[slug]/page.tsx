import {fetchBlogBySlug} from "@/apis/blog.api";
import {HydrationBoundary, QueryClient, dehydrate} from "@tanstack/react-query";
import BlogDetail from "./blog-detail";

export default async function ProfilePage({params}: {params: {slug: string}}) {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["blog-detail", params.slug],
		queryFn: () => fetchBlogBySlug(params.slug),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<BlogDetail slug={params.slug} />
		</HydrationBoundary>
	);
}
