import {
	Wallet,
	LayoutDashboard,
	Receipt,
	Target,
	TrendingUp,
	Settings,
	LogOut,
	Search,
	Bell,
	Plus,
	ChevronRight,
	CalendarDays,
	PiggyBank,
} from "lucide-react";
import axios from "axios";
import { useState } from "react";

import { Link } from "react-router-dom";

import ShowName from "../common/ShowName";
import ShowInitial from "../common/ShowInitial";

const CreateBudget = () => {
	const [formData, setFormData] = useState({
		name: "",
		category: "",
		amount: "",
		start_date: "",
		end_date: "",
		description: "",
	});

	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((previous) => ({
			...previous,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setError("");
		setSuccess("");

		if (
			!formData.name ||
			!formData.category ||
			!formData.amount ||
			!formData.description ||
			!formData.start_date ||
			!formData.end_date
		) {
			setError("Please fill all the required fields");
			return;
		}

		const token = localStorage.getItem("token");

		if (!token) {
			setError("You must be logged in to add expense");
			return;
		}

		try {
			const response = await axios.post(
				"http://localhost:8000/api/budgets",
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);

			console.log("Budget form submitted successfully", response.data);

			setSuccess("Budget added successfully");

			setFormData({
				name: "",
				category: "",
				amount: "",
				start_date: "",
				end_date: "",
				description: "",
			});
		} catch (error) {
			console.error(
				"Error submitting budget form",
				error.response?.data || error.message,
			);

			if (error.response) {
				if (error.response.status === 401) {
					setError("Token expired. Please login again.");
					localStorage.removeItem("token");
					return;
				}

				setError(
					`Error: ${error.response.data.message || error.response.statusText}`,
				);
			} else if (error.request) {
				setError("No response from server. Check if backend is running.");
			} else {
				setError(error.message);
			}
		}
	};
	return (
		<div className="min-h-screen bg-[#070B14] text-white">
			{/* Background */}
			<div className="fixed inset-0 pointer-events-none overflow-hidden">
				<div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl animate-pulse" />

				<div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl animate-pulse [animation-delay:1s]" />

				<div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

				<div
					className="absolute inset-0 opacity-[0.025]"
					style={{
						backgroundImage:
							"linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
						backgroundSize: "50px 50px",
					}}
				/>
			</div>

			<div className="relative flex min-h-screen">
				{/* ================= SIDEBAR ================= */}
				<aside className="hidden lg:flex w-64 flex-col border-r border-white/10 bg-[#090D17]/90 backdrop-blur-xl fixed inset-y-0 left-0 z-30">
					{/* Logo */}
					<div className="flex items-center gap-3 px-6 py-6 border-b border-white/10">
						<div className="relative">
							<div className="absolute inset-0 bg-blue-500 rounded-xl blur-lg opacity-40" />

							<div className="relative h-10 w-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
								<Wallet size={21} />
							</div>
						</div>

						<div>
							<h1 className="font-bold text-lg tracking-tight">Expense</h1>

							<p className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">
								Tracker
							</p>
						</div>
					</div>

					{/* Navigation */}
					<nav className="flex-1 px-4 py-6 space-y-2">
						<p className="px-3 mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
							Overview
						</p>

						<Link
							to="/dashboard"
							className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
						>
							<LayoutDashboard
								size={19}
								className="group-hover:scale-110 transition-transform"
							/>

							<span className="text-sm font-medium">Dashboard</span>
						</Link>

						<Link
							to="/transactions"
							className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
						>
							<Receipt
								size={19}
								className="group-hover:scale-110 transition-transform"
							/>

							<span className="text-sm font-medium">Transactions</span>
						</Link>

						{/* Active Budget */}
						<Link
							to="/budgets"
							className="group flex items-center gap-3 px-3 py-3 rounded-xl bg-blue-500/10 border border-blue-500/10 text-blue-400 transition-all duration-300"
						>
							<Target size={19} />

							<span className="text-sm font-medium">Budgets</span>

							<span className="ml-auto h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
						</Link>

						<Link
							to="/analytics"
							className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
						>
							<TrendingUp
								size={19}
								className="group-hover:scale-110 transition-transform"
							/>

							<span className="text-sm font-medium">Analytics</span>
						</Link>

						<p className="px-3 mb-3 mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
							Account
						</p>

						<Link
							to="/profile"
							className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
						>
							<Settings size={19} />

							<span className="text-sm font-medium">Settings</span>
						</Link>
					</nav>

					{/* User */}
					<div className="p-4 border-t border-white/10">
						<div className="flex items-center gap-3 p-3 rounded-xl bg-white/3">
							<ShowInitial />

							<div className="min-w-0 flex-1">
								<ShowName />
							</div>

							<Link
								to="/logout"
								className="text-slate-500 hover:text-red-400 transition-colors"
							>
								<LogOut size={17} />
							</Link>
						</div>
					</div>
				</aside>

				{/* ================= MAIN CONTENT ================= */}
				<main className="w-full lg:ml-64">
					{/* Top Navbar */}
					<header className="sticky top-0 z-20 h-20 border-b border-white/10 bg-[#070B14]/80 backdrop-blur-xl">
						<div className="h-full px-5 sm:px-8 flex items-center justify-between">
							{/* Mobile Logo */}
							<div className="flex items-center gap-3 lg:hidden">
								<div className="h-9 w-9 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
									<Wallet size={19} />
								</div>

								<span className="font-bold">Expense Tracker</span>
							</div>

							{/* Search */}
							<div className="hidden md:flex items-center w-72 h-10 rounded-xl bg-white/4 border border-white/10 px-3 gap-3">
								<Search size={17} className="text-slate-500" />

								<input
									type="text"
									placeholder="Search transactions..."
									className="bg-transparent outline-none text-sm text-white placeholder:text-slate-600 w-full"
								/>

								<span className="text-[10px] text-slate-600 border border-white/10 px-1.5 py-0.5 rounded">
									/
								</span>
							</div>

							{/* Right */}
							<div className="flex items-center gap-3 ml-auto">
								<button className="relative h-10 w-10 rounded-xl border border-white/10 bg-white/3 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
									<Bell size={18} />

									<span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
								</button>

								<div className="hidden sm:block h-8 w-px bg-white/10" />

								<div className="flex items-center gap-3">
									<ShowInitial />

									<div className="hidden sm:block">
										<ShowName />

										<p className="text-[10px] text-slate-500">
											Personal account
										</p>
									</div>
								</div>
							</div>
						</div>
					</header>

					{/* ================= PAGE ================= */}
					<div className="p-5 sm:p-8 max-w-300 mx-auto">
						{/* Header */}
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
							<div>
								<div className="flex items-center gap-2 mb-2">
									<Target size={16} className="text-blue-400" />

									<span className="text-xs font-medium text-blue-400">
										Budget Management
									</span>
								</div>

								<h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
									Create New Budget
								</h1>

								<p className="text-sm text-slate-500 mt-1">
									Set a spending limit and keep your expenses under control.
								</p>
							</div>

							<Link
								to="/budgets"
								className="inline-flex items-center justify-center gap-2 px-4 h-10 rounded-xl border border-white/10 bg-white/3 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all"
							>
								<ChevronRight size={16} className="rotate-180" />
								Back to Budgets
							</Link>
						</div>

						{/* ================= FORM CARD ================= */}
						<div className="max-w-3xl mx-auto">
							<div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden">
								{/* Form Header */}
								<div className="px-6 sm:px-8 py-6 border-b border-white/10">
									<div className="flex items-center gap-4">
										<div className="h-12 w-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
											<PiggyBank size={22} />
										</div>

										<div>
											<h2 className="font-semibold text-lg">Budget Details</h2>

											<p className="text-xs text-slate-500 mt-1">
												Enter the details for your new budget.
											</p>
										</div>
									</div>
								</div>

								{/* Form */}
								<form className="p-6 sm:p-8 space-y-6" onSubmit={handleSubmit}>
									{/* Error Message */}
									{error && (
										<div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
											{error}
										</div>
									)}

									{/* Success Message */}
									{success && (
										<div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
											{success}
										</div>
									)}

									{/* Budget Name */}
									<div>
										<label className="block text-sm font-medium text-slate-300 mb-2">
											Budget Name
										</label>

										<input
											type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
											placeholder="e.g. Monthly Food Budget"
											className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-blue-500/50 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
										/>
									</div>

									{/* Category */}
									<div>
										<label className="block text-sm font-medium text-slate-300 mb-2">
											Category
										</label>

										<select 
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none appearance-none cursor-pointer transition-all duration-300 focus:border-blue-500/50 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10">
											<option className="bg-[#101622]" value="">
												Select category
											</option>

											<option className="bg-[#101622]"  value='Food & Dining'>Food & Dining</option>

											<option className="bg-[#101622]" value='Transportation'>Transportation</option>

											<option className="bg-[#101622]" value='Shopping'>Shopping</option>

											<option className="bg-[#101622]" value='Entertainment'>Entertainment</option>

											<option className="bg-[#101622]" value='Healthcare'>Healthcare</option>

											<option className="bg-[#101622]" value='Housing'>Housing</option>

											<option className="bg-[#101622]" value='Utilities'>Utilities</option>

											<option className="bg-[#101622]" value='Other'>Other</option>
										</select>
									</div>

									{/* Amount */}
									<div>
										<label className="block text-sm font-medium text-slate-300 mb-2">
											Budget Amount
										</label>

										<div className="relative">
											<span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
												$
											</span>

											<input
												type="number"
                                                name="amount"
                                                value={formData.amount}
                                                onChange={handleChange}
												placeholder="0.00"
												className="w-full h-12 pl-10 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-blue-500/50 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
											/>
										</div>
									</div>

									{/* Dates */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
										<div>
											<label className="block text-sm font-medium text-slate-300 mb-2">
												Start Date
											</label>

											<div className="relative">
												<CalendarDays
													size={17}
													className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
												/>

												<input
													type="date"
                                                    name="start_date"
                                                    value={formData.start_date}
                                                    onChange={handleChange}
													className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none transition-all duration-300 focus:border-blue-500/50 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
												/>
											</div>
										</div>

										<div>
											<label className="block text-sm font-medium text-slate-300 mb-2">
												End Date
											</label>

											<div className="relative">
												<CalendarDays
													size={17}
													className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
												/>

												<input
													type="date"
                                                    name="end_date"
                                                    value={formData.end_date}
                                                    onChange={handleChange}
													className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none transition-all duration-300 focus:border-blue-500/50 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
												/>
											</div>
										</div>
									</div>

									{/* Description */}
									<div>
										<label className="block text-sm font-medium text-slate-300 mb-2">
											Description
										</label>

										<textarea
											rows="4"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
											placeholder="Add a note about this budget..."
											className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 outline-none resize-none transition-all duration-300 focus:border-blue-500/50 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
										/>
									</div>

									{/* Buttons */}
									<div className="flex flex-col sm:flex-row gap-3 pt-3">
										<Link
											to="/budgets"
											className="flex-1 h-12 rounded-xl border border-white/10 bg-white/3 text-slate-400 font-semibold flex items-center justify-center hover:text-white hover:bg-white/5 transition-all"
										>
											Cancel
										</Link>

										<button
											type="submit"
											className="group relative flex-1 h-12 rounded-xl overflow-hidden bg-linear-to-r from-blue-600 to-indigo-600 font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
										>
											<span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />

											<span className="relative flex items-center justify-center gap-2">
												<Plus size={18} />
												Create Budget
											</span>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default CreateBudget;
