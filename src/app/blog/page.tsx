import Heading from "@/components/heading/Heading";
import TabBlog from "./components/TabBlog";
import ListCard from "@/components/card/ListCard";
import InputSearch from "../../components/input/InputSearch";
import BgImg from "@/components/bg/BgImg";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import useBlogsQuery from "@/hooks/useBlogsQuery";
const BlogPage = async ({
  searchParams,
}: {
  searchParams: {
    pageIndex: number;
    pageSize: number;
    search: string;
    type: string;
  };
}) => {
  const pageIndex = searchParams?.pageIndex || 1;
  const pageSize = searchParams?.pageSize || 2;
  const search = searchParams?.search || "";
  const type = searchParams?.type || "experience";
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    useBlogsQuery({ pageIndex, pageSize, search, type })
  );
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-[861px]">
        <BgImg />
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-[861px] rotate-180 hidden lg:block">
				<BgImg />
			</div> */}
      <div className="bg-blue00 pb-10">
        <div className="relative container mx-auto  ">
          <Heading>BLOG</Heading>
          <div className="mb-6 lg:mb-10">
            <TabBlog
              kind="blog"
              pageIndex={pageIndex}
              pageSize={pageSize}
              type={type}
              search={search}
            />
          </div>

          <div className="flex items-center justify-center w-full mb-10">
            <InputSearch
              kind="blog"
              pageIndex={pageIndex}
              pageSize={pageSize}
              type={type}
            />
          </div>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="h-fit">
              <ListCard
                kind="blog"
                type={type}
                pageIndex={pageIndex}
                pageSize={pageSize}
                search={search}
              />
            </div>
          </HydrationBoundary>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
