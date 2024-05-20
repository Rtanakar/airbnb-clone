import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <Explore />
      </main>
    </>
  );
}
