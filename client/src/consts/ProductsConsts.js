import Apple from "/Apple.png";
import BigApple from "/BigApple.png";

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
