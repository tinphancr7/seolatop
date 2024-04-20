import {HydrationBoundary, QueryClient, dehydrate} from "@tanstack/react-query";
import ProjectDetail from "./project-detail";
import {fetchProjectBySlug} from "@/apis/project.api";

type Props = {
	params: {slug: string};
};

export async function generateMetadata({params}: Props) {
	try {
		const data = await fetchProjectBySlug(params?.slug);
		const description = data?.result?.description.replace(/<[^>]*>?/gm, "");
		return {
			title: data?.result?.title,
			description,
		};
	} catch (error) {}
}
export default async function ProjectDetailPage({
	params,
}: {
	params: {slug: string};
}) {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["project-detail", params.slug],
		queryFn: () => fetchProjectBySlug(params.slug),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ProjectDetail slug={params.slug} />
		</HydrationBoundary>
	);
}
