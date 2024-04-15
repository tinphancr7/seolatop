import {HydrationBoundary, QueryClient, dehydrate} from "@tanstack/react-query";
import ProjectDetail from "./project-detail";
import {fetchProjectBySlug} from "@/apis/project.api";

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
