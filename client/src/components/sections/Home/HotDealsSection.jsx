import React from "react";
import BigApple from "/BigApple.png";
import Apple from "/Apple.png";
import { GridContainer, SectionHeader } from "../../ui";
import { bigProduct, products } from "../../../consts/ProductsConsts";
import { BigProductCard, ProductCard } from "../../cards";

const HotDealsSection = () => {


  return (
    <div className="w-full px-6 sm:px-page bg-gray-bg py-[60px]">
      <SectionHeader title={"Hot Deals"} link={"/products"} alignment={"left"} />
      <GridContainer gap={2}>
        <div className="col-span-2 sm:row-span-2">
          <BigProductCard
            product={bigProduct}
          />
        </div>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default HotDealsSection;
