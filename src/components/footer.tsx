"use client";
import Image from "next/image";
import instagram from "../../public/pngwing.com.png";
import whatsapp from "../../public/pngwing.com (1).png";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-6">
      <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm mt-2">Email: vibegear3@gmail.com</p>
            <p className="text-sm">Phone: +91 8219109010</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-sm mt-2">Vibegear, India</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.instagram.com/vibegear__/profilecard/?igsh=cTRuOGJ4dXlnc3lt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={instagram} alt="Instagram" width={24} height={24} />
              </a>
              <a
                href="https://wa.me/918219109010"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={whatsapp} alt="Whatsaap" width={22} height={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-400">
          <p>2024 Vibegear</p>
        </div>
      </div>
    </footer>
  );
}
