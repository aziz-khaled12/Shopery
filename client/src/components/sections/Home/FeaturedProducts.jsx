import React from "react";
import Apple from "/Apple.png";
import ProductCard from "../../../features/products/product-card";
import { GridContainer, SectionHeader } from "../../ui";
import { products } from "../../../consts/ProductsConsts";

const FeaturedProducts = () => {

  return (
    <div className="w-full sm:px-page px-6">
      <SectionHeader title={"Featured Products"} link={"/products"} />

      <GridContainer className="lg:grid-cols-6 gap-6 sm:gap-4 md:gap-3">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              image={product.image}
              price={product.price}
              rating={product.rating}
              title={product.title}
            />
          );
        })}
      </GridContainer>
    </div>
  );
};

export default FeaturedProducts;
