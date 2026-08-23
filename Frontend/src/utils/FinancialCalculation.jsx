
export const calculateTotal = (items) => {
	if (!items || items.length === 0) return 0;
	return items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
};


export const getCurrentMonthData = (items) => {
	if (!items) return [];
	const now = new Date();
	const currentMonth = now.getMonth();
	const currentYear = now.getFullYear();

	return items.filter((item) => {
		const itemDate = new Date(item.income_date || item.expense_date);
		return (
			itemDate.getMonth() === currentMonth &&
			itemDate.getFullYear() === currentYear
		);
	});
};


export const calculateSavings = (totalIncome, totalExpense) => {
	return totalIncome - totalExpense;
};


export const calculateSavingsRate = (savings, totalIncome) => {
	if (totalIncome === 0) return 0;
	return ((savings / totalIncome) * 100).toFixed(2);
};


export const getSavingsHealthStatus = (savingsRate) => {
	if (savingsRate >= 50) return "Excellent";
	if (savingsRate >= 30) return "Good";
	if (savingsRate >= 10) return "Fair";
	return "Poor";
};


export const getSavingsHealthColor = (savingsRate) => {
	if (savingsRate >= 50) return "text-emerald-400";
	if (savingsRate >= 30) return "text-blue-400";
	if (savingsRate >= 10) return "text-yellow-400";
	return "text-red-400";
};


export const calculateExpenseRatio = (totalExpense, totalIncome) => {
	if (totalIncome === 0) return 0;
	return ((totalExpense / totalIncome) * 100).toFixed(2);
};


export const groupByCategory = (items) => {
	if (!items) return {};

	return items.reduce((acc, item) => {
		const category = item.category || "Uncategorized";
		if (!acc[category]) {
			acc[category] = [];
		}
		acc[category].push(item);
		return acc;
	}, {});
};


export const getTopCategories = (items, limit = 5) => {
	const grouped = groupByCategory(items);
	const categories = Object.entries(grouped).map(([name, expenses]) => ({
		name,
		total: calculateTotal(expenses),
		count: expenses.length,
	}));

	return categories.sort((a, b) => b.total - a.total).slice(0, limit);
};

export const filterByDateRange = (items, startDate, endDate) => {
	if (!items) return [];

	return items.filter((item) => {
		const itemDate = new Date(item.expense_date || item.income_date);
		return itemDate >= startDate && itemDate <= endDate;
	});
};

export const calculateFinancialScore = (savingsRate, expenseRatio) => {
	// 50% weight on savings rate, 50% on keeping expenses low
	const savingsScore = Math.min(savingsRate, 50); // Max 50 points
	const expenseScore = Math.max(0, 50 - expenseRatio); // Max 50 points (lower is better)
	
	return Math.min(100, Math.round(savingsScore + expenseScore));
};
// Calculate percentage change
export const calculateRate = (current, previous) => {
    current = Number(current) || 0;
    previous = Number(previous) || 0;

    // If there was no previous data
    if (previous === 0) {
        if (current === 0) return 0;
        return 100;
    }

    return Number((((current - previous) / previous) * 100).toFixed(1));
};

// Total balance
export const calculateBalance = (income, expense) => {
    return (Number(income) || 0) - (Number(expense) || 0);
};

// Balance rate
export const calculateBalanceRate = (currentIncome, currentExpense, previousIncome, previousExpense) => {
    const currentBalance = calculateBalance(
        currentIncome,
        currentExpense
    );

    const previousBalance = calculateBalance(
        previousIncome,
        previousExpense
    );

    return calculateRate(currentBalance, previousBalance);
};

// Income rate
export const calculateIncomeRate = (currentIncome, previousIncome) => {
    return calculateRate(currentIncome, previousIncome);
};

// Expense rate
export const calculateExpenseRate = (currentExpense, previousExpense) => {
    return calculateRate(currentExpense, previousExpense);
};
export const getPreviousMonthData = (data) => {
    const now = new Date();

    const previousMonth = now.getMonth() - 1;
    const year =
        previousMonth < 0
            ? now.getFullYear() - 1
            : now.getFullYear();

    const month =
        previousMonth < 0
            ? 11
            : previousMonth;

    return data.filter((item) => {
        const date = new Date(
            item.income_date || item.expense_date
        );

        return (
            date.getMonth() === month &&
            date.getFullYear() === year
        );
    });
};