"use client";
import { useState } from "react";
import Image from "next/image";
import QR from "../../../public/WhatsApp Image 2024-11-26 at 2.56.18 PM.jpeg";
import emailjs from "emailjs-com";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Order() {
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
    referralCode: "",
    paymentMethod: "COD",
    qrCode: "",
    upiId: "",
    paymentProof: "",
    referenceId: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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

    if (value.length == 5) {
      setDiscount(100);
    } else {
      setDiscount(0);
    }
  };

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      paymentMethod: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

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
      discount: discount,
      paymentMethod: formData.paymentMethod,
      qrCode: formData.qrCode,
      upiId: formData.upiId,
      referenceId: formData.referenceId,
      paymentProof: formData.paymentProof,
    };

    try {
      const serviceID = "service_5jgnbey";
      const templateID = "template_yaq4ubc";
      const userID = "1yEKpoHwKrYMCvP33";

      const response = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (response.status === 200) {
        setSuccess("Order submitted successfully!");
      } else {
        setError("Failed to submit order. Please try again.");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(
          `An error occurred while submitting the order: ${err.message}`
        );
      } else {
        setError("An unknown error occurred while submitting the order.");
      }
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = () => {
    const subtotal = 999;
    const shippingFee = 0;
    const total = subtotal + shippingFee - discount;
    return total;
  };

  return (
    <div className="h-full">
      <div className="h-full flex flex-col justify-between items-start bg-gray-50">
        <Header />

        <div className="w-full max-w-3xl rounded-lg p-6">
          <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Full Name
                </label>
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email Address
                </label>
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
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone Number
                </label>
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
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-600"
                >
                  Address
                </label>
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
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-600"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium text-gray-600"
                >
                  Postal Code
                </label>
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

          <section className="mb-8">
            <label
              htmlFor="referralCode"
              className="block text-sm font-medium text-gray-600"
            >
              Referral Code (Optional)
            </label>
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

          <section className="mb-8">
            <label
              htmlFor="paymentMethod"
              className="block text-sm font-medium text-gray-600"
            >
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handlePaymentMethodChange}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            >
              <option value="COD">Cash on Delivery</option>
              <option value="Online Payment">Online Payment</option>
            </select>

            {formData.paymentMethod === "Online Payment" && (
              <div className="mt-4">
                <div></div>

                <div className="mt-4">
                  <label
                    htmlFor="paymentProof"
                    className="block font-medium text-gray-600"
                  >
                    Scan this QR
                  </label>
                  <Image src={QR} alt="a" height={150}></Image>
                </div>
                <label
                  htmlFor="upiId"
                  className="block text-sm font-medium text-gray-600"
                >
                  Reference Number
                </label>
                <input
                  type="text"
                  id="upiId"
                  name="upiId"
                  value={formData.upiId}
                  onChange={handleInputChange}
                  placeholder="Enter Reference Number of payment done"
                  className="w-full p-2 border border-gray-300 rounded-lg mt-1"
                />
              </div>
            )}
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium text-gray-700 mb-4">
              Order Summary
            </h2>
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Subtotal</span>
                <span className="text-gray-700">999Rs.</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Shipping Fee</span>
                <span className="text-gray-700">0Rs.</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between mb-2 text-green-600 font-semibold">
                  <span>Referral Code Discount</span>
                  <span>-{discount}Rs.</span>
                </div>
              )}

              <div className="flex justify-between font-semibold text-lg mb-4">
                <span>Total</span>
                <span>{calculateTotal()}Rs.</span>
              </div>
            </div>
          </section>

          <button
            className="w-64 h-12 py-3 bg-[rgb(133,88,49)] text-white text-lg font-semibold rounded-lg hover:bg-[rgb(107,70,37)] focus:outline-none"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Order"}
          </button>

          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
}
