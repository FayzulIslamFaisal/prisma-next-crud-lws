// "use client";
import { CreatePins } from "@/app/actions";
import ArrangePin from "./ArrangePin";

const AddPins = () => {
  return (
    <>
      <form action={CreatePins} className="max-w-[450px] mx-auto p-4">
        <div className="pb-2">
          <input
            type="text"
            className="w-full px-4 py-2 border outline-none"
            name="title"
            placeholder="Enter Your Name..."
          />
        </div>
        <div className="pb-2">
          <input
            type="text"
            className="w-full px-4 py-2 border outline-none"
            name="description"
            placeholder="Enter Your description..."
          />
        </div>
        <div className="pb-2">
          <input
            type="text"
            className="w-full px-4 py-2 border outline-none"
            name="type"
            placeholder="Enter Your type..."
          />
        </div>
        <div className="pb-2">
          <input
            type="text"
            className="w-full px-4 py-2 border outline-none"
            name="content"
            placeholder="Enter Your content..."
          />
        </div>
        <div className="">
          <ArrangePin />
        </div>
      </form>
    </>
  );
};

export default AddPins;
