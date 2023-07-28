import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionsPerType = transactions.filter((t) => t.type === title); //taking one type either income or expense at a time and storing all its transactions
  const total = transactionsPerType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  ); //0 is the initial value, reduce sums up all the amount and stores in total
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  //incrementing amount of each category that is present in transactionsPerType to map it out on the chart.
  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((c) => c.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  return { filteredCategories, total, chartData };
};

export default useTransactions;
