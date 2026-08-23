
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