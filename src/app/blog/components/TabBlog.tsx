import {listMenuBlog} from "@/constants";

import {Tabs, Tab} from "@nextui-org/react";

const TabBlog = () => {
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
