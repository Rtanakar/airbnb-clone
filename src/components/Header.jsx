import { CircleUserRound, Globe, MenuIcon, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <Link href="/" className="relative flex items-center h-10 my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </Link>

      {/* Middle */}
      <form className="flex items-center cursor-pointer md:border-2 py-2 rounded-full md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder:text-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <Search
          color="white"
          size={30}
          className="bg-red-400 rounded-full p-2 hidden md:inline-flex md:mx-2"
        />
      </form>

      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <Globe size={20} className="cursor-pointer" />

        <div className="flex items-center border-2 rounded-full space-x-2 p-2">
          <MenuIcon size={20} />
          <CircleUserRound size={20} />
        </div>
      </div>
    </header>
  );
}

export default Header;
