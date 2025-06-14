import "./App.css";
import Mango from "/Mango.png";
import Apple from "/Apple.png";
import BigApple from "/BigApple.png";
import Sales1 from "/Sales1.png";
import Sales2 from "/Sales2.png";
import Sales3 from "/Sales3.png";
import Sales4 from "/Sales4.png";
import Sales5 from "/Sales5.png";
import {
  Button,
  DropdownMenu,
  IconButton,
  IconButton2,
  Input,
  SlidePanel,
  SectionHeader,
  Divider,
} from "./components/ui";
import Product from "./features/products/long-product-card";
import ProductCard from "./features/products/product-card";
import BigProductCard from "./features/products/big-product-card";
import { SaleCard, BigSaleCard } from "./components/common";
import ProductPage from "./components/pages/ProductPage";
import { useEffect, useState } from "react";
import { ArrowRight, Heart, LogOut, Settings, User } from "lucide-react";
import CartSlideItem from "./features/cart/cart-slide-item";
import ShoppingCart1 from "/ShoppingCart1.png";
import ShoppingCart2 from "/ShoppingCart2.png";
import CheckoutForm from "./features/forms/CheckoutForm";
import DualRangeSlider from "./components/ui/inputs/DualRangeSlider";

function Test() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log("open: ", open);
  }, [open]);

  const buttons = [
    {
      label: "Checkout",
      onClick: () => console.log("Checkout clicked"),
      variant: "gray",
    },
    {
      label: "Go to Cart",
      onClick: () => console.log("Go to Cart clicked"),
      variant: "fill",
    },
  ];

  return (
    <div className="w-full p-6 sm:px-page min-h-screen flex items-center justify-center flex-col gap-4">
      <div className="flex items-center gap-4 ">
        <Button size="large" variant="fill">
          large fill
        </Button>
        <Button size="small" variant="fill">
          small fill
        </Button>
        <Button size="medium" variant="fill">
          medium fill
        </Button>
      </div>
      <div className="flex items-center gap-4 ">
        <Button size="large" variant="outlined">
          large outlined
        </Button>
        <Button size="small" variant="outlined">
          small outlined
        </Button>
        <Button size="medium" variant="outlined">
          medium outlined
        </Button>
      </div>
      <div className="flex items-center gap-4 ">
        <Button size="large" variant="disabled">
          large disabled
        </Button>
        <Button size="small" variant="disabled">
          small disabled
        </Button>
        <Button size="medium" variant="disabled">
          medium disabled
        </Button>
      </div>
      <div className="flex items-center gap-4 ">
        <IconButton
          size="large"
          variant="disabled"
          end
          icon={<ArrowRight className="h-4 w-4" />}
        >
          large disabled
        </IconButton>
        <IconButton
          size="small"
          variant="disabled"
          end
          icon={<ArrowRight className="h-4 w-4" />}
        >
          small disabled
        </IconButton>
        <IconButton
          end
          icon={<ArrowRight className="h-4 w-4" />}
          size="medium"
          variant="disabled"
        ></IconButton>
      </div>
      <IconButton2 icon={<Heart />}></IconButton2>
      <Product
        image={Mango}
        title="Nigga the best Mango"
        price="20"
        rating="4.5"
      ></Product>
      <div className="w-full container grid grid-cols-4 gap-2">
        <ProductCard
          image={Apple}
          rating={4}
          title="Nigga the best Apple"
          price={14}
        ></ProductCard>
        <ProductCard
          image={Apple}
          rating={4}
          title="Nigga the best Apple"
          price={14}
        ></ProductCard>
        <ProductCard
          image={Apple}
          rating={4}
          title="Nigga the best Apple"
          price={14}
        ></ProductCard>
        <ProductCard
          image={Apple}
          rating={4}
          title="Nigga the best Apple"
          price={14}
        ></ProductCard>
      </div>

      <div>
        <BigProductCard
          discount={50}
          image={BigApple}
          price={20}
          title="Nigga the best Big Apple"
          feedbacks={300}
          rating={5}
        ></BigProductCard>
      </div>

      <div className="w-full flex items-center gap-2">
        <SaleCard
          image={Sales1}
          maintitle="Nigga the best Sale"
          textColor="white"
          subtitle="Sale"
          timer
        ></SaleCard>
        <SaleCard
          image={Sales2}
          maintitle="Nigga the best Sale"
          textColor="black"
          subtitle="Sale"
          discount
          discountValue={50}
        ></SaleCard>
        <SaleCard
          image={Sales3}
          maintitle="Nigga the best Sale"
          textColor
          subtitle="Sale"
          price
          priceValue={20}
        ></SaleCard>
      </div>
      <div className="w-full flex items-center gap-2">
        <BigSaleCard
          image={Sales4}
          maintitle="Nigga the best Sale"
          textColor="white"
          subtitle="Sale"
          timer
        ></BigSaleCard>
        <BigSaleCard
          image={Sales5}
          maintitle="Nigga the best Sale"
          textColor="white"
          subtitle="Sale"
          discount
          discountValue={50}
        ></BigSaleCard>
      </div>
      <div className="w-full flex items-center gap-4">
        <Input placeholder="Email" type="email" error={"Wrong email"}></Input>
        <Input
          placeholder="Password"
          type="password"
          success={"Correct password"}
        ></Input>
        <Input
          placeholder="Username"
          type="username"
          warning={"Wrong password"}
        ></Input>
        <Input placeholder="Search" type="search" isSearch></Input>
      </div>

      <div>
        <DropdownMenu
          trigger="Account"
          items={[
            {
              label: "Profile",
              icon: <User />,
              onClick: () => console.log("Profile"),
            },
            {
              label: "Settings",
              icon: <Settings />,
              onClick: () => console.log("Settings"),
            },
            {
              label: "Logout",
              icon: <LogOut />,
              onClick: () => console.log("Logout"),
            },
          ]}
        ></DropdownMenu>
      </div>

      <div className="w-full">
        <ProductPage></ProductPage>
      </div>
      <button onClick={handleOpen}>Open Modal</button>

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

      <SectionHeader
        viewAll={false}
        title={"Nigga Balls"}
        alignment="center"
      ></SectionHeader>

      <div className="my-10 w-full">
        <CheckoutForm />
      </div>

      <div className="w-full">
        <DualRangeSlider
          min={0}
          max={2000}
          step={25}
          initialMin={200}
          initialMax={1500}
          onChange={(values) => console.log(values)}
        />
      </div>
    </div>
  );
}

export default Test;
