import React from "react";
import FreshFruit from "/FreshFruit.png";
import FreshVegetables from "/FreshVegetables.png";
import MeatAndFish from "/MeatAndFish.png";
import Snacks from "/Snacks.png";
import Beverages from "/Beverages.png";
import BeautyAndHealth from "/BeautyAndHealth.png";
import BreadAndBakery from "/BreadAndBakery.png";
import BakingNeeds from "/BakingNeeds.png";
import Cooking from "/Cooking.png";
import DiabeticFood from "/DiabeticFood.png";
import DishDetergents from "/DishDetergents.png";
import Oil from "/Oil.png";
import CategoryCard from "../../../features/categories/category-card";
import { GridContainer, SectionHeader } from "../../ui";

const PopularCategories = () => {
  const categories = [
    { id: 1, title: "Fresh Fruit", image: FreshFruit },
    { id: 2, title: "Fresh Vegetables", image: FreshVegetables },
    { id: 3, title: "Meat & Fish", image: MeatAndFish },
    { id: 4, title: "Snacks", image: Snacks },
    { id: 5, title: "Beverages", image: Beverages },
    { id: 6, title: "Beauty & Health", image: BeautyAndHealth },
    { id: 7, title: "Bread & Bakery", image: BreadAndBakery },
    { id: 8, title: "Baking Needs", image: BakingNeeds },
    { id: 9, title: "Cooking", image: Cooking },
    { id: 10, title: "Diabetic Food", image: DiabeticFood },
    { id: 11, title: "Dish Detergents", image: DishDetergents },
    { id: 12, title: "Oil", image: Oil },
  ];

  return (
    <div className="sm:px-page px-6 py-[60px]">
      <SectionHeader title={"Popular Categories"} link={"/categories"} />
      <GridContainer gap={6} cols={6}>
        {
          categories.map((category) => (
            <CategoryCard key={category.id} title={category.title} image={category.image} />
          ))
        }
      </GridContainer>
    </div>
  );
};

export default PopularCategories;
