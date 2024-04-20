import {fetchBlogBySlug} from "@/apis/blog.api";
import {HydrationBoundary, QueryClient, dehydrate} from "@tanstack/react-query";
import BlogDetail from "./blog-detail";

type Props = {
	params: {slug: string};
};

export async function generateMetadata({params}: Props) {
	try {
		const data = await fetchBlogBySlug(params?.slug);
		const description = data?.result?.description.replace(/<[^>]*>?/gm, "");
		return {
			title: data?.result?.title,
			description,
		};
	} catch (error) {}
}
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
