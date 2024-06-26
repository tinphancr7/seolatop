"use client";
import {listMenuBlog} from "@/constants";
import {Tabs, Tab} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const TabBlog = ({kind, type, search}: any) => {
	const [tab, setTab] = useState(type);
	const [initialRender, setInitialRender] = useState(true);
	const router = useRouter();
	useEffect(() => {
		if (initialRender) {
			setInitialRender(false);
		} else {
			router.push(`/${kind}?type=${tab}${search ? `&search=${search}` : ""}`);
		}
	}, [kind, router, tab]);
	return (
		<div className="flex w-full items-center justify-center">
			<Tabs
				aria-label="Options"
				color="primary"
				variant="underlined"
				classNames={{
					tabList: "gap-6 w-full relative rounded-none p-0  space-x-8",
					cursor: "w-full bg-green32",
					tab: "max-w-fit px-0  h-12",
					tabContent:
						"group-data-[selected=true]:text-green32 text-base lg:text-4xl font-bold ",
				}}
				onSelectionChange={(selectedIndex) => {
					setTab(listMenuBlog[selectedIndex]?.type);
				}}
			>
				{listMenuBlog.map((item, index) => (
					<Tab
						key={item?.id}
						title={
							<div className="flex items-center ">
								<span>{item?.name}</span>
							</div>
						}
					/>
				))}
			</Tabs>
		</div>
	);
};

export default TabBlog;
