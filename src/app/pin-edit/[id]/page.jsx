"use client";
import fetchPinDatas from "@/app/apiService/getAllPins";
import updatePinData from "@/app/apiService/updatePinData";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { id: edit_id } = React.use(params);
  const [pinEditData, setPinEditData] = useState({
    title: "",
    description: "",
    type: "",
    content: "",
  });
  const router = useRouter();

  useEffect(() => {
    const fetchPinDataInfo = async () => {
      try {
        if (edit_id) {
          const data = await fetchPinDatas();
          const pinData = data.find((item) => item.id == edit_id);

          if (pinData) {
            setPinEditData({
              title: pinData.title || "",
              description: pinData.description || "",
              type: pinData.type || "",
              content: pinData.content || "",
            });
          } else {
            console.log("No pin data found for id:", edit_id);
          }
        }
      } catch (error) {
        console.error("Error fetching pin data:", error);
      }
    };

    if (edit_id) {
      fetchPinDataInfo();
    }
  }, [edit_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPinEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!edit_id) return;

    const response = await updatePinData(edit_id, pinEditData);

    if (response) {
      console.log("Pin updated successfully:", response);
      router.push("/");
    } else {
      console.error("Failed to update pin.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[450px] mx-auto p-4">
      <div className="pb-2">
        <input
          type="text"
          className="w-full px-4 py-2 border outline-none"
          name="title"
          value={pinEditData.title}
          onChange={handleChange}
          placeholder="Enter Your Name..."
        />
      </div>
      <div className="pb-2">
        <input
          type="text"
          className="w-full px-4 py-2 border outline-none"
          name="description"
          value={pinEditData.description}
          onChange={handleChange}
          placeholder="Enter Your description..."
        />
      </div>
      <div className="pb-2">
        <input
          type="text"
          className="w-full px-4 py-2 border outline-none"
          name="type"
          value={pinEditData.type}
          onChange={handleChange}
          placeholder="Enter Your type..."
        />
      </div>
      <div className="pb-2">
        <input
          type="text"
          className="w-full px-4 py-2 border outline-none"
          name="content"
          value={pinEditData.content}
          onChange={handleChange}
          placeholder="Enter Your content..."
        />
      </div>
      <div className="">
        <button className="border rounded px-5 py-1 bg-slate-600 text-white text-center">
          Update Pin
        </button>
      </div>
    </form>
  );
};

export default Page;
