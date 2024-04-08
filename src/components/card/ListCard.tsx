"use client";
import ModalActivity from "@/app/hoat-dong/components/Modal";
import PaginationComp from "@/components/pagination/PaginationComp";
import React, {useState} from "react";
import CardItemModal from "./CardItemModal";
import {useDisclosure} from "@nextui-org/react";
import CardItem from "./CardItem";

interface ListCardProps {
	kind?: string;
}

const ListCard = ({kind}: ListCardProps) => {
	const [page, setPage] = useState(1);
	const [pageSize, _] = useState(4);
	const handleChangePage = (page: number) => {
		setPage(page);
	};
	const {isOpen, onOpen, onClose} = useDisclosure();
	return (
		<div>
			<div className="grid grid-cols-12 gap-4 lg:gap-10 ">
				{new Array(12).fill(0).map((_, index) => (
					<>
						{kind === "activity" ? (
							<CardItemModal key={index} onOpen={onOpen} />
						) : (
							<CardItem kind={kind} key={index} />
						)}
					</>
				))}
			</div>
			<div className="flex items-center justify-center w-full pt-10">
				<PaginationComp totalPage={10} onChangePage={handleChangePage} />
			</div>
			<ModalActivity isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
		</div>
	);
};

export default ListCard;
