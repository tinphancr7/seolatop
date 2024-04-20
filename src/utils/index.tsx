const getMetaData = (data: any) => {
	const title = data?.result?.tags?.find((tag) => tag.includes("<title>"));
	const titleContent = title?.replace("<title>", "").replace("</title>", "");
	const descriptionTag = data?.result?.tags?.find((tag) =>
		tag.includes('name="description"')
	);
	let descriptionContent = "";
	if (descriptionTag) {
		const match = descriptionTag.match(/content="([^"]+)"/);
		descriptionContent = match ? match[1] : "";
	}

	return {
		title: titleContent,
		description: descriptionContent || "seolatop - seo top 1 google",
	};
};

export {getMetaData};
