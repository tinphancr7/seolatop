"use client";
// import ListCard from "@/components/card/ListCard";
const ListCard = dynamic(() => import("@/components/card/ListCard"));

import useProjectsQuery from "@/hooks/useProjectsQuery";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import dynamic from "next/dynamic";
import {useRouter} from "next/navigation";

import React from "react";

const ListProject = ({
	pageIndex,
	pageSize,
	search,
}: {
	pageIndex: number;
	pageSize: number;
	search: string;
}) => {
	const router = useRouter();
	const {data, isLoading} = useQuery({
		...useProjectsQuery({pageIndex, pageSize, search}),
		placeholderData: keepPreviousData,
	});
	const resultData = data?.result;

	const handleChangePage = (pageIndex: string) => {
		return router.push(
			`/du-an?pageIndex=${pageIndex}&pageSize=${pageSize}${
				search ? `&search=${search}` : ""
			}`
		);
	};
	return (
		<ListCard
			data={resultData}
			pageIndex={pageIndex}
			kind="du-an"
			isLoading={isLoading}
			onChangePage={handleChangePage}
		/>
	);
};

export default ListProject;
