function getRandomDate(start: Date, end: Date): string {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split("T")[0];
}

function getRandomPrice(min: number, max: number): number {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

const expenseNames = [
  "Grocery Shopping",
  "Electricity Bill",
  "Movie Tickets",
  "Gym Membership",
  "Car Repair",
  "Coffee",
  "Restaurant",
  "Internet Bill",
  "Phone Bill",
  "Concert Tickets",
  "Medical Bill",
  "Insurance",
  "Bus Fare",
  "Fuel",
  "Taxi Ride",
  "Books",
  "Clothing",
  "Household Items",
  "Subscription",
  "Streaming Service",
];

export const categories: Category[] = [
  { id: "c1", name: "Food" },
  { id: "c6", name: "Rent" },
  { id: "c5", name: "Transportation" },
  { id: "c3", name: "Entertainment" },
  { id: "c4", name: "Health" },
  { id: "c2", name: "Utilities" },
  { id: "c7", name: "Others" },
];

export const expenses: Expense[] = Array.from({ length: 100 }, () => {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const name = expenseNames[Math.floor(Math.random() * expenseNames.length)];
  const price = getRandomPrice(10, 500);
  const date = getRandomDate(new Date(2023, 0, 1), new Date());

  return {
    id: date + "_" + name,
    name,
    categoryId: category.id,
    price,
    date,
  };
});

console.log(expenses);
