import { liveAnywhere } from "@/data";
import MediumCard from "./MediumCard";

const LiveAnywhere = () => {
  return (
    <section className="">
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {liveAnywhere?.map((item) => (
          <MediumCard key={item.img} {...item} />
        ))}
      </div>
    </section>
  );
};

export default LiveAnywhere;
