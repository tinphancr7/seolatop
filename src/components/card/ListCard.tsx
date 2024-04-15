"use client";

import PaginationComp from "@/components/pagination/PaginationComp";

import CardItem from "./CardItem";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {useRouter} from "next/navigation";

import useBlogsQuery from "@/hooks/useBlogsQuery";
import {Spinner} from "@nextui-org/react";
import useProjectsQuery from "@/hooks/useProjectsQuery";

interface ListCardProps {
	kind: string;
	pageIndex: number;
	pageSize: number;
	search: string;
	type?: string;
}

const ListCard = ({kind, pageIndex, pageSize, search, type}: ListCardProps) => {
	const router = useRouter();
	const {data, isLoading: isLoadingBlog} = useQuery({
		...useBlogsQuery({
			pageIndex,
			pageSize,
			search,
			type,
		}),
		enabled: kind === "blog",

		placeholderData: keepPreviousData,
	});
	const blogsData = data?.result;

	const {data: seoProjects} = useQuery({
		...useProjectsQuery({
			pageIndex,
			pageSize,
			search,
		}),
		enabled: kind === "project",
		placeholderData: keepPreviousData,
	});
	const seoProjectsData = seoProjects?.result;

	const handleChangePage = (pageIndex: string) => {
		const link =
			kind === "project"
				? `/project?pageIndex=${pageIndex}&pageSize=${pageSize}${
						search ? `&search=${search}` : ""
				  }`
				: `/blog?pageIndex=${pageIndex}&pageSize=${pageSize}${
						search ? `&search=${search}` : ""
				  }&type=${type}`;
		return router.push(link);
	};
	let resultData = kind === "project" ? seoProjectsData : blogsData;

	return (
		<>
			{isLoadingBlog ? (
				<div className="flex items-center justify-center">
					<Spinner label="Loading..." color="primary" />
				</div>
			) : (
				<div>
					{resultData?.result?.length > 0 ? (
						<>
							<div className="grid grid-cols-12 gap-4 lg:gap-10 ">
								{resultData?.result?.map((item, index) => (
									<CardItem kind={kind} key={index} item={item} />
								))}
							</div>
							<div className="flex items-center justify-center w-full pt-10">
								<PaginationComp
									pageIndex={pageIndex}
									totalPage={resultData?.totalPage}
									onChangePage={handleChangePage}
								/>
							</div>
						</>
					) : (
						<div className="text-center font-semibold text-xl">
							Dữ liệu đang được cập nhật...
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default ListCard;
