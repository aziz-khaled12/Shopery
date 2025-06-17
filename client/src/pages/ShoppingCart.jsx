import React from "react";
import { CircleX } from "lucide-react";
import { Button, Divider, RoundedButtonInput } from "../components/ui";
import { Counter } from "../components/ui";
import { useNavigate } from "react-router-dom";
import { ShoppingCart as ShoppingCartIcon } from "lucide-react";
import useCartStore from "../store/cartStore";

const ShoppingCart = ({withTitle = true}) => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  const subtotal =
    cart.length > 0
      ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      : 0;

  return (
    <main className={`w-full  ${withTitle ? "py-8 md:py-12 mx-auto px-4" : "p-0"}`}>
      {withTitle && (
        <h1 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-6 md:mb-8 text-center">
          My Shopping Cart
        </h1>
      )}

      <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-[#e6e6e6] rounded-lg overflow-hidden">
            {/* Desktop Table Header - Hidden on mobile */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 p-4 border-b border-[#e6e6e6] text-sm font-medium text-[#4d4d4d]">
              <div className="col-span-5">PRODUCT</div>
              <div className="col-span-2">PRICE</div>
              <div className="col-span-3">QUANTITY</div>
              <div className="col-span-2">SUBTOTAL</div>
            </div>

            {/* Cart Items */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="p-4 border-b border-[#e6e6e6] last:border-b-0"
              >
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                  <div className="col-span-5 flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="text-[#1a1a1a] font-medium">
                      {item.name}
                    </span>
                  </div>
                  <div className="col-span-2 text-[#1a1a1a] font-semibold">
                    ${item.price.toFixed(2)}
                  </div>
                  <div className="col-span-3">
                    <div className="max-w-[130px]">
                      <Counter
                        count={item.quantity}
                        setCount={(newCount) =>
                          updateQuantity(item.id, newCount)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-span-1 text-[#1a1a1a] font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <div className="col-span-1">
                    <div className="w-8 h-8 p-0 cursor-pointer flex items-center justify-center">
                      <CircleX
                        className="w-4.5 h-4.5 text-[#999999] hover:text-danger"
                        onClick={() => removeFromCart(item.id)}
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[#1a1a1a] font-medium text-sm">
                          {item.name}
                        </h3>
                        <div className="p-0 cursor-pointer flex items-center justify-center">
                          <CircleX
                            className="w-4 h-4 text-[#999999] hover:text-danger"
                            onClick={() => removeFromCart(item.id)}
                          />
                        </div>
                      </div>
                      <div className="text-sm text-[#4d4d4d] mb-2">
                        ${item.price.toFixed(2)} each
                      </div>
                      <div className="flex items-center justify-between">
                        <Counter
                          count={item.quantity}
                          setCount={(newCount) =>
                            updateQuantity(item.id, newCount)
                          }
                        />
                        <div className="text-[#1a1a1a] font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {cart.length === 0 && (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="text-gray-400 mb-4">
                  <ShoppingCartIcon className="w-12 h-12" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-500 mb-6">
                  Start adding products you love to your cart
                </p>
              </div>
            )}

            {/* Action Buttons */}
            {cart.length > 0 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-4">
                <Button
                  variant="gray"
                  className="w-full sm:w-auto"
                  onClick={() => navigate("/")}
                >
                  Return to shop
                </Button>
                <Button variant="gray" className="w-full sm:w-auto">
                  Update Cart
                </Button>
              </div>
            )}
          </div>

          {/* Coupon Code */}
          <div className="mt-8 md:mt-12">
            <div className="bg-white border border-[#e6e6e6] rounded-lg p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <span className="text-[#1a1a1a] font-medium whitespace-nowrap">
                  Coupon Code
                </span>
                <RoundedButtonInput
                  buttonText={"Apply Coupon"}
                  placeholder={"Enter code"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cart Total */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-[#e6e6e6] rounded-lg">
            <div className="p-6">
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-6">
                Cart Total
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-[#4d4d4d]">
                  <span className="text-sm">Subtotal:</span>
                  <span className="font-semibold text-[#1a1a1a]">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <Divider />
                <div className="flex justify-between text-[#4d4d4d]">
                  <span className="text-sm">Shipping:</span>
                  <span className="font-semibold text-[#00b207]">Free</span>
                </div>
                <Divider />
                <div className="flex justify-between text-lg font-semibold text-[#1a1a1a]">
                  <span className="text-sm">Total:</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <Button
                disabled={cart.length === 0}
                fullWidth
                onClick={() => navigate("/checkout")}
                variant={cart.length === 0 ? "disabled" : "fill"}
              >
                Proceed to checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShoppingCart;
