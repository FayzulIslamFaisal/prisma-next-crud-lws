"use client";

import deletePinData from "@/app/apiService/deletePinData";
import Link from "next/link";
import { useTransition } from "react";

const PinList = ({ pinData }) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = async (itemId) => {
    startTransition(async () => {
      try {
        const response = await deletePinData(itemId);
        if (!response) {
          throw new Error("Deletion failed. No response from server.");
        }
        console.log("Pin deleted successfully:", response);
      } catch (error) {
        console.error("Error deleting pin:", error);
      }
    });
  };

  return (
    <li className="shadow border-gray-500 border-2 px-4 py-3 relative pb-16">
      <div className="h-full">
        <p>Id: {pinData?.id}</p>
        <p>title: {pinData?.title}</p>
        <p>Description: {pinData?.description}</p>
        <p>Type: {pinData?.type}</p>
        <p>Content: {pinData?.content}</p>
      </div>
      <p className="flex justify-between pt-4 absolute left-4 right-4 bottom-2  ">
        <button
          onClick={() => handleDelete(pinData?.id)}
          className="bg-red-600 text-white px-4 py-1"
        >
          {isPending ? "Deleting..." : "Delete"}
        </button>
        <Link
          href={`/pin-edit/${pinData?.id}`}
          className="bg-black text-white px-4 py-1"
        >
          Edit
        </Link>
      </p>
    </li>
  );
};

export default PinList;
