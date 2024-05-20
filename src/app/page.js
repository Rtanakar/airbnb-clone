import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import LiveAnywhere from "@/components/LiveAnywhere";

export default function Home() {
  return (
    <>
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <Explore />
        <LiveAnywhere />
      </main>
    </>
  );
}
