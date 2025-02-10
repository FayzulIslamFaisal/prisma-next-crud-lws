import fetchPinDatas from "@/app/apiService/getAllPins";
import AllPins from "./AllPins";
import AddPins from "./AddPins";

const HomePageWrapper = async () => {
  const results = await fetchPinDatas();
  return (
    <>
      <AddPins />
      <AllPins results={results} />
    </>
  );
};

export default HomePageWrapper;
