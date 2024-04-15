"use client";
import ModalActivity from "@/app/hoat-dong/components/Modal";
import PaginationComp from "@/components/pagination/PaginationComp";
import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { Spinner, useDisclosure } from "@nextui-org/react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import useActivitiesQuery from "@/hooks/useActivitiesQuery";

interface ListCardProps {
  pageIndex: number;
  pageSize: number;
  search: string;
}

const ListCard = ({ pageIndex, pageSize, search }: ListCardProps) => {
  const router = useRouter();
  const [chosenItem, setChosenItem] = useState<any>(null);

  const handleChosenItem = (item: any) => {
    setChosenItem(item);
  };

  const { data, isLoading } = useQuery({
    ...useActivitiesQuery({
      pageIndex,
      pageSize,
      search,
    }),
    placeholderData: keepPreviousData,
  });

  const activitiesData = data?.result;

  const handleChangePage = (pageIndex: string) => {
    router.push(
      `/hoat-dong?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}`
    );
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner label="Loading..." color="primary" />
        </div>
      ) : (
        <>
          {activitiesData?.result?.length > 0 ? (
            <>
              <div className="grid grid-cols-12 gap-4 lg:gap-10 ">
                {activitiesData?.result?.map((item, index) => (
                  <CardItem
                    key={index}
                    onOpen={onOpen}
                    onChosenItem={handleChosenItem}
                    item={item}
                  />
                ))}
              </div>
              <div className="flex items-center justify-center w-full pt-10">
                <PaginationComp
                  totalPage={data?.result?.totalPage}
                  onChangePage={handleChangePage}
                  pageIndex={pageIndex}
                />
              </div>
            </>
          ) : (
            <div className="text-center font-semibold text-xl">
              Dữ liệu đang được cập nhật...
            </div>
          )}
        </>
      )}

      <ModalActivity
        isOpen={isOpen}
        onClose={onClose}
        images={chosenItem?.images}
      />
    </div>
  );
};

export default ListCard;
