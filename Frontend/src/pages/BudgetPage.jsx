import { Link } from "react-router-dom";

import {
    LayoutDashboard,
    Wallet,
    Receipt,
    Target,
    TrendingUp,
    Settings,
    LogOut,
    Plus,
    Search,
    Bell,
    ChevronRight,
} from "lucide-react";

import { getBudget } from "../services/BudgetService";
import ShowName from "../components/common/ShowName";
import ShowInitial from "../components/common/ShowInitial";

import { useState, useEffect } from "react";

const Budget = () => {
    const [budgets, setBudgets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBudgets = async () => {
            try {
                const data = await getBudget();

                console.log("Budget API response:", data);

                /*
                 * Depending on your backend response,
                 * data may be:
                 *
                 * 1. An array:
                 *    [{ id: 1, name: "...", amount: 500 }]
                 *
                 * 2. An object containing an array:
                 *    { budgets: [...] }
                 *
                 * 3. An object containing data:
                 *    { data: [...] }
                 */

                if (Array.isArray(data)) {
                    setBudgets(data);
                } else if (Array.isArray(data?.budgets)) {
                    setBudgets(data.budgets);
                } else if (Array.isArray(data?.data)) {
                    setBudgets(data.data);
                } else {
                    console.error("Unexpected budget response:", data);
                    setBudgets([]);
                }
            } catch (error) {
                console.error("Failed to fetch budgets:", error);
                setBudgets([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBudgets();
    }, []);

    // Calculate total budget from database values
    const totalBudget = budgets.reduce(
        (total, item) => total + Number(item.amount || 0),
        0
    );

    return (
        <div className="min-h-screen bg-[#070B14] text-white">

            {/* Background */}
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

            {/* Main Layout */}
            <div className="relative flex min-h-screen">

                {/* =====================================================
                    SIDEBAR
                ====================================================== */}

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

                        {/* Dashboard */}
                        <Link
                            to="/dashboard"
                            className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                        >
                            <LayoutDashboard
                                size={19}
                                className="group-hover:scale-110 transition-transform"
                            />

                            <span className="text-sm font-medium">
                                Dashboard
                            </span>
                        </Link>

                        {/* Transactions */}
                        <Link
                            to="/transactions"
                            className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                        >
                            <Receipt
                                size={19}
                                className="group-hover:scale-110 transition-transform"
                            />

                            <span className="text-sm font-medium">
                                Transactions
                            </span>
                        </Link>

                        {/* Budgets */}
                        <Link
                            to="/budgets"
                            className="group flex items-center gap-3 px-3 py-3 rounded-xl bg-blue-500/10 border border-blue-500/10 text-blue-400 transition-all duration-300"
                        >
                            <Target size={19} />

                            <span className="text-sm font-medium">
                                Budgets
                            </span>

                            <span className="ml-auto h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                        </Link>

                        {/* Analytics */}
                        <Link
                            to="/analytics"
                            className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                        >
                            <TrendingUp
                                size={19}
                                className="group-hover:scale-110 transition-transform"
                            />

                            <span className="text-sm font-medium">
                                Analytics
                            </span>
                        </Link>

                        <p className="px-3 mb-3 mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                            Account
                        </p>

                        {/* Settings */}
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

                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">

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

                {/* =====================================================
                    MAIN CONTENT
                ====================================================== */}

                <main className="w-full lg:ml-64">

                    {/* =================================================
                        TOP NAVBAR
                    ================================================= */}

                    <header className="sticky top-0 z-20 h-20 border-b border-white/10 bg-[#070B14]/80 backdrop-blur-xl">

                        <div className="h-full px-5 sm:px-8 flex items-center justify-between">

                            {/* Mobile Logo */}
                            <div className="flex items-center gap-3 lg:hidden">

                                <div className="h-9 w-9 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                                    <Wallet size={19} />
                                </div>

                                <span className="font-bold">
                                    Expense Tracker
                                </span>

                            </div>

                            {/* Search */}
                            <div className="hidden md:flex items-center w-72 h-10 rounded-xl bg-white/5 border border-white/10 px-3 gap-3">

                                <Search
                                    size={17}
                                    className="text-slate-500"
                                />

                                <input
                                    type="text"
                                    placeholder="Search budgets..."
                                    className="bg-transparent outline-none text-sm text-white placeholder:text-slate-600 w-full"
                                />

                                <span className="text-[10px] text-slate-600 border border-white/10 px-1.5 py-0.5 rounded">
                                    /
                                </span>

                            </div>

                            {/* Right */}
                            <div className="flex items-center gap-3 ml-auto">

                                <button className="relative h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">

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

                    {/* =================================================
                        BUDGET CONTENT
                    ================================================= */}

                    <div className="p-5 sm:p-8 max-w-[1600px] mx-auto">

                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

                            <div>

                                <div className="flex items-center gap-2 mb-2">

                                    <Target
                                        size={16}
                                        className="text-blue-400"
                                    />

                                    <span className="text-xs font-medium text-blue-400">
                                        Financial planning
                                    </span>

                                </div>

                                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                                    Budgets
                                </h1>

                                <p className="text-sm text-slate-500 mt-1">
                                    Set spending limits and keep your expenses under control.
                                </p>

                            </div>

                            {/* Create Budget */}
                            <Link
                                to="/budgets/new"
                                className="group inline-flex items-center justify-center gap-2 px-5 h-11 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 font-semibold text-sm shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
                            >

                                <Plus
                                    size={18}
                                    className="group-hover:rotate-90 transition-transform duration-300"
                                />

                                Create Budget

                            </Link>

                        </div>

                        {/* =================================================
                            SUMMARY CARDS
                        ================================================= */}

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

                            {/* Total Budget */}
                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-5">

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-xs text-slate-500">
                                            Total Budget
                                        </p>

                                        <h2 className="text-2xl font-bold mt-2">
                                            ${totalBudget.toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })}
                                        </h2>

                                    </div>

                                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                                        <Wallet size={20} />
                                    </div>

                                </div>

                            </div>

                            {/* Total Spent */}
                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-5">

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-xs text-slate-500">
                                            Total Spent
                                        </p>

                                        <h2 className="text-2xl font-bold mt-2">
                                            $0.00
                                        </h2>

                                    </div>

                                    <div className="h-10 w-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
                                        <Receipt size={20} />
                                    </div>

                                </div>

                            </div>

                            {/* Remaining */}
                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-5">

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-xs text-slate-500">
                                            Remaining
                                        </p>

                                        <h2 className="text-2xl font-bold mt-2">
                                            ${totalBudget.toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })}
                                        </h2>

                                    </div>

                                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                                        <TrendingUp size={20} />
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* =================================================
                            BUDGET LIST
                        ================================================= */}

                        <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden">

                            {/* Header */}
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

                            {/* Loading */}
                            {loading && (
                                <div className="p-10 text-center">

                                    <p className="text-sm text-slate-500">
                                        Loading budgets...
                                    </p>

                                </div>
                            )}

                            {/* Empty */}
                            {!loading && budgets.length === 0 && (
                                <div className="p-10 text-center">

                                    <Target
                                        size={35}
                                        className="mx-auto text-slate-600 mb-3"
                                    />

                                    <p className="text-sm text-slate-400">
                                        No budgets found.
                                    </p>

                                    <p className="text-xs text-slate-600 mt-1">
                                        Create a budget to see it here.
                                    </p>

                                </div>
                            )}

                            {/* Budget Items */}
                            {!loading && budgets.length > 0 && (
                                <div className="divide-y divide-white/5">

                                    {budgets.map((budget, index) => {

                                        const amount = Number(
                                            budget.amount || 0
                                        );

                                        return (
                                            <div
                                                key={budget.id || index}
                                                className="p-6 hover:bg-white/2.5 transition-colors"
                                            >

                                                <div className="flex items-center gap-4">

                                                    {/* Icon */}
                                                    <div className="h-11 w-11 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                                        <Wallet size={20} />
                                                    </div>

                                                    {/* Budget Info */}
                                                    <div className="flex-1 min-w-0">

                                                        <div className="flex items-center justify-between mb-2">

                                                            <div>

                                                                <p className="text-sm font-semibold">
                                                                    {budget.name}
                                                                </p>

                                                                <p className="text-[11px] text-slate-500 mt-1">
                                                                    {budget.category || "No category"}
                                                                </p>

                                                            </div>

                                                            <p className="text-sm font-semibold text-white">
                                                                ${amount.toLocaleString(undefined, {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2,
                                                                })}
                                                            </p>

                                                        </div>

                                                        {/* Amount Bar */}
                                                        <div className="h-2 rounded-full bg-white/5 overflow-hidden">

                                                            <div
                                                                className="h-full bg-blue-500 rounded-full"
                                                                style={{
                                                                    width: "100%",
                                                                }}
                                                            />

                                                        </div>

                                                        <div className="flex justify-between mt-2">

                                                            <span className="text-[10px] text-slate-600">
                                                                Budget limit
                                                            </span>

                                                            <span className="text-[10px] text-slate-500">
                                                                ${amount.toFixed(2)}
                                                            </span>

                                                        </div>

                                                    </div>

                                                    {/* Arrow */}
                                                    <ChevronRight
                                                        size={17}
                                                        className="text-slate-600"
                                                    />

                                                </div>

                                            </div>
                                        );
                                    })}

                                </div>
                            )}

                        </div>

                        {/* Bottom Create Budget */}
                        <div className="mt-6">

                            <Link
                                to="/budgets/new"
                                className="flex items-center justify-center gap-2 w-full h-12 rounded-xl border border-dashed border-white/10 text-sm text-slate-500 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/5 transition-all"
                            >

                                <Plus size={17} />

                                Create New Budget

                            </Link>

                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
};

export default Budget;