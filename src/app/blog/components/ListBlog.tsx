"use client";
const ListCard = dynamic(() => import("@/components/card/ListCard"));
import useBlogsQuery from "@/hooks/useBlogsQuery";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import dynamic from "next/dynamic";
import {useRouter} from "next/navigation";

import React from "react";

const ListBlog = ({
	pageIndex,
	pageSize,
	search,
	type,
}: {
	pageIndex: number;
	pageSize: number;
	search: string;
	type: string;
}) => {
	const router = useRouter();
	const {data, isLoading} = useQuery({
		...useBlogsQuery({pageIndex, pageSize, search, type}),
		placeholderData: keepPreviousData,
	});
	const resultData = data?.result;

	const handleChangePage = (pageIndex: string) => {
		return router.push(
			`/blog?pageIndex=${pageIndex}&pageSize=${pageSize}${
				search ? `&search=${search}` : ""
			}&type=${type}`
		);
	};
	return (
		<ListCard
			data={resultData}
			pageIndex={pageIndex}
			kind="blog"
			isLoading={isLoading}
			onChangePage={handleChangePage}
		/>
	);
};

export default ListBlog;
