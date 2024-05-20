import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import LargeCard from "@/components/LargeCard";
import LiveAnywhere from "@/components/LiveAnywhere";

export default function Home() {
  return (
    <>
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <Explore />
        <LiveAnywhere />
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
    </>
  );
}
