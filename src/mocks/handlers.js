import { rest } from "msw";

const baseURL = "http://localhost:3030";

export const handlers = [
  rest.get(`${baseURL}/scoops`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Matcha",
          imagePath: "/images/matcha.jpeg",
        },
        {
          name: "Pistachio",
          imagePath: "/images/pistachio.jpg",
        },
        {
          name: "Mint chip",
          imagePath: "/images/mint-chip.jpg",
        },
        {
          name: "Taro",
          imagePath: "/images/taro.jpeg",
        },
        {
          name: "Blueberry",
          imagePath: "/images/blueberry.jpg",
        },
        {
          name: "Bubblegum",
          imagePath: "/images/bubblegum.jpg",
        },
        {
          name: "Strawberry",
          imagePath: "/images/strawberry.jpg",
        },
        {
          name: "Raspberry",
          imagePath: "/images/raspberry.jpg",
        },
        {
          name: "Watermelon",
          imagePath: "/images/watermelon.jpg",
        },
        {
          name: "Blood Orange",
          imagePath: "/images/blood-orange.jpg",
        },
        {
          name: "Banana",
          imagePath: "/images/banana.png",
        },
        {
          name: "Vanilla",
          imagePath: "/images/vanilla.jpg",
        },
        {
          name: "Chocolate",
          imagePath: "/images/chocolate.jpg",
        },
        {
          name: "Coffee",
          imagePath: "/images/coffee.jpeg",
        },
        {
          name: "Rocky Road",
          imagePath: "/images/rocky-road.jpg",
        },
        {
          name: "Salted caramel",
          imagePath: "/images/salted-caramel.png",
        },
      ])
    );
  }),
];
