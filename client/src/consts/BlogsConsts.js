import NewsImage1 from "/NewsImage1.png";

export const blogs = Array(22).fill({
  date: new Date(),
  title:
    "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  tag: "Food",
  creator: "Admin",
  image: NewsImage1,
  comments: 65,
});

export const homeBlogs = blogs.slice(0, 3);

export const categories = [
  {value: "Technology", label: "Technology"},
  {value: "Lifestyle", label: "Lifestyle"},
  {value: "Travel", label: "Travel"},
  {value: "Food", label: "Food"},
  {value: "Health", label: "Health"},
  {value: "Business", label: "Business"},
  {value: "Education", label: "Education"},
  {value: "Entertainment", label: "Entertainment"},
  {value: "Sports", label: "Sports"},
  {value: "Fashion", label: "Fashion"},
];

export const tags = [
  {value: "Technology", label: "Technology"},
  {value: "Lifestyle", label: "Lifestyle"},
  {value: "Travel", label: "Travel"},
  {value: "Food", label: "Food"},
  {value: "Health", label: "Health"},
  {value: "Business", label: "Business"},
  {value: "Education", label: "Education"}, 
  {value: "Entertainment", label: "Entertainment"},
  {value: "Sports", label: "Sports"},
  {value: "Fashion", label: "Fashion"},
];
