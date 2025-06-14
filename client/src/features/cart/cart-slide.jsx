import React from "react";
import ShoppingCart1 from "/ShoppingCart1.png";
import ShoppingCart2 from "/ShoppingCart2.png";
import CartSlideItem from "./cart-slide-item";
import { Divider, SlidePanel } from "../../components/ui";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/CartStore";

const CartSlide = ({ open, handleClose }) => {
  const navigate = useNavigate();

  const buttons = [
    {
      label: "Checkout",
      onClick: () => {
        handleClose();
        navigate("/checkout");
      },
      variant: "gray",
    },
    {
      label: "Go to Cart",
      onClick: () => {
        handleClose();
        navigate("/cart");
      },
      variant: "fill",
    },
  ];
  const { cart } = useCartStore();

  return (
    <SlidePanel onClose={handleClose} open={open} buttons={buttons}>
      <div className="w-full h-full flex flex-col items-center justify-start gap-3">
        {cart.map((item, index) => {
          return (
            <>
              <CartSlideItem key={index} item={item} />
              {index !== cart.length - 1 && (
                <Divider orientation={"horizontal"} />
              )}
            </>
          );
        })}
      </div>
    </SlidePanel>
  );
};

export default CartSlide;
