import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList, { Expense } from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [expenses, setExpenses] = useState<Expense[]>([]);
	const visibleExpenses = selectedCategory
		? expenses.filter((e) => e.category === selectedCategory)
		: expenses;

	return (
		<div>
			<div className="mb-5">
				<ExpenseForm
					onSubmit={(expense) =>
						setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
					}
				/>
			</div>
			<div className="mb-3">
				<ExpenseFilter
					onSelectCategory={(category) => setSelectedCategory(category)}
				/>
			</div>

			<ExpenseList
				expenses={visibleExpenses}
				onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
			></ExpenseList>
		</div>
	);
}

export default App;
