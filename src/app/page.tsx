"use client";
import Image from "next/image";
import logo from "../../public/vibegear-high-resolution-logo-grayscale-transparent.png";
import cart from "../../public/cart.svg";
import admin from "../../public/—Pngtree—admin line icon_5784769.png";
import airpods from "../../public/pngwing.com (2).png";
import { useRouter } from "next/navigation";
import instagram from "../../public/pngwing.com.png";
import whatsapp from "../../public/pngwing.com (1).png";


export default function Home() {
  const router = useRouter();

  // Function to handle the click and navigate to another page
  const handleOrderNowClick = () => {
    router.push("/order");
  };

  return (
    <div className="w-full h-auto">
      {/* Header Section */}
      <div className="h-[10%] w-full flex justify-between items-center px-4 sm:px-8 mt-2">
        <div className="h-auto w-auto">
          <Image
            src={logo}
            alt="Vibegear Logo"
            className="h-10 sm:h-14 w-auto"
          />
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
        <Image src={airpods} alt="Airpods Pro" className="w-60 h-auto" />
      </div>

      {/* Product Details */}
      <div className="w-full p-4 sm:p-6">
        <div className="font-semibold text-xl sm:text-2xl">Airpods Pro</div>
        <div className="flex items-center space-x-2 mt-2">
          <div className="line-through text-gray-600">Rs 1,500</div>
          <div className="text-xl text-black">Rs 999.00</div>
          <div className="ml-2 text-sm border-gray-200 text-gray-600 h-6 flex justify-center items-center hidden">
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

      {/* Order Button */}
      <div className="h-auto w-full flex p-3 mb-6">
        <button
          className="h-12 w-64 sm:w-80 bg-[rgb(133,88,49)]  hover:bg-[rgb(107,70,37)] flex justify-center items-center text-lg sm:text-xl text-white rounded-lg"
          onClick={handleOrderNowClick}
        >
          Order Now
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 mt-6">
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p className="text-sm mt-2">Email: vibegear3@gmail.com</p>
              <p className="text-sm">Phone: +91 8894432213</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-sm mt-2">Vibegear, India</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
              <a href="https://www.instagram.com/vibegear__/profilecard/?igsh=cTRuOGJ4dXlnc3lt" target="_blank" rel="noopener noreferrer">
                  <Image src={instagram} alt="Instagram" width={24} height={24} />
                </a>
                <a href="https://wa.me/918894432213" target="_blank" rel="noopener noreferrer">
                  <Image src={whatsapp} alt="Whatsaap" width={22} height={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-6 text-center text-sm text-gray-400">
            <p>2024 Vibegear</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
