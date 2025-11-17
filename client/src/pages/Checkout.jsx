import React from "react";

import Apple from "/Apple.png";
import BigApple from "/BigApple.png";
import { Button, Divider, Input } from "../components/ui";
import PaymentMethods from "../components/sections/Checkout/PaymentMethods";
import useCartStore from "../store/cartStore";
import { CheckoutForm } from "../components/forms";
import { CheckoutItem } from "../components/cart";

const Checkout = () => {

  const { cart } = useCartStore();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.cartQuantity, 0);
  const total = subtotal + 10;

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 px-6 sm:px-page min-h-screen">
      {/* Checkout Form - Full width on mobile, 8 columns on desktop */}
      <div className="lg:col-span-8">
        <CheckoutForm />
      </div>

      {/* Order Summary - Full width on mobile, 4 columns on desktop */}
      <div className="lg:col-span-4 p-4 sm:p-6 border h-fit border-green-gray-100 rounded-md flex flex-col gap-6">
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl font-medium mb-5">
            Order Summary
          </h2>
          <div className="w-full flex flex-col gap-2 mb-3">
            {cart.map((item, index) => (
              <CheckoutItem key={index} item={item} />
            ))}
          </div>
          <div className="w-full flex flex-col gap-2 text-sm font-medium">
            <div className="w-full flex items-center justify-between py-2">
              <p className="text-gray-600">Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <Divider />
            <div className="w-full flex items-center justify-between py-2">
              <p className="text-gray-600">Shipping</p>
              <p>$10</p>
            </div>
            <Divider />
            <div className="w-full flex items-center justify-between pt-2">
              <p className="text-gray-600 text-base">Total</p>
              <p className="text-lg font-semibold">${total.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <PaymentMethods />

        <Button fullWidth>Place Order</Button>
      </div>
    </div>
  );
};

export default Checkout;
