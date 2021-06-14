const vegetablesAndFruits = [
  {
    id: "001",
    label: "carrot",
    type: { id: 1, label: "vegetables" },
    price: 1.99,
  },
  {
    id: "002",
    label: "potato",
    type: { id: 1, label: "vegetables" },
    price: 4.99,
  },
  {
    id: "003",
    label: "tomato",
    type: { id: 1, label: "vegetables" },
    price: 1.49,
  },
  {
    id: "004",
    label: "squash",
    type: { id: 1, label: "vegetables" },
    price: 2.49,
  },
  {
    id: "005",
    label: "oinions",
    type: { id: 1, label: "vegetables" },
    price: 2.99,
  },
  {
    id: "006",
    label: "parsely",
    type: { id: 1, label: "vegetables" },
    price: 1.99,
  },
  { id: "007", label: "mango", type: { id: 2, label: "fruit" }, price: 3.49 },
  { id: "008", label: "banana", type: { id: 2, label: "fruit" }, price: 0.69 },
  { id: "009", label: "orange", type: { id: 2, label: "fruit" }, price: 2.99 },
  {
    id: "010",
    label: "watermelon",
    type: { id: 2, label: "fruit" },
    price: 3.49,
  },
  { id: "011", label: "peach", type: { id: 2, label: "fruit" }, price: 2.99 },
  { id: "012", label: "abricot", type: { id: 2, label: "fruit" }, price: 3.2 },
];

export function getVegetables() {
  return vegetablesAndFruits.filter((data) => data.type.id === 1);
}

export function getFruits() {
  return vegetablesAndFruits.filter((data) => data.type.id === 2);
}

export function getElement(id) {
  console.log(id);
  return vegetablesAndFruits.filter((f) => f.id === id);
}
