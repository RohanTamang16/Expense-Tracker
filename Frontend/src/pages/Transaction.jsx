import { Link } from "react-router-dom";

import {
	LayoutDashboard,
	ArrowLeftRight,
	Wallet,
	PiggyBank,
	TrendingUp,
	TrendingDown,
	Plus,
	Search,
	Bell,
	Settings,
	ChevronDown,
	ArrowUpRight,
	ArrowDownRight,
	CircleDollarSign,
	CreditCard,
	Loader,
	Landmark,
} from "lucide-react";
import { getIncome } from "../services/IncomeServices";
import { getExpense } from "../services/ExpenseService";
import { useState, useEffect } from "react";
import {
	calculateTotal,
	getCurrentMonthData,
	calculateSavings,
	calculateSavingsRate,
} from "../utils/FinancialCalculation";
import ShowInitial from "../components/common/ShowInitial";
const Transactions = () => {
	const [income, setIncome] = useState([]);
	const [expense, setExpense] = useState([]);
	const [loading, setLoading] = useState(true);

	// Fetch Income
	useEffect(() => {
		const fetchIncome = async () => {
			try {
				const data = await getIncome();
				setIncome(data.data || []);
			} catch (error) {
				console.error("Error fetching income data", error);
				setIncome([]);
			} finally {
				setLoading(false);
			}
		};
		fetchIncome();
	}, []);

	// Fetch Expense
	useEffect(() => {
		const fetchExpense = async () => {
			try {
				const data = await getExpense();
				setExpense(data.data || []);
			} catch (error) {
				console.error("Error fetching expense data", error);
				setExpense([]);
			}
		};
		fetchExpense();
	}, []);

	// Calculate financial data
	const currentMonthIncome = getCurrentMonthData(income);
	const currentMonthExpense = getCurrentMonthData(expense);

	const totalIncome = calculateTotal(currentMonthIncome);
	const totalExpense = calculateTotal(currentMonthExpense);
	// Savings calculations
	const savings = calculateSavings(totalIncome, totalExpense);
	const savingsRate = calculateSavingsRate(savings, totalIncome);

	const name = JSON.parse(localStorage.getItem("user"));
	if (loading) {
		return (
			<div className="min-h-screen bg-[#070B14] text-white flex items-center justify-center">
				<div className="flex flex-col items-center gap-4">
					<Loader size={40} className="animate-spin text-blue-400" />
					<p className="text-slate-400">Loading your dashboard...</p>
				</div>
			</div>
		);
	}
	return (
		<div className="min-h-screen bg-[#070B14] text-white">
			{/* ================= BACKGROUND ================= */}

			<div className="fixed inset-0 pointer-events-none overflow-hidden">
				<div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

				<div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

				<div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
			</div>

			{/* ================= MAIN LAYOUT ================= */}

			<div className="relative flex min-h-screen">
				{/* ================= SIDEBAR ================= */}

				<aside className="hidden lg:flex w-64 shrink-0 border-r border-white/10 bg-white/2 backdrop-blur-xl flex-col">
					{/* Logo */}

					<div className="h-20 flex items-center px-6 border-b border-white/10">
						<div className="flex items-center gap-3">
							<div className="relative">
								<div className="absolute inset-0 bg-blue-500 blur-lg opacity-40" />

								<div className="relative w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
									<Wallet size={21} />
								</div>
							</div>

							<div>
								<h1 className="font-bold text-lg">Expense</h1>

								<p className="text-[10px] text-slate-500 tracking-widest uppercase">
									Tracker
								</p>
							</div>
						</div>
					</div>

					{/* Navigation */}

					<nav className="flex-1 px-4 py-6">
						<p className="px-3 mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
							Main Menu
						</p>

						<div className="space-y-1">
							<Link
								to="/dashboard"
								className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
							>
								<LayoutDashboard
									size={19}
									className="group-hover:text-blue-400 transition-colors"
								/>

								<span className="text-sm">Dashboard</span>
							</Link>

							{/* Active */}

							<Link
								to="/transactions"
								className="group relative flex items-center gap-3 px-3 py-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/10"
							>
								<div className="absolute left-0 w-1 h-6 bg-blue-500 rounded-r-full" />

								<ArrowLeftRight size={19} />

								<span className="text-sm font-medium">Transactions</span>
							</Link>

							<Link
								to="/income"
								className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
							>
								<TrendingUp
									size={19}
									className="group-hover:text-emerald-400 transition-colors"
								/>

								<span className="text-sm">Income</span>
							</Link>

							<Link
								to="/expenses"
								className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
							>
								<TrendingDown
									size={19}
									className="group-hover:text-red-400 transition-colors"
								/>

								<span className="text-sm">Expenses</span>
							</Link>

							<Link
								to="/savings"
								className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
							>
								<PiggyBank
									size={19}
									className="group-hover:text-purple-400 transition-colors"
								/>

								<span className="text-sm">Savings</span>
							</Link>
						</div>

						<p className="px-3 mt-8 mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
							Other
						</p>

						<div className="space-y-1">
							<Link
								to="/settings"
								className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
							>
								<Settings
									size={19}
									className="group-hover:rotate-45 transition-transform duration-300"
								/>

								<span className="text-sm">Settings</span>
							</Link>
						</div>
					</nav>

					{/* User */}

					<div className="p-4 border-t border-white/10">
						<div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
							<div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center font-semibold text-sm">
								<ShowInitial />
							</div>

							<div className="flex-1 min-w-0">
								<p className="text-sm font-medium truncate">
									{name?.name || "GUEST"}
								</p>

								<p className="text-[11px] text-slate-500 truncate">
									Personal Account
								</p>
							</div>

							<button className="text-slate-500 hover:text-white transition-colors">
								<ChevronDown size={16} />
							</button>
						</div>
					</div>
				</aside>

				{/* ================= CONTENT ================= */}

				<main className="flex-1 min-w-0">
					{/* ================= TOP NAVBAR ================= */}

					<header className="h-20 border-b border-white/10 flex items-center justify-between px-5 sm:px-8 lg:px-10 bg-[#070B14]/80 backdrop-blur-xl">
						<div>
							<p className="text-xs text-slate-500 mb-1">
								Manage your finances
							</p>

							<h2 className="text-xl sm:text-2xl font-bold">Transactions</h2>
						</div>

						<div className="flex items-center gap-3">
							<button className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300">
								<Bell size={18} />

								<span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-500" />
							</button>

							<Link to="/profile" className="hidden sm:flex items-center gap-2">
								<div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold">
									<ShowInitial />
								</div>
							</Link>
						</div>
					</header>

					{/* ================= PAGE CONTENT ================= */}

					<div className="p-5 sm:p-8 lg:p-10">
						{/* Header */}

						<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
							<div>
								<h1 className="text-2xl font-bold">All Transactions</h1>

								<p className="text-sm text-slate-500 mt-1">
									Track and manage your income, expenses and savings.
								</p>
							</div>

							<Link
								to="/transactions/add"
								className="group relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 font-semibold text-sm shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
							>
								<Plus
									size={18}
									className="group-hover:rotate-90 transition-transform duration-300"
								/>
								Add Transaction
							</Link>
						</div>

						{/* ================= SUMMARY CARDS ================= */}

						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
							{/* Income */}

							<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-5 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300">
								<div className="absolute -right-10 -top-10 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />

								<div className="flex items-center justify-between mb-4">
									<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/10 flex items-center justify-center text-emerald-400">
										<TrendingUp size={20} />
									</div>

									<ArrowUpRight size={18} className="text-emerald-400" />
								</div>

								<p className="text-sm text-slate-500">Total Income</p>

								<h3 className="text-2xl font-bold mt-1">
									$ {totalIncome.toFixed(2)}
								</h3>
							</div>

							{/* Expense */}

							<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-5 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300">
								<div className="absolute -right-10 -top-10 w-28 h-28 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all" />

								<div className="flex items-center justify-between mb-4">
									<div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/10 flex items-center justify-center text-red-400">
										<TrendingDown size={20} />
									</div>

									<ArrowDownRight size={18} className="text-red-400" />
								</div>

								<p className="text-sm text-slate-500">Total Expenses</p>

								<h3 className="text-2xl font-bold mt-1">
									${totalExpense.toFixed(2)}
								</h3>
							</div>

							{/* Savings */}

							<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-5 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300">
								<div className="absolute -right-10 -top-10 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />

								<div className="flex items-center justify-between mb-4">
									<div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/10 flex items-center justify-center text-purple-400">
										<PiggyBank size={20} />
									</div>

									<span className="text-xs text-purple-400">{savingsRate} %</span>
								</div>

								<p className="text-sm text-slate-500">Total Savings</p>

								<h3 className="text-2xl font-bold mt-1">Rs. {savings}</h3>
							</div>
						</div>

						{/* ================= TRANSACTION SECTION ================= */}

						<div className="rounded-2xl border border-white/10 bg-white/3 overflow-hidden">
							{/* Toolbar */}

							<div className="p-5 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
								<div>
									<h2 className="font-semibold">Recent Transactions</h2>

									<p className="text-xs text-slate-500 mt-1">
										Your latest financial activity
									</p>
								</div>

								<div className="flex items-center gap-3">
									{/* Search */}

									<div className="relative">
										<Search
											size={16}
											className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
										/>

										<input
											type="text"
											placeholder="Search..."
											className="w-40 sm:w-52 h-10 pl-9 pr-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-slate-600 outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all"
										/>
									</div>

									{/* Filter */}

									<button className="h-10 px-4 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-400 hover:text-white hover:bg-white/10 transition-all">
										Filter
									</button>
								</div>
							</div>

							{/* ================= TABLE ================= */}

							<div className="overflow-x-auto">
								<table className="w-full min-w-175">
									<thead>
										<tr className="border-b border-white/10 text-left">
											<th className="px-5 py-4 text-[11px] uppercase tracking-wider text-slate-500 font-medium">
												Transaction
											</th>

											<th className="px-5 py-4 text-[11px] uppercase tracking-wider text-slate-500 font-medium">
												Category
											</th>

											<th className="px-5 py-4 text-[11px] uppercase tracking-wider text-slate-500 font-medium">
												Date
											</th>

											<th className="px-5 py-4 text-[11px] uppercase tracking-wider text-slate-500 font-medium">
												Type
											</th>

											<th className="px-5 py-4 text-[11px] uppercase tracking-wider text-slate-500 font-medium text-right">
												Amount
											</th>
										</tr>
									</thead>

									<tbody>
										{/* Income */}

										<tr className="group border-b border-white/5 hover:bg-white/4 transition-colors">
											<td className="px-5 py-4">
												<div className="flex items-center gap-3">
													<div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
														<Landmark size={18} />
													</div>

													<div>
														<p className="text-sm font-medium">
															Monthly Salary
														</p>

														<p className="text-xs text-slate-500">
															Salary credited
														</p>
													</div>
												</div>
											</td>

											<td className="px-5 py-4 text-sm text-slate-400">
												Salary
											</td>

											<td className="px-5 py-4 text-sm text-slate-400">
												Aug 20, 2026
											</td>

											<td className="px-5 py-4">
												<span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-medium">
													Income
												</span>
											</td>

											<td className="px-5 py-4 text-right">
												<span className="text-sm font-semibold text-emerald-400">
													+Rs. 85,000
												</span>
											</td>
										</tr>

										{/* Expense */}

										<tr className="group border-b border-white/5 hover:bg-white/4 transition-colors">
											<td className="px-5 py-4">
												<div className="flex items-center gap-3">
													<div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
														<CreditCard size={18} />
													</div>

													<div>
														<p className="text-sm font-medium">
															Grocery Shopping
														</p>

														<p className="text-xs text-slate-500">
															Weekly groceries
														</p>
													</div>
												</div>
											</td>

											<td className="px-5 py-4 text-sm text-slate-400">Food</td>

											<td className="px-5 py-4 text-sm text-slate-400">
												Aug 19, 2026
											</td>

											<td className="px-5 py-4">
												<span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-red-500/10 text-red-400 text-xs font-medium">
													Expense
												</span>
											</td>

											<td className="px-5 py-4 text-right">
												<span className="text-sm font-semibold text-red-400">
													-Rs. 4,250
												</span>
											</td>
										</tr>

										{/* Saving */}

										<tr className="group border-b border-white/5 hover:bg-white/4 transition-colors">
											<td className="px-5 py-4">
												<div className="flex items-center gap-3">
													<div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
														<PiggyBank size={18} />
													</div>

													<div>
														<p className="text-sm font-medium">
															Emergency Fund
														</p>

														<p className="text-xs text-slate-500">
															Monthly savings
														</p>
													</div>
												</div>
											</td>

											<td className="px-5 py-4 text-sm text-slate-400">
												Savings
											</td>

											<td className="px-5 py-4 text-sm text-slate-400">
												Aug 18, 2026
											</td>

											<td className="px-5 py-4">
												<span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-xs font-medium">
													Saving
												</span>
											</td>

											<td className="px-5 py-4 text-right">
												<span className="text-sm font-semibold text-purple-400">
													-Rs. 10,000
												</span>
											</td>
										</tr>

										{/* Expense */}

										<tr className="group border-b border-white/5 hover:bg-white/4 transition-colors">
											<td className="px-5 py-4">
												<div className="flex items-center gap-3">
													<div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
														<CircleDollarSign size={18} />
													</div>

													<div>
														<p className="text-sm font-medium">
															Transportation
														</p>

														<p className="text-xs text-slate-500">
															Taxi and bus
														</p>
													</div>
												</div>
											</td>

											<td className="px-5 py-4 text-sm text-slate-400">
												Transport
											</td>

											<td className="px-5 py-4 text-sm text-slate-400">
												Aug 17, 2026
											</td>

											<td className="px-5 py-4">
												<span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-red-500/10 text-red-400 text-xs font-medium">
													Expense
												</span>
											</td>

											<td className="px-5 py-4 text-right">
												<span className="text-sm font-semibold text-red-400">
													-Rs. 1,500
												</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							{/* Footer */}

							<div className="px-5 py-4 flex items-center justify-between border-t border-white/10">
								<p className="text-xs text-slate-500">
									Showing 4 of 24 transactions
								</p>

								<Link
									to="/transactions"
									className="text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
								>
									View all →
								</Link>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Transactions;
