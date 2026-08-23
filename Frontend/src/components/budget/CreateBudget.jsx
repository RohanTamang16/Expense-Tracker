import {
    X,
    Target,
    Tag,
    Banknote,
    CalendarDays,
    FileText,
} from "lucide-react";
import { useState } from "react";

const CreateBudget = ({ onClose, onBudgetCreated }) => {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        amount: "",
        start_date: "",
        end_date: "",
        description: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

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

        if (
            !formData.name ||
            !formData.category ||
            !formData.amount ||
            !formData.start_date ||
            !formData.end_date
        ) {
            setError("Please fill all required fields");
            return;
        }

        if (formData.end_date < formData.start_date) {
            setError("End date cannot be before start date");
            return;
        }

        try {
            setLoading(true);

            // Later you can replace this with:
            //
            // const response = await createBudget(formData);
            //
            // const newBudget = response.data;

            const newBudget = {
                ...formData,
                id: Date.now(),
            };

            console.log("Budget created:", newBudget);

            if (onBudgetCreated) {
                onBudgetCreated(newBudget);
            }

            onClose();
        } catch (error) {
            console.error("Error creating budget:", error);

            setError(
                error.response?.data?.message ||
                "Failed to create budget"
            );
        } finally {
            setLoading(false);
        }
    };

    /*
     * Close only when the dark background is clicked.
     * Clicking the modal itself won't trigger this.
     */
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-md"
            onMouseDown={handleBackdropClick}
        >

            {/* Modal */}
            <div
                onMouseDown={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0D1320] shadow-2xl shadow-black/50"
            >

                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#0D1320]">

                    <div className="flex items-center gap-3">

                        <div className="relative">
                            <div className="absolute inset-0 rounded-xl bg-purple-500/20 blur-lg" />

                            <div className="relative h-10 w-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                                <Target size={20} />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white">
                                Create Budget
                            </h2>

                            <p className="text-xs text-slate-500 mt-1">
                                Set a spending limit
                            </p>
                        </div>

                    </div>

                    {/* Close */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="h-9 w-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-colors"
                    >
                        <X size={19} />
                    </button>

                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="p-6 space-y-5"
                >

                    {/* Error */}
                    {error && (
                        <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                            {error}
                        </div>
                    )}

                    {/* Budget Name */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Budget Name
                        </label>

                        <div className="relative group">

                            <Target
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-400 transition-colors"
                            />

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e.g. Monthly Food Budget"
                                className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 outline-none transition-all focus:border-purple-500/50 focus:bg-purple-500/5 focus:ring-4 focus:ring-purple-500/10"
                            />

                        </div>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Category
                        </label>

                        <div className="relative group">

                            <Tag
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-400 transition-colors pointer-events-none"
                            />

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none appearance-none cursor-pointer transition-all focus:border-purple-500/50 focus:bg-purple-500/5 focus:ring-4 focus:ring-purple-500/10"
                            >
                                <option
                                    value=""
                                    className="bg-[#0D1320]"
                                >
                                    Select category
                                </option>

                                <option
                                    value="Food"
                                    className="bg-[#0D1320]"
                                >
                                    Food
                                </option>

                                <option
                                    value="Shopping"
                                    className="bg-[#0D1320]"
                                >
                                    Shopping
                                </option>

                                <option
                                    value="Transportation"
                                    className="bg-[#0D1320]"
                                >
                                    Transportation
                                </option>

                                <option
                                    value="Housing"
                                    className="bg-[#0D1320]"
                                >
                                    Housing
                                </option>

                                <option
                                    value="Utilities"
                                    className="bg-[#0D1320]"
                                >
                                    Utilities
                                </option>

                                <option
                                    value="Entertainment"
                                    className="bg-[#0D1320]"
                                >
                                    Entertainment
                                </option>

                                <option
                                    value="Healthcare"
                                    className="bg-[#0D1320]"
                                >
                                    Healthcare
                                </option>

                                <option
                                    value="Other"
                                    className="bg-[#0D1320]"
                                >
                                    Other
                                </option>
                            </select>

                        </div>
                    </div>

                    {/* Amount */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Budget Amount
                        </label>

                        <div className="relative group">

                            <Banknote
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-400 transition-colors"
                            />

                            <input
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                placeholder="0.00"
                                min="0"
                                step="0.01"
                                className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 outline-none transition-all focus:border-purple-500/50 focus:bg-purple-500/5 focus:ring-4 focus:ring-purple-500/10"
                            />

                        </div>
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Start */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Start Date
                            </label>

                            <div className="relative">

                                <CalendarDays
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                                />

                                <input
                                    type="date"
                                    name="start_date"
                                    value={formData.start_date}
                                    onChange={handleChange}
                                    className="w-full h-12 pl-12 pr-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10"
                                />

                            </div>
                        </div>

                        {/* End */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                End Date
                            </label>

                            <div className="relative">

                                <CalendarDays
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
                                />

                                <input
                                    type="date"
                                    name="end_date"
                                    value={formData.end_date}
                                    onChange={handleChange}
                                    className="w-full h-12 pl-12 pr-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10"
                                />

                            </div>
                        </div>

                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Description
                        </label>

                        <div className="relative">

                            <FileText
                                size={18}
                                className="absolute left-4 top-4 text-slate-500"
                            />

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Add a note about this budget..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 outline-none resize-none transition-all focus:border-purple-500/50 focus:bg-purple-500/5 focus:ring-4 focus:ring-purple-500/10"
                            />

                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2">

                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 h-11 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 h-11 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-purple-600/20 hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Creating..." : "Create Budget"}
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateBudget;