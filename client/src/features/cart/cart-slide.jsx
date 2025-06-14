import React from "react";
import ShoppingCart1 from "/ShoppingCart1.png";
import ShoppingCart2 from "/ShoppingCart2.png";
import CartSlideItem from "./cart-slide-item";
import { Divider, SlidePanel } from "../../components/ui";
import { useNavigate } from "react-router-dom";

const CartSlide = ({open, handleClose}) => {
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
  return (
    <SlidePanel onClose={handleClose} open={open} buttons={buttons}>
      <div className="w-full h-full flex flex-col items-center justify-start gap-3">
        <CartSlideItem
          image={ShoppingCart1}
          quantity={1}
          unit={"kg"}
          unitPrice={12}
          title={"Fresh Algerian Orange"}
        ></CartSlideItem>
        <Divider orientation={"horizontal"} />
        <CartSlideItem
          image={ShoppingCart2}
          quantity={1}
          unit={"kg"}
          unitPrice={14}
          title={"Green Apples"}
        ></CartSlideItem>
        <Divider orientation={"horizontal"} />
        <CartSlideItem
          image={ShoppingCart2}
          quantity={1}
          unit={"kg"}
          unitPrice={14}
          title={"Green Apples"}
        ></CartSlideItem>
        <Divider orientation={"horizontal"} />
        <CartSlideItem
          image={ShoppingCart2}
          quantity={1}
          unit={"kg"}
          unitPrice={14}
          title={"Green Apples"}
        ></CartSlideItem>
        <Divider orientation={"horizontal"} />
        <CartSlideItem
          image={ShoppingCart2}
          quantity={1}
          unit={"kg"}
          unitPrice={14}
          title={"Green Apples"}
        ></CartSlideItem>
      </div>
    </SlidePanel>
  );
};

export default CartSlide;
