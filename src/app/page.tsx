"use client";
import Image from 'next/image';
import logo from "../../public/vibegear-high-resolution-logo-grayscale-transparent.png"
import cart from "../../public/cart.svg"
import admin from "../../public/—Pngtree—admin line icon_5784769.png"
import airpods from "../../public/AdobeStock_408384620_Preview_Editorial_Use_Only-Photoroom.png"
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  // Function to handle the click and navigate to another page
  const handleOrderNowClick = () => {
    router.push('/order');
  };

  return (
    <div className="w-full h-auto">
      {/* Header Section */}
      <div className="h-[10%] w-full flex justify-between items-center px-4 sm:px-8 mt-2">
        <div className="h-auto w-auto">
          <Image src={logo} alt="Vibegear Logo" className="h-10 sm:h-14 w-auto" />
        </div>
        <div className="flex items-center space-x-6">
          <div className="h-6 w-6 sm:h-8 sm:w-8">
            <Image src={admin} alt="admin" className="h-full w-full" />
          </div>
          <div className="h-6 w-6 sm:h-8 sm:w-8">
            <Image src={cart} alt="cart" className="h-full w-full" />
          </div>
        </div>
      </div>

      {/* Product Image */}
      <div className="h-auto w-screen flex  items-center">
        <Image src={airpods} alt="Airpods Pro" className="w-96 h-auto" />
      </div>

      {/* Product Details */}
      <div className="w-full p-4 sm:p-6">
        <div className="font-semibold text-xl sm:text-2xl">Airpods Pro</div>
        <div className="flex items-center space-x-2 mt-2">
          <div className="line-through text-gray-600">Rs 1,500</div>
          <div className="text-xl text-black">Rs 999.00</div>
          <div className="ml-2 text-sm border-gray-200 text-gray-600 h-6 flex justify-center items-center">
            Sold out
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600 sm:text-base ">
          <p>

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repudiandae hic deserunt harum <br /> 
          saepe pariatur veritatis perspiciatis,<br />
           fugiat nostrum nemo quo dolorum quae voluptatum 
           magni eveniet recusandae similique, temporibus ut unde fugit!
          </p>
        </div>
      </div>

      {/* Order Button */}
      <div className="h-auto w-full flex p-3 mb-6">
        <button
          className="h-12 w-64 sm:w-80 bg-[rgb(133,88,49)] flex justify-center items-center text-lg sm:text-xl text-white rounded-lg"
          onClick={handleOrderNowClick}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
