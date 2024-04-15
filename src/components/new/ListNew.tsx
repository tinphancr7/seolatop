"use client";
import {Spinner} from "@nextui-org/react";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
// import NewItem from "./NewItem";
const NewItem = dynamic(() => import("./NewItem"));
// import PaginationComp from "../pagination/PaginationComp";
const PaginationComp = dynamic(() => import("../pagination/PaginationComp"));
import useNewsQuery from "@/hooks/useNewsQuery";
import {useRouter} from "next/navigation";
import dynamic from "next/dynamic";

const ListNew = ({pageIndex, pageSize, search}: any) => {
	const router = useRouter();
	const {data, isLoading} = useQuery({
		...useNewsQuery({
			pageIndex,
			pageSize,
			search,
		}),
		placeholderData: keepPreviousData,
	});
	const newsData = data?.result;

	const handleChangePage = (pageIndex: number) => {
		router.push(`/?pageIndex=${pageIndex}&pageSize=${pageSize}`);
	};
	return (
		<div>
			{isLoading ? (
				<div className="flex items-center justify-center">
					<Spinner label="Loading..." color="primary" />
				</div>
			) : (
				<>
					{newsData?.result?.length > 0 ? (
						<>
							<div className="grid grid-cols-12 gap-2 lg:gap-10">
								{newsData?.result?.map((item: any, index: number) => (
									<NewItem key={index} item={item} />
								))}
							</div>
							<div className="flex items-center justify-center w-full mt-6">
								<PaginationComp
									pageIndex={pageIndex}
									totalPage={newsData?.totalPage}
									onChangePage={handleChangePage}
								/>
							</div>
						</>
					) : (
						<div className="text-center font-semibold text-xl">
							Dữ liệu đang được cập nhật...
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default ListNew;
