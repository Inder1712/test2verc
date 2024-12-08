"use client";
import Image from "next/image";
import logo from "../../public/vibegear-high-resolution-logo-grayscale-transparent.png";
import cart from "../../public/cart.svg";
import admin from "../../public/—Pngtree—admin line icon_5784769.png";

export default function Header() {
  return (
    <div className="h-full w-full">
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
    </div>
  );
}
