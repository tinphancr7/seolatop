import {Pagination} from "@nextui-org/react";
import React from "react";

const PaginationComp = ({totalPage, onChangePage}: any) => {
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
			classNames={{
				cursor: "bg-green32 text-white font-bold",
			}}
		/>
	);
};

export default PaginationComp;
