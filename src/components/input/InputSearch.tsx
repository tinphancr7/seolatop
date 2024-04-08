"use client";
import {Input} from "@nextui-org/react";
import React, {useCallback} from "react";
import {IoSearchSharp} from "react-icons/io5";

const InputSearch = () => {
	const [filterValue, setFilterValue] = React.useState("");
	const onSearchChange = React.useCallback((value) => {
		if (value) {
			setFilterValue(value);
		} else {
			setFilterValue("");
		}
	}, []);
	const onClear = useCallback(() => {
		setFilterValue("");
	}, []);
	return (
		<Input
			isClearable
			className="w-full max-w-[600px]"
			variant="bordered"
			radius="lg"
			classNames={{inputWrapper: "rounded-full"}}
			placeholder="Search by name..."
			startContent={<IoSearchSharp size={24} />}
			value={filterValue}
			onClear={() => onClear()}
			onValueChange={onSearchChange}
		/>
	);
};

export default InputSearch;
