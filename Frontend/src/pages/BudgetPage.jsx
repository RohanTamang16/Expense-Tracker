import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Wallet,
    LayoutDashboard,
    Receipt,
    Target,
    TrendingUp,
    Settings,
    LogOut,
    Plus,
    Utensils,
    Car,
    Zap,
    Home,
    ShoppingBag,
    X,
    PiggyBank,
    DollarSign,
    CalendarDays,
    CircleDollarSign,
} from "lucide-react";

import ShowName from "../components/common/ShowName";
import ShowInitial from "../components/common/ShowInitial";

const BudgetPage = () => {
    // =========================
    // Modal state
    // =========================
    const [showModal, setShowModal] = useState(false);

    // =========================
    // Budget form state
    // =========================
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        amount: "",
        start_date: "",
        end_date: "",
    });

    // =========================
    // Budget data
    // =========================
    const [budgets, setBudgets] = useState([
        {
            id: 1,
            name: "Food & Dining",
            category: "Food",
            spent: 420,
            limit: 600,
            icon: Utensils,
            color: "orange",
        },
        {
            id: 2,
            name: "Transportation",
            category: "Transportation",
            spent: 180,
            limit: 400,
            icon: Car,
            color: "blue",
        },
        {
            id: 3,
            name: "Entertainment",
            category: "Entertainment",
            spent: 120,
            limit: 300,
            icon: Zap,
            color: "purple",
        },
        {
            id: 4,
            name: "Housing",
            category: "Housing",
            spent: 850,
            limit: 1200,
            icon: Home,
            color: "pink",
        },
    ]);

    // =========================
    // Form change
    // =========================
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    // =========================
    // Create budget
    // =========================
    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.category ||
            !formData.amount ||
            !formData.start_date ||
            !formData.end_date
        ) {
            alert("Please fill all the fields.");
            return;
        }

        const newBudget = {
            id: Date.now(),
            name: formData.name,
            category: formData.category,
            spent: 0,
            limit: Number(formData.amount),
            icon: getCategoryIcon(formData.category),
            color: getCategoryColor(formData.category),
        };

        setBudgets((previous) => [...previous, newBudget]);

        // Reset form
        setFormData({
            name: "",
            category: "",
            amount: "",
            start_date: "",
            end_date: "",
        });

        // Close modal
        setShowModal(false);
    };

    // =========================
    // Category icon
    // =========================
    const getCategoryIcon = (category) => {
        switch (category) {
            case "Food":
                return Utensils;

            case "Transportation":
                return Car;

            case "Entertainment":
                return Zap;

            case "Housing":
                return Home;

            case "Shopping":
                return ShoppingBag;

            default:
                return Target;
        }
    };

    // =========================
    // Category color
    // =========================
    const getCategoryColor = (category) => {
        switch (category) {
            case "Food":
                return "orange";

            case "Transportation":
                return "blue";

            case "Entertainment":
                return "purple";

            case "Housing":
                return "pink";

            case "Shopping":
                return "emerald";

            default:
                return "blue";
        }
    };

    // =========================
    // Calculate totals
    // =========================
    const totalBudget = budgets.reduce(
        (total, budget) => total + budget.limit,
        0
    );

    const totalSpent = budgets.reduce(
        (total, budget) => total + budget.spent,
        0
    );

    const totalRemaining = totalBudget - totalSpent;

    const overallPercentage =
        totalBudget > 0
            ? Math.round((totalSpent / totalBudget) * 100)
            : 0;

    // =========================
    // Close modal
    // =========================
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="min-h-screen bg-[#070B14] text-white">

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div className="fixed inset-0 pointer-events-none overflow-hidden">

                <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

                <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

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


            {/* =====================================================
                MAIN LAYOUT
            ====================================================== */}

            <div className="relative flex min-h-screen">

                {/* =================================================
                    SIDEBAR
                ================================================== */}

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

                            <h1 className="font-bold text-lg tracking-tight">
                                Expense
                            </h1>

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
                            <LayoutDashboard size={19} />

                            <span className="text-sm font-medium">
                                Dashboard
                            </span>
                        </Link>


                        <Link
                            to="/transactions"
                            className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                        >
                            <Receipt size={19} />

                            <span className="text-sm font-medium">
                                Transactions
                            </span>
                        </Link>


                        {/* Active Budget */}

                        <Link
                            to="/budgets"
                            className="group flex items-center gap-3 px-3 py-3 rounded-xl bg-blue-500/10 border border-blue-500/10 text-blue-400"
                        >
                            <Target size={19} />

                            <span className="text-sm font-medium">
                                Budgets
                            </span>

                            <span className="ml-auto h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                        </Link>


                        <Link
                            to="/analytics"
                            className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                        >
                            <TrendingUp size={19} />

                            <span className="text-sm font-medium">
                                Analytics
                            </span>
                        </Link>


                        <p className="px-3 mb-3 mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                            Account
                        </p>


                        <Link
                            to="/profile"
                            className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                        >
                            <Settings size={19} />

                            <span className="text-sm font-medium">
                                Settings
                            </span>
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


                {/* =================================================
                    MAIN CONTENT
                ================================================== */}

                <main className="w-full lg:ml-64">

                    {/* Header */}

                    <header className="sticky top-0 z-20 h-20 border-b border-white/10 bg-[#070B14]/80 backdrop-blur-xl">

                        <div className="h-full px-5 sm:px-8 flex items-center justify-between">

                            <div>

                                <p className="text-xs text-blue-400 font-medium">
                                    Financial planning
                                </p>

                                <h1 className="text-xl font-bold">
                                    Budgets
                                </h1>

                            </div>


                            <button
                                onClick={() => setShowModal(true)}
                                className="flex items-center gap-2 px-4 h-10 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 font-semibold text-sm shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 transition-all"
                            >
                                <Plus size={18} />

                                Create Budget
                            </button>

                        </div>

                    </header>


                    {/* =================================================
                        BUDGET CONTENT
                    ================================================== */}

                    <div className="p-5 sm:p-8 max-w-[1600px] mx-auto">

                        {/* Heading */}

                        <div className="mb-8">

                            <h2 className="text-2xl sm:text-3xl font-bold">
                                Monthly Budgets
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                                Set spending limits and keep control of your money.
                            </p>

                        </div>


                        {/* =================================================
                            SUMMARY CARDS
                        ================================================== */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

                            {/* Total Budget */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">

                                <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">

                                    <Target size={20} />

                                </div>

                                <p className="text-xs text-slate-500">
                                    Total Budget
                                </p>

                                <h2 className="text-2xl font-bold mt-1">
                                    ${totalBudget.toFixed(2)}
                                </h2>

                            </div>


                            {/* Total Spent */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">

                                <div className="h-10 w-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4">

                                    <CircleDollarSign size={20} />

                                </div>

                                <p className="text-xs text-slate-500">
                                    Total Spent
                                </p>

                                <h2 className="text-2xl font-bold mt-1">
                                    ${totalSpent.toFixed(2)}
                                </h2>

                            </div>


                            {/* Remaining */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">

                                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">

                                    <PiggyBank size={20} />

                                </div>

                                <p className="text-xs text-slate-500">
                                    Remaining
                                </p>

                                <h2 className="text-2xl font-bold mt-1">
                                    ${totalRemaining.toFixed(2)}
                                </h2>

                            </div>


                            {/* Overall Usage */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">

                                <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">

                                    <TrendingUp size={20} />

                                </div>

                                <p className="text-xs text-slate-500">
                                    Budget Used
                                </p>

                                <h2 className="text-2xl font-bold mt-1">
                                    {overallPercentage}%
                                </h2>

                            </div>

                        </div>


                        {/* =================================================
                            BUDGET LIST
                        ================================================== */}

                        <div className="rounded-2xl border border-white/10 bg-white/[0.035] overflow-hidden">

                            <div className="flex items-center justify-between p-6 border-b border-white/10">

                                <div>

                                    <h3 className="font-semibold">
                                        Your Budgets
                                    </h3>

                                    <p className="text-xs text-slate-500 mt-1">
                                        Monitor your spending limits
                                    </p>

                                </div>

                                <span className="text-xs text-slate-500">
                                    {budgets.length} budgets
                                </span>

                            </div>


                            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">

                                {budgets.map((budget) => {

                                    const Icon = budget.icon;

                                    const percentage =
                                        budget.limit > 0
                                            ? Math.round(
                                                (budget.spent / budget.limit) * 100
                                            )
                                            : 0;

                                    const remaining =
                                        budget.limit - budget.spent;

                                    return (

                                        <div
                                            key={budget.id}
                                            className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 hover:border-blue-500/20 transition-all"
                                        >

                                            {/* Budget header */}

                                            <div className="flex items-center gap-4 mb-5">

                                                <div
                                                    className={`h-11 w-11 rounded-xl bg-${budget.color}-500/10 text-${budget.color}-400 flex items-center justify-center`}
                                                >
                                                    <Icon size={20} />
                                                </div>

                                                <div className="flex-1">

                                                    <h4 className="font-semibold">
                                                        {budget.name}
                                                    </h4>

                                                    <p className="text-xs text-slate-500 mt-1">
                                                        {budget.category}
                                                    </p>

                                                </div>

                                                <button className="text-slate-600 hover:text-white">
                                                    •••
                                                </button>

                                            </div>


                                            {/* Amount */}

                                            <div className="flex items-end justify-between mb-3">

                                                <div>

                                                    <p className="text-xs text-slate-500">
                                                        Spent
                                                    </p>

                                                    <p className="text-xl font-bold">
                                                        ${budget.spent.toFixed(2)}
                                                    </p>

                                                </div>

                                                <div className="text-right">

                                                    <p className="text-xs text-slate-500">
                                                        Limit
                                                    </p>

                                                    <p className="text-sm font-semibold">
                                                        ${budget.limit.toFixed(2)}
                                                    </p>

                                                </div>

                                            </div>


                                            {/* Progress */}

                                            <div className="h-2 rounded-full bg-white/5 overflow-hidden">

                                                <div
                                                    className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full transition-all"
                                                    style={{
                                                        width: `${Math.min(
                                                            percentage,
                                                            100
                                                        )}%`,
                                                    }}
                                                />

                                            </div>


                                            {/* Footer */}

                                            <div className="flex items-center justify-between mt-3">

                                                <span className="text-[11px] text-slate-500">
                                                    {percentage}% used
                                                </span>

                                                <span
                                                    className={`text-[11px] ${remaining >= 0
                                                            ? "text-emerald-400"
                                                            : "text-red-400"
                                                        }`}
                                                >
                                                    ${Math.abs(remaining).toFixed(2)}{" "}
                                                    {remaining >= 0
                                                        ? "remaining"
                                                        : "over budget"}
                                                </span>

                                            </div>

                                        </div>

                                    );

                                })}

                            </div>

                        </div>


                        {/* =================================================
                            CREATE BUDGET BUTTON
                        ================================================== */}

                        <button
                            onClick={() => setShowModal(true)}
                            className="mt-6 flex items-center justify-center gap-2 w-full h-12 rounded-xl border border-dashed border-white/10 text-sm text-slate-500 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/5 transition-all"
                        >

                            <Plus size={17} />

                            Create New Budget

                        </button>

                    </div>

                </main>

            </div>


            {/* =========================================================
                MODAL
            ========================================================== */}

            {showModal && (

                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                    onMouseDown={(e) => {

                        if (e.target === e.currentTarget) {
                            closeModal();
                        }

                    }}
                >

                    {/* Modal */}

                    <div
                        className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0D1320] shadow-2xl shadow-black/50"
                        onMouseDown={(e) => e.stopPropagation()}
                    >

                        {/* Modal header */}

                        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">

                            <div>

                                <h2 className="text-lg font-bold">
                                    Create New Budget
                                </h2>

                                <p className="text-xs text-slate-500 mt-1">
                                    Set a spending limit for your category.
                                </p>

                            </div>


                            <button
                                onClick={closeModal}
                                className="h-9 w-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/5 transition-colors"
                            >
                                <X size={19} />
                            </button>

                        </div>


                        {/* Form */}

                        <form
                            onSubmit={handleSubmit}
                            className="p-6 space-y-5"
                        >

                            {/* Budget name */}

                            <div>

                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Budget Name
                                </label>

                                <div className="relative">

                                    <Target
                                        size={17}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                    />

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="e.g. Monthly Food Budget"
                                        className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                                    />

                                </div>

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
                                    className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-blue-500/50"
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
                                        value="Transportation"
                                        className="bg-[#0D1320]"
                                    >
                                        Transportation
                                    </option>

                                    <option
                                        value="Entertainment"
                                        className="bg-[#0D1320]"
                                    >
                                        Entertainment
                                    </option>

                                    <option
                                        value="Housing"
                                        className="bg-[#0D1320]"
                                    >
                                        Housing
                                    </option>

                                    <option
                                        value="Shopping"
                                        className="bg-[#0D1320]"
                                    >
                                        Shopping
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


                            {/* Amount */}

                            <div>

                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Budget Amount
                                </label>

                                <div className="relative">

                                    <DollarSign
                                        size={17}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                    />

                                    <input
                                        type="number"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        placeholder="0.00"
                                        min="0"
                                        step="0.01"
                                        className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
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
                                            size={17}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                        />

                                        <input
                                            type="date"
                                            name="start_date"
                                            value={formData.start_date}
                                            onChange={handleChange}
                                            className="w-full h-12 pl-11 pr-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-blue-500/50"
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
                                            size={17}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                        />

                                        <input
                                            type="date"
                                            name="end_date"
                                            value={formData.end_date}
                                            onChange={handleChange}
                                            className="w-full h-12 pl-11 pr-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-blue-500/50"
                                        />

                                    </div>

                                </div>

                            </div>


                            {/* Buttons */}

                            <div className="flex gap-3 pt-2">

                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="flex-1 h-11 rounded-xl border border-white/10 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                                >
                                    Cancel
                                </button>


                                <button
                                    type="submit"
                                    className="flex-1 h-11 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-sm font-semibold hover:shadow-lg hover:shadow-blue-600/20 transition-all"
                                >
                                    Create Budget
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}

        </div>
    );
};

export default BudgetPage;