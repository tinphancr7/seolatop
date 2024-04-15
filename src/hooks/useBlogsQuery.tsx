import { fetchAllBlogs } from "@/apis/blog.api";

const useBlogsQuery = ({
  pageIndex,
  pageSize,
  search,
  type,
}: {
  pageIndex: number;
  pageSize: number;
  search: string;
  type: string;
}) => {
  const queryKey = ["blogs", pageIndex, pageSize, search, type];
  const queryFn = () =>
    fetchAllBlogs({
      pageIndex,
      pageSize,
      search,
      type,
    });
  return { queryKey, queryFn };
};

export default useBlogsQuery;
