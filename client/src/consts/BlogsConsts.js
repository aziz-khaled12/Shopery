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