interface Product {
  id: number;
  name: string;
  value: number;
  image: {
    url: string;
    amount: number;
  };
}

export const product: Product = {
  id: 42404,
  name: "Sofá Margot II - Rosé",
  value: 4000,
  image: {
    url: "/assets/couch/%d.png",
    amount: 34,
  },
};
