type ChartProps = {
  id: number;
  name: string;
  type: string;
};

type Category = {
  id: string;
  name: string;
};

type Expense = {
  id: string;
  name: string;
  categoryId: string;
  price: number;
  date: string;
};

type ChartData = {
  label: string;
  total: number;
  expenses: {
    name: string;
    date: string;
    price: number;
  }[];
};
