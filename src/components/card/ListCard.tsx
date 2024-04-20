"use client";
const PaginationComp = dynamic(
	() => import("@/components/pagination/PaginationComp")
);

const CardItem = dynamic(() => import("./CardItem"));
import {Spinner} from "@nextui-org/react";
import dynamic from "next/dynamic";

const ListCard = ({pageIndex, kind, isLoading, data, onChangePage}: any) => {
	return (
		<>
			{isLoading ? (
				<div className="flex items-center justify-center">
					<Spinner label="Loading..." color="primary" />
				</div>
			) : (
				<div>
					{data?.result?.length > 0 ? (
						<>
							<div className="grid grid-cols-12 gap-4 lg:gap-10 ">
								{data?.result?.map((item, index) => (
									<CardItem kind={kind} key={index} item={item} />
								))}
							</div>
							<div className="flex items-center justify-center w-full py-10">
								<PaginationComp
									pageIndex={pageIndex}
									totalPage={data?.totalPage}
									onChangePage={onChangePage}
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
