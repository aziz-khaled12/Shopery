import Apple from "/Apple.png";
import BigApple from "/BigApple.png";
import SliderImage1 from "/SliderImage1.png";
import SliderImage2 from "/SliderImage2.png";
import SliderImage3 from "/SliderImage3.png";
import BigCabbage from "/BigCabbage.png";

export const products = Array(11).fill().map(() => ({
  id: Math.random(),
  title: "Green Apple",
  price: 15,
  image: Apple,
  averageRating: 4,
  ratingCount: 100,
  unit: "kg",
}));

export const bigProduct = {
  id: Math.random(),
  title: "Big Apples",
  image: BigApple,
  price: 24,
  discount: 50,
  averageRating: 4,
  ratingCount: 100,
  unit: "kg",
};

export const modalProduct = {
  id: Math.random(),
  title: "Big Apples",
  images: [BigCabbage, SliderImage1, SliderImage2, SliderImage3],
  price: 24,
  discount: 12,
  discountedPrice: 24 - (24 * 12 / 100),
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  averageRating: 4,
  ratingCount: 100,
  unit: "kg",
  category: "Vegetables",
  tags: ["Vegetables", "Healthy", "Chinese Cabbage", "Green Cabbage"],
}