// RecentTransaction.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MoreHorizontal } from "lucide-react";

export default function RecentTransaction() {
	const [transactions, setTransaction] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchTransactions = async () => {
			try {
				const token = localStorage.getItem("token");
				const response = await axios.get(
					"http://localhost:8000/api/transaction/recent",
					{
						headers: { Authorization: `Bearer ${token}` },
					},
				);

				// FIX: Get data from response.data.data
				const data = response.data.data || [];
				setTransaction(data);
			} catch (error) {
				console.error("Error fetching transactions:", error);
				setTransaction([]);
			} finally {
				setLoading(false);
			}
		};

		fetchTransactions();
	}, []);

	// Get icon based on source
	const getIcon = (source) => {
		const iconMap = {
			"Freelance": "💼",
			"Investment": "📈",
			"Food": "🍔",
			"Housing": "🏠",
			"Salary": "💰",
			"Rent": "🏠",
			"Utilities": "⚡",
			"Transport": "🚗",
			"Entertainment": "🎮",
			"Shopping": "🛍️",
			"Healthcare": "🏥",
		};
		return iconMap[source] || "💳";
	};

	// Get color based on source
	const getColor = (source) => {
		const incomeCategories = ["Freelance", "Salary", "Investment", "Bonus"];
		const isIncome = incomeCategories.includes(source);
		return isIncome ? "bg-emerald-500/20 text-emerald-400" : "bg-blue-500/20 text-blue-400";
	};

	return (
		<div className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden">
			<div className="flex items-center justify-between p-6 border-b border-white/10">
				<div>
					<h3 className="font-semibold">Recent Transactions</h3>
					<p className="text-xs text-slate-500 mt-1">
						Your latest financial activity
					</p>
				</div>

				<Link
					to="/transactions"
					className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
				>
					View All
				</Link>
			</div>

			<div>
				{loading ? (
					<div className="px-6 py-8 text-center text-slate-500">
						<p className="text-sm">Loading transactions...</p>
					</div>
				) : transactions.length === 0 ? (
					<div className="px-6 py-8 text-center text-slate-500">
						<p className="text-sm">No transactions yet</p>
					</div>
				) : (
					transactions.map((transaction, index) => {
						// Determine if income or expense
						const incomeCategories = ["Freelance", "Salary", "Investment", "Bonus"];
						const isIncome = incomeCategories.includes(transaction.source);
						const amountDisplay = isIncome 
							? `+₹${parseFloat(transaction.amount).toLocaleString()}` 
							: `-₹${parseFloat(transaction.amount).toLocaleString()}`;

						// Format date
						const transactionDate = transaction.created_at
							? new Date(transaction.created_at).toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
								})
							: "Today";

						return (
							<div
								key={index}
								className="group flex items-center justify-between px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/2.5 transition-colors"
							>
								<div className="flex items-center gap-4">
									<div
										className={`h-11 w-11 rounded-xl ${getColor(
											transaction.source,
										)} flex items-center justify-center group-hover:scale-105 transition-transform duration-300 text-lg`}
									>
										{getIcon(transaction.source)}
									</div>

									<div>
										<p className="text-sm font-medium">
											{transaction.description || transaction.source}
										</p>
										<p className="text-[11px] text-slate-600 mt-1">
											{transaction.source} · {transactionDate}
										</p>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<span
										className={`text-sm font-semibold ${
											isIncome ? "text-emerald-400" : "text-white"
										}`}
									>
										{amountDisplay}
									</span>

									<button className="text-slate-600 hover:text-white transition-colors">
										<MoreHorizontal size={17} />
									</button>
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}