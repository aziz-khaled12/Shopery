import React from "react";
import { GridContainer, SectionHeader } from "../../ui";
// import { products } from "../../../consts/ProductsConsts";
import { useProducts } from "../../../hooks/queries/useProducts";
import { ProductCard } from "../../cards";

const PopularProducts = () => {
  const { data } = useProducts({category: "popular-products"});
  const products = data || [];

  return (
    <div className="w-full sm:px-page px-6 ">
      <SectionHeader title={"Popular Products"} link={"/products"} />
      <GridContainer gap={2}>
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </GridContainer>
    </div>
  );
};

export default PopularProducts;
