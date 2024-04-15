import {Pagination} from "@nextui-org/react";
import React from "react";

const PaginationComp = ({totalPage, onChangePage, pageIndex}: any) => {
	return (
		<Pagination
			isCompact
			showControls
			color="success"
			total={totalPage}
			initialPage={1}
			onChange={(page) => {
				onChangePage(page);
			}}
			page={Number(pageIndex)}
			classNames={{
				cursor: "bg-green32 text-white font-bold",
			}}
		/>
	);
};

export default PaginationComp;
