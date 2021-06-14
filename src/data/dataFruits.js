const fruits = [
  { id: "001", label: "mango", type: { id: 2, label: fruit }, quantiy: 10 },
  { id: "002", label: "banana", type: { id: 2, label: fruit }, quantiy: 8 },
  { id: "003", label: "orange", type: { id: 2, label: fruit }, quantiy: 9 },
  {
    id: "004",
    label: "water melon",
    type: { id: 2, label: fruit },
    quantiy: 7,
  },
  { id: "005", label: "peach", type: { id: 2, label: fruit }, quantiy: 5 },
  { id: "006", label: "abricot", type: { id: 2, label: fruit }, quantiy: 23 },
];

export function getFruits() {
  return fruits;
}

export function getfruit(id) {
  return fruits.filter((f) => (f.id = id));
}
