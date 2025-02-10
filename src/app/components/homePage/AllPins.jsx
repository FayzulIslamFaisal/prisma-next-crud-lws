import PinList from "./PinList";

const AllPins = ({ results }) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
      {results.length > 0 &&
        results.map((items) => <PinList key={items.id} pinData={items} />)}
    </ul>
  );
};

export default AllPins;
