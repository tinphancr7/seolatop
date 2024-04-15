"use client";
import newApi from "@/apis/new.api";
import {Spinner} from "@nextui-org/react";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import React, {useState} from "react";
import NewItem from "./NewItem";
import PaginationComp from "../pagination/PaginationComp";

const ListNew = () => {
	const [page, setPage] = useState(1);
	const [pageSize, _] = useState(4);
	const {data, isLoading} = useQuery({
		queryKey: ["news", page],
		queryFn: () =>
			newApi.getAllNews({
				pageIndex: page,
				pageSize,
				search: "",
			}),
		placeholderData: keepPreviousData,
	});
	const newsData = data?.data?.result;
	console.log("news", newsData);
	const handleChangePage = (page: number) => {
		setPage(page);
	};
	return (
		<div>
			{isLoading ? (
				<div className="flex items-center justify-center">
					<Spinner label="Loading..." color="primary" />
				</div>
			) : (
				<>
					<div className="grid grid-cols-12 gap-2 lg:gap-10">
						{newsData?.result?.map((item: any, index: number) => (
							<NewItem key={index} item={item} />
						))}
					</div>
					<div className="flex items-center justify-center w-full mt-6">
						<PaginationComp
							totalPage={newsData?.totalPage}
							onChangePage={handleChangePage}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default ListNew;
