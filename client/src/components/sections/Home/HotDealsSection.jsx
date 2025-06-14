import React from "react";
import BigApple from "/BigApple.png";
import Apple from "/Apple.png";
import BigProductCard from "../../../features/products/big-product-card";
import ProductCard from "../../../features/products/product-card";
import { GridContainer, SectionHeader } from "../../ui";
import { products } from "../../../consts/ProductsConsts";

const HotDealsSection = () => {
  const bigProduct = {
    title: "Big Apples",
    image: BigApple,
    rating: 5,
    price: 24,
    discount: 50,
    feedbacks: 365,
  };


  return (
    <div className="w-full px-6 sm:px-page bg-gray-bg py-[60px]">
      <SectionHeader title={"Hot Deals"} link={"/products"} alignment={"left"} />
      <GridContainer>
        <div className="col-span-2 sm:row-span-2">
          <BigProductCard
            discount={bigProduct.discount}
            price={bigProduct.price}
            rating={bigProduct.rating}
            title={bigProduct.title}
            image={bigProduct.image}
            feedbacks={bigProduct.feedbacks}
          />
        </div>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default HotDealsSection;
