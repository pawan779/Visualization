import { categories, expenses } from "@/data/sampleData";

// Define the types
type Expense = {
  id: string;
  name: string;
  categoryId: string;
  date: string;
  price: number;
};

type ChartData = {
  label: string;
  value: number;
  frontColor: string;
  expenses: { name: string; date: string; price: number }[];
};

type TypeProps = {
  type: "day" | "month";
  input?: string; // For month filtering
};

// Function to group expenses by category
const groupExpensesByCategory = (
  expenses: Expense[]
): Record<
  string,
  { total: number; expenses: { name: string; date: string; price: number }[] }
> => {
  return expenses.reduce<
    Record<
      string,
      {
        total: number;
        expenses: { name: string; date: string; price: number }[];
      }
    >
  >((acc, expense) => {
    if (!acc[expense.categoryId]) {
      acc[expense.categoryId] = {
        total: 0,
        expenses: [],
      };
    }
    acc[expense.categoryId].total += expense.price;
    acc[expense.categoryId].expenses.push({
      name: expense.name,
      date: expense.date,
      price: expense.price,
    });
    return acc;
  }, {});
};

// Check if a date is today
const isToday = (dateString?: string): boolean => {
  if (!dateString) return false;
  const today = new Date();
  const date = new Date(dateString);
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

// Filter expenses for today
const expensesForToday = expenses.filter((expense) => isToday(expense.date));

// Filter expenses for a specific month and year
const filterExpensesByMonthAndYear = (
  expenses: Expense[],
  month: number,
  year: number
): Expense[] => {
  return expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return (
      expenseDate.getMonth() + 1 === month && // Months are 0-based in JavaScript Date
      expenseDate.getFullYear() === year
    );
  });
};

// Convert month name or number to month and year
const getMonthAndYear = (input: string): { month: number; year: number } => {
  const monthNames = {
    jan: 1,
    feb: 2,
    mar: 3,
    apr: 4,
    may: 5,
    jun: 6,
    jul: 7,
    aug: 8,
    sep: 9,
    oct: 10,
    nov: 11,
    dec: 12,
  };

  let month: number | undefined;
  let year: number = 2024; // Default year

  if (input.length === 2) {
    // Assume it's a month number like "08"
    month = parseInt(input, 10);
  } else {
    // Assume it's a month name like "aug"
    const lowerInput = input.toLowerCase();
    month = monthNames[lowerInput];
  }

  return {
    month: month ?? 1, // Default to January if parsing fails
    year,
  };
};

// Generate grouped expenses based on the type
const getGroupedExpenses = ({ type, input }: TypeProps) => {
  console.log("input", input);
  if (type === "day") {
    return groupExpensesByCategory(expensesForToday);
  }
  if (type === "month") {
    const { month, year } = input
      ? getMonthAndYear(input)
      : { month: 1, year: 2024 };
    const filteredExpenses = filterExpensesByMonthAndYear(
      expenses,
      month,
      year
    );
    return groupExpensesByCategory(filteredExpenses);
  }

  return groupExpensesByCategory(expenses);
};

// Prepare data for the bar chart
export const expenseBarData = ({ type, input }: TypeProps): ChartData[] => {
  const groupedExpenses = getGroupedExpenses({ type, input });

  return categories.map((category) => ({
    label: category.name,
    value: groupedExpenses[category.id]?.total || 0,
    frontColor: "#69b3a2", // Customize color
    expenses: groupedExpenses[category.id]?.expenses || [],
  }));
};
