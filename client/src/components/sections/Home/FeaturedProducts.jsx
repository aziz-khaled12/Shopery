import React from "react";
import Apple from "/Apple.png";
import { GridContainer, SectionHeader } from "../../ui";
import { products } from "../../../consts/ProductsConsts";
import { ProductCard } from "../../cards";

const FeaturedProducts = () => {

  return (
    <div className="w-full sm:px-page px-6">
      <SectionHeader title={"Featured Products"} link={"/products"} />

      <GridContainer gap={2}>
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              product={product}
            />
          );
        })}
      </GridContainer>
    </div>
  );
};

export default FeaturedProducts;
