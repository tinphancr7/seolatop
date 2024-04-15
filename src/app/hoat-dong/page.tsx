import Heading from "@/components/heading/Heading";
import InputSearch from "@/components/input/InputSearch";
import React, { use } from "react";
import BgImg from "@/components/bg/BgImg";
import { QueryClient } from "@tanstack/react-query";
import useActivitiesQuery from "@/hooks/useActivitiesQuery";
import ListCard from "@/app/hoat-dong/components/ListCard";

const ActivityPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const pageIndex =
    typeof searchParams.pageIndex === "string"
      ? Number(searchParams?.pageIndex)
      : 1;
  const pageSize =
    typeof searchParams.pageSize === "string"
      ? Number(searchParams?.pageSize)
      : 1;
  console.log("searchParams", pageIndex, pageSize);
  const search =
    typeof searchParams.search === "string" ? searchParams.search : "";
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    useActivitiesQuery({ pageIndex, pageSize, search })
  );
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-[861px]">
        <BgImg />
      </div>
      <div className="bg-blue00 pb-10">
        <div className="container mx-auto  relative">
          <Heading>HOẠT ĐỘNG</Heading>
          <div className="flex items-center justify-center w-full mb-10">
            <InputSearch
              kind="hoat-dong"
              pageIndex={pageIndex}
              pageSize={pageSize}
              search={search}
            />
          </div>
          <div>
            <ListCard
              pageIndex={pageIndex}
              pageSize={pageSize}
              search={search}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
