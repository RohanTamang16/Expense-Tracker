import { Plus, Banknote, Tag, CalendarDays, FileText } from "lucide-react";

import { useState } from "react";
import axios from "axios";
const IncomeForm = () => {
	const [formData, setFormData] = useState({
		amount: "",
		income_source: "",
		income_date: "",
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

		if (!formData.amount || !formData.income_source || !formData.income_date) {
			setError("Please fill in all required fields");
			return;
		}

		const token = localStorage.getItem("token");

		if (!token) {
			setError("You must be logged in to add income");
			return;
		}

		try {
			const response = await axios.post(
				"http://localhost:8000/api/income",
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);
			console.log("Income form submitted", response.data);
			setSuccess("Income added successfully!");

			setFormData({
				amount: "",
				income_source: "",
				income_date: "",
				description: "",
			});
		} catch (error) {
			console.error(
				"Error submitting income form ",
				error.response?.data || error.message,
			);

			if (error.response) {
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
		<form className="space-y-5" onSubmit={handleSubmit}>
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

			{/* Amount */}
			<div>
				<label className="block text-sm font-medium text-slate-300 mb-2">
					Amount
				</label>

				<div className="relative group">
					<Banknote
						size={18}
						className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-400 transition-colors duration-300"
					/>

					<input
						type="number"
						name="amount"
						value={formData.amount}
						onChange={handleChange}
						placeholder="0.00"
						step="0.01"
						min="0"
						className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-emerald-500/50 focus:bg-emerald-500/5 focus:ring-4 focus:ring-emerald-500/10"
					/>
				</div>
			</div>

			{/* Source */}
			<div>
				<label className="block text-sm font-medium text-slate-300 mb-2">
					Income Source
				</label>

				<div className="relative group">
					<Tag
						size={18}
						className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-400 transition-colors duration-300"
					/>

					<select
						name="income_source"
						value={formData.income_source}
						onChange={handleChange}
						className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none appearance-none cursor-pointer transition-all duration-300 focus:border-emerald-500/50 focus:bg-emerald-500/5 focus:ring-4 focus:ring-emerald-500/10"
					>
						<option className="bg-[#101622]" value="">
							Select income source
						</option>

						<option className="bg-[#101622]" value="Salary">
							Salary
						</option>

						<option className="bg-[#101622]" value="Freelance">
							Freelance
						</option>

						<option className="bg-[#101622]" value="Business">
							Business
						</option>

						<option className="bg-[#101622]" value="Investment">
							Investment
						</option>

						<option className="bg-[#101622]" value="Gift">
							Gift
						</option>

						<option className="bg-[#101622]" value="Other">
							Other
						</option>
					</select>
				</div>
			</div>

			{/* Date */}
			<div>
				<label className="block text-sm font-medium text-slate-300 mb-2">
					Date
				</label>

				<div className="relative group">
					<CalendarDays
						size={18}
						className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-400 transition-colors duration-300"
					/>

					<input
						type="date"
						name="income_date"
						value={formData.income_date}
						onChange={handleChange}
						className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none transition-all duration-300 focus:border-emerald-500/50 focus:bg-emerald-500/5 focus:ring-4 focus:ring-emerald-500/10"
					/>
				</div>
			</div>

			{/* Description */}
			<div>
				<label className="block text-sm font-medium text-slate-300 mb-2">
					Description
				</label>

				<div className="relative group">
					<FileText
						size={18}
						className="absolute left-4 top-4 text-slate-500 group-focus-within:text-emerald-400 transition-colors duration-300"
					/>

					<textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
						rows="4"
						placeholder="Add a note about this income..."
						className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 outline-none resize-none transition-all duration-300 focus:border-emerald-500/50 focus:bg-emerald-500/5 focus:ring-4 focus:ring-emerald-500/10"
					/>
				</div>
			</div>

			{/* Button */}
			<button
				type="submit"
				className="group relative w-full h-12 rounded-xl overflow-hidden bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 font-semibold shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-emerald-500/30 active:translate-y-0"
			>
				<span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />

				<span className="relative flex items-center justify-center gap-2">
					<Plus size={18} />
					Add Income
				</span>
			</button>
		</form>
	);
};

export default IncomeForm;