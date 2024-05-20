import { exploreData } from "../data";
import SmallCard from "./SmallCard";

const Explore = () => {
  return (
    <section className="pt-6">
      <p className="text-4xl font-semibold pb-5">Explore Nearby</p>

      {/* Pull some data from a server - API endpoints */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData?.map((item) => (
          <SmallCard key={item.img} {...item} />
        ))}

        {/* {exploreData.map(({ img, location, distance }) => (
          <SmallCard
            key={img}
            img={img}
            location={location}
            distance={distance}
          />
        ))} */}
      </div>
    </section>
  );
};

export default Explore;
