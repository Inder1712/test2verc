"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/vibegear-high-resolution-logo-grayscale-transparent.png";
import cart from "../../../public/cart.svg";
import admin from "../../../public/—Pngtree—admin line icon_5784769.png";
import instagram from "../../../public/pngwing.com.png";
import whatsapp from "../../../public/pngwing.com (1).png";
import emailjs from 'emailjs-com';

export default function Order() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    quantity1: 1,
    quantity2: 1,
    billingAddressSame: true,
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZip: "",
    referralCode: "", // Added referral code state
  });

  const [loading, setLoading] = useState(false); // State to track loading status
  const [error, setError] = useState(""); // State to track error message
  const [success, setSuccess] = useState(""); // State to track success message
  const [discount, setDiscount] = useState(0); // State to track discount

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? null : value,
    }));
  };

  const handleReferralCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      referralCode: value,
    }));

    // Check if referral code is valid
    if (value.length == 5) { // Assuming "VIBE100" is a valid referral code
      setDiscount(100); // Apply 100 Rs. discount
    } else {
      setDiscount(0); // No discount if the code is invalid
    }
  };

  const handleSubmit = async () => {
    setLoading(true); // Set loading state when the form is being submitted
    setError(""); // Reset any previous errors
    setSuccess(""); // Reset success state

    // Prepare the email data (can modify this as per your EmailJS template)
    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      quantity1: formData.quantity1,
      quantity2: formData.quantity2,
      billingAddressSame: formData.billingAddressSame,
      billingAddress: formData.billingAddress,
      billingCity: formData.billingCity,
      billingState: formData.billingState,
      billingZip: formData.billingZip,
      referralCode: formData.referralCode,
      discount: discount, // Include the discount in the email data
    };

    try {
      // Replace these with your actual service ID, template ID, and user ID from EmailJS
      const serviceID = "service_5jgnbey";
      const templateID = "template_yaq4ubc";
      const userID = "1yEKpoHwKrYMCvP33";

      // Send email using EmailJS
      const response = await emailjs.send(serviceID, templateID, emailParams, userID);

      if (response.status === 200) {
        setSuccess("Order submitted successfully!"); // Set success message
      } else {
        setError("Failed to submit order. Please try again."); // Set error message
      }
    } catch (err: unknown) {
      // TypeScript now knows `err` is of type `unknown`, so we cast it to `Error` to access `message`
      if (err instanceof Error) {
        setError(`An error occurred while submitting the order: ${err.message}`); // Handle any unexpected error
      } else {
        setError("An unknown error occurred while submitting the order.");
      }
    } finally {
      setLoading(false); // Set loading to false after the request is completed
    }
  };

  // Calculate the total price considering the discount
  const calculateTotal = () => {
    const subtotal = 999; // Your subtotal value
    const shippingFee = 0; // Your shipping fee
    const total = subtotal + shippingFee - discount; // Subtract the discount from the total
    return total;
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

      {/* Order Form */}
      <div className="w-full max-w-3xl rounded-lg p-6">
        {/* Customer Information */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone Number</label>
              <input
                type="tel"
                placeholder="Phone Number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-600">Street Address</label>
              <input
                placeholder="Street"
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-600">Delivery Address</label>
              <input
                placeholder="Add some delivery mark"
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-600">State/Province</label>
              <input
                placeholder="state"
                type="text"
                id="State"
                name="State"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-600">Postal Code</label>
              <input
                placeholder="Pin Code"
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
          </div>
        </section>

        {/* Referral Code */}
        <section className="mb-8">
          <label htmlFor="referralCode" className="block text-sm font-medium text-gray-600">Referral Code (Optional)</label>
          <input
            type="text"
            id="referralCode"
            name="referralCode"
            value={formData.referralCode}
            onChange={handleReferralCodeChange}
            placeholder="Enter referral code"
            className="w-full p-2 border border-gray-300 rounded-lg mt-1"
          />
        </section>

        {/* Order Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Order Summary</h2>
          <div className="border-t border-gray-300 pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-700">999Rs.</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Shipping Fee</span>
              <span className="text-gray-700">0Rs.</span>
            </div>
            {/* Show Referral Code Discount */}
            {discount > 0 && (
              <div className="flex justify-between mb-2 text-green-600 font-semibold">
                <span>Referral Code Discount</span>
                <span>-{discount}Rs.</span>
              </div>
            )}
            {/* Total after discount */}
            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Total</span>
              <span>{calculateTotal()}Rs.</span> {/* Show the total with discount */}
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <button
          className="w-64 h-12 py-3 bg-[rgb(133,88,49)] text-white text-lg font-semibold rounded-lg hover:bg-[rgb(107,70,37)] focus:outline-none"
          onClick={handleSubmit} // Trigger EmailJS request on submit
          disabled={loading} // Disable button while loading
        >
          {loading ? "Submitting..." : "Submit Order"} {/* Show loading state */}
        </button>

        {/* Error or Success Message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}
      </div>

      {/* Footer Section */}
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
                <a href="https://www.instagram.com/vibegear__/profilecard/?igsh=cTRuOGJ4dXlnc3lt" target="_blank" rel="noopener noreferrer">
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
