"use client";

import {useDebounce} from "@/hooks/useDebounce";
import {Input} from "@nextui-org/react";
import {useRouter} from "next/navigation";

import React, {useCallback, useEffect, useState} from "react";
import {IoSearchSharp} from "react-icons/io5";

const InputSearch = ({kind, search}: any) => {
	const router = useRouter();
	const [text, setText] = useState(search);

	const query = useDebounce(text, 500);

	const [initialRender, setInitialRender] = useState(true);
	const onClear = useCallback(() => {
		setText("");
	}, []);

	useEffect(() => {
		if (initialRender) {
			setInitialRender(false);
		} else {
			if (!query) {
				router.push(`/${kind}`);
			} else {
				router.push(`/${kind}?search=${query}`);
			}
		}
	}, [kind, query, router]);
	return (
		<Input
			isClearable
			className="w-full max-w-[600px]"
			variant="bordered"
			radius="lg"
			classNames={{
				inputWrapper: "rounded-full text-white focus:border-white",
				input: "focus:border-white",
			}}
			placeholder="Search by name..."
			startContent={<IoSearchSharp size={24} />}
			value={text}
			onClear={() => onClear()}
			onValueChange={(value) => setText(value)}
		/>
	);
};

export default InputSearch;
