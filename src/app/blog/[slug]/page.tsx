import {fetchBlogBySlug} from "@/apis/blog.api";
import {HydrationBoundary, QueryClient, dehydrate} from "@tanstack/react-query";
import BlogDetail from "./blog-detail";
import {Metadata} from "next";
type Props = {
	params: {slug: string};
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
	const data = await fetchBlogBySlug(params?.slug);
	const description = data?.result?.description.replace(/<[^>]*>?/gm, "");
	return {
		title: data?.result?.title,
		description,
	};
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
