import React from "react";
import Apple from "/Apple.png";
import ProductCard from "../../../features/products/product-card";
import { GridContainer, SectionHeader } from "../../ui";
import { products } from "../../../consts/ProductsConsts";

const PopularProducts = () => {

 
  return (
    <div className="w-full sm:px-page px-6 ">
      <SectionHeader title={"Popular Products"} link={"/products"} />
      <GridContainer>
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

export default PopularProducts;
