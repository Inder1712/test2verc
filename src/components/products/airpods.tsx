"use client";
import Image from "next/image";
import airpods from "../../../public/pngwing.com (2).png";
import { useRouter } from "next/navigation";

export default function Airpods() {
  const router = useRouter();
  const handleOrderNowClick = () => {
    router.push("/order");
  };
  return (
    <div>
      <div className="h-auto w-screen flex  items-center">
        <Image src={airpods} alt="Airpods Pro" className="w-60 h-auto" />
      </div>

      <div className="w-full p-4 sm:p-6">
        <div className="font-semibold text-xl sm:text-2xl">Airpods Pro</div>
        <div className="flex items-center space-x-2 mt-2">
          <div className="line-through text-gray-600">Rs 1,500</div>
          <div className="text-xl text-black">Rs 999.00</div>
          <div className="ml-2 text-sm border-gray-200 text-gray-600 h-6 justify-center items-center hidden">
            Sold out
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600 sm:text-base pl-2 ">
          <ul className="list-disc">
            <li>Pop up when opened</li>
            <li>Can be seen in apple find my</li>
            <li>Working touch controls</li>
            <li>All apple airpods features included</li>
          </ul>
        </div>
      </div>

      <div className="h-auto w-full flex p-3 mb-6">
        <button
          className="h-12 w-64 sm:w-80 bg-[rgb(133,88,49)]  hover:bg-[rgb(107,70,37)] flex justify-center items-center text-lg sm:text-xl text-white rounded-lg"
          onClick={handleOrderNowClick}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
