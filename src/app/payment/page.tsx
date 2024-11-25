"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/vibegear-high-resolution-logo-grayscale-transparent.png";
import cart from "../../../public/cart.svg";
import admin from "../../../public/—Pngtree—admin line icon_5784769.png";
import instagram from "../../../public/pngwing.com.png";
import whatsapp from "../../../public/pngwing.com (1).png";
import qrCodeImage from "../../../public/AdobeStock_408384620_Preview_Editorial_Use_Only-Photoroom.png"; // Replace with actual QR image
import emailjs from "emailjs-com"; // Import emailjs

export default function Order() {
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [paymentProof, setPaymentProof] = useState<File | null>(null);

  // Handle payment method change
  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
    if (e.target.value === "online") {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPaymentProof(e.target.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form data to send
    const formData = {
      paymentMethod,
      paymentProof: paymentProof ? paymentProof.name : null,
      orderDetails: "Some order details here", // Add any order-related data if needed
    };

    if (paymentMethod === "online" && paymentProof) {
      try {
        const form = new FormData();
        form.append("file", paymentProof);

        // Sending the email using EmailJS
        const emailData = {
          to_email: "your-email@example.com", // Receiver email address
          from_name: "Vibegear Order", // Sender name
          subject: "Order Received with Payment Proof",
          paymentMethod: formData.paymentMethod,
          paymentProof: formData.paymentProof,
          orderDetails: formData.orderDetails,
        };

        // Send email
        await emailjs.sendForm(
          "service_id", // Your EmailJS service ID
          "template_id", // Your EmailJS template ID
          emailData,
          "user_id" // Your EmailJS user ID
        );

        alert("Order submitted successfully!");
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Error submitting order. Please try again.");
      }
    } else if (paymentMethod === "cod") {
      // Sending a simple email for COD
      const emailData = {
        to_email: "your-email@example.com", // Receiver email address
        from_name: "Vibegear Order", // Sender name
        subject: "Cash on Delivery Order Received",
        paymentMethod: formData.paymentMethod,
        orderDetails: formData.orderDetails,
      };

      try {
        // Send email for COD order
        await emailjs.send(
          "service_id", // Your EmailJS service ID
          "template_id", // Your EmailJS template ID
          emailData,
          "user_id" // Your EmailJS user ID
        );

        alert("COD order submitted successfully!");
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Error submitting order. Please try again.");
      }
    }
  };

  return (
    <div className="h-full flex flex-col justify-between items-start bg-gray-50">
      {/* Header/Navbar */}
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

      {/* Payment Options Section */}
      <div className="h-auto w-full px-4 sm:px-8 py-6 space-y-6">
        {/* COD (Cash on Delivery) Option */}
        <div className="bg-white p-6 shadow-lg rounded-md">
          <h3 className="text-lg font-semibold text-gray-800">Payment Method</h3>
          <div className="flex items-center space-x-4 mt-4">
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="cod"
              onChange={handlePaymentMethodChange}
              checked={paymentMethod === "cod"}
              className="h-4 w-4 text-blue-600"
            />
            <label htmlFor="cod" className="text-sm text-gray-700">Cash on Delivery (COD)</label>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <input
              type="radio"
              id="online"
              name="paymentMethod"
              value="online"
              onChange={handlePaymentMethodChange}
              checked={paymentMethod === "online"}
              className="h-4 w-4 text-blue-600"
            />
            <label htmlFor="online" className="text-sm text-gray-700">Online Payment</label>
          </div>
        </div>

        {/* Online Payment Option (Only show this if Online Payment is selected) */}
        {paymentMethod === "online" && (
          <div className="bg-white p-6 shadow-lg rounded-md">
            <h3 className="text-lg font-semibold text-gray-800">Online Payment</h3>
            <div className="mt-4">
              <div className="text-sm text-gray-700">
                <p className="font-medium">QR Code for Payment</p>
                <div className="mt-2">
                  <Image src={qrCodeImage} alt="QR Code" width={150} height={150} />
                </div>
                <p className="mt-2 text-sm">UPI ID: vibegear@upi</p>
              </div>

              {/* Option to Upload Payment Screenshot */}
              <div className="mt-4">
                <label
                  htmlFor="paymentScreenshot"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Payment Proof (Screenshot)
                </label>
                <input
                  type="file"
                  id="paymentScreenshot"
                  name="paymentScreenshot"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Dropdown for Additional Info */}
            {showDropdown && (
              <div className="mt-6">
                <label
                  htmlFor="additionalInfo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select a Payment Method Option:
                </label>
                <select
                  id="additionalInfo"
                  name="additionalInfo"
                  className="mt-2 p-2 border border-gray-300 rounded-md"
                >
                  <option value="upi">UPI Payment</option>
                  <option value="netbanking">Net Banking</option>
                  <option value="card">Credit/Debit Card</option>
                </select>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="px-4 sm:px-8 py-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Submit Payment
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-6 w-full">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-8">
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
                <a
                  href="https://www.instagram.com/vibegear__/profilecard/?igsh=cTRuOGJ4dXlnc3lt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={instagram} alt="Instagram" width={24} height={24} />
                </a>
                <a href="https://wa.me/918894432213" target="_blank" rel="noopener noreferrer">
                  <Image src={whatsapp} alt="WhatsApp" width={22} height={22} />
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
