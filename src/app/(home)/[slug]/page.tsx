import {HydrationBoundary, QueryClient, dehydrate} from "@tanstack/react-query";
const NewDetail = dynamic(() => import("./new-detail"));
import {fetchNewBySlug} from "@/apis/new.api";

import dynamic from "next/dynamic";

type Props = {
	params: {slug: string};
};

export async function generateMetadata({params}: Props) {
	try {
		const data = await fetchNewBySlug(params?.slug);

		const description = data?.result?.description.replace(/<[^>]*>?/gm, "");

		return {
			title: data?.result?.title,
			description,
		};
	} catch (error) {}
}
export default async function NewDetailPage({
	params,
}: {
	params: {slug: string};
}) {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["new-detail", params.slug],
		queryFn: () => fetchNewBySlug(params.slug),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<NewDetail slug={params.slug} />
		</HydrationBoundary>
	);
}
