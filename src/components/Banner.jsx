import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/2 w-full text-center text-sm sm:text-lg">
        <p>Not sure where to go? Perfect.</p>
        <button className="bg-white text-purple-500 rounded-full px-10 py-4 shadow-md my-3 font-bold hover:shadow-xl active:scale-90 transition duration-150">
          Im flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
