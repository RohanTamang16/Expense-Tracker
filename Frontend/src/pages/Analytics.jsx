import { Link } from "react-router-dom";

import {
    LayoutDashboard,
    Wallet,
    Receipt,
    Target,
    TrendingUp,
    Settings,
    LogOut,
    Search,
    Bell,
    ArrowUpRight,
    ArrowDownRight,
    Calendar,
    DollarSign,
    PieChart,
    BarChart3,
    Activity,
} from "lucide-react";

import ShowName from "../components/common/ShowName";
import ShowInitial from "../components/common/ShowInitial";

const Analytics = () => {
    // Static data for now
    const monthlyData = [
        { month: "Jan", income: 3200, expense: 2100 },
        { month: "Feb", income: 3500, expense: 2300 },
        { month: "Mar", income: 3100, expense: 1900 },
        { month: "Apr", income: 3800, expense: 2500 },
        { month: "May", income: 4200, expense: 2800 },
        { month: "Jun", income: 4500, expense: 3100 },
    ];

    const categoryData = [
        {
            name: "Food",
            amount: 520,
            percentage: 28,
        },
        {
            name: "Transportation",
            amount: 320,
            percentage: 17,
        },
        {
            name: "Shopping",
            amount: 450,
            percentage: 24,
        },
        {
            name: "Entertainment",
            amount: 280,
            percentage: 15,
        },
        {
            name: "Bills",
            amount: 300,
            percentage: 16,
        },
    ];

    const maxValue = Math.max(
        ...monthlyData.map((item) =>
            Math.max(item.income, item.expense)
        )
    );

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
                            className="group flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                        >

                            <Target
                                size={19}
                                className="group-hover:scale-110 transition-transform"
                            />

                            <span className="text-sm font-medium">
                                Budgets
                            </span>

                        </Link>

                        {/* Analytics - ACTIVE */}

                        <Link
                            to="/analytics"
                            className="group flex items-center gap-3 px-3 py-3 rounded-xl bg-blue-500/10 border border-blue-500/10 text-blue-400 transition-all duration-300"
                        >

                            <TrendingUp size={19} />

                            <span className="text-sm font-medium">
                                Analytics
                            </span>

                            <span className="ml-auto h-2 w-2 rounded-full bg-blue-400 animate-pulse" />

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

                {/* =================================================
                    MAIN
                ================================================== */}

                <main className="w-full lg:ml-64">

                    {/* =================================================
                        TOP NAVBAR
                    ================================================== */}

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
                                    placeholder="Search analytics..."
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
                        ANALYTICS CONTENT
                    ================================================== */}

                    <div className="p-5 sm:p-8 max-w-[1600px] mx-auto">

                        {/* Page Header */}

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

                            <div>

                                <div className="flex items-center gap-2 mb-2">

                                    <TrendingUp
                                        size={16}
                                        className="text-blue-400"
                                    />

                                    <span className="text-xs font-medium text-blue-400">
                                        Financial insights
                                    </span>

                                </div>

                                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                                    Analytics
                                </h1>

                                <p className="text-sm text-slate-500 mt-1">
                                    Understand your spending habits and financial performance.
                                </p>

                            </div>

                            {/* Date */}

                            <button className="flex items-center gap-2 px-4 h-11 rounded-xl border border-white/10 bg-white/5 text-sm text-slate-300 hover:bg-white/10 transition-all">

                                <Calendar size={17} />

                                Last 6 months

                            </button>

                        </div>

                        {/* =================================================
                            SUMMARY CARDS
                        ================================================== */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

                            {/* Income */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-5">

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-xs text-slate-500">
                                            Total Income
                                        </p>

                                        <h2 className="text-2xl font-bold mt-2">
                                            $22,300
                                        </h2>

                                        <div className="flex items-center gap-1 mt-2 text-emerald-400">

                                            <ArrowUpRight size={14} />

                                            <span className="text-xs">
                                                12.5%
                                            </span>

                                            <span className="text-[10px] text-slate-600">
                                                vs last period
                                            </span>

                                        </div>

                                    </div>

                                    <div className="h-11 w-11 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">

                                        <DollarSign size={20} />

                                    </div>

                                </div>

                            </div>

                            {/* Expenses */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-5">

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-xs text-slate-500">
                                            Total Expenses
                                        </p>

                                        <h2 className="text-2xl font-bold mt-2">
                                            $14,700
                                        </h2>

                                        <div className="flex items-center gap-1 mt-2 text-red-400">

                                            <ArrowUpRight size={14} />

                                            <span className="text-xs">
                                                8.2%
                                            </span>

                                            <span className="text-[10px] text-slate-600">
                                                vs last period
                                            </span>

                                        </div>

                                    </div>

                                    <div className="h-11 w-11 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">

                                        <Receipt size={20} />

                                    </div>

                                </div>

                            </div>

                            {/* Savings */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-5">

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-xs text-slate-500">
                                            Total Savings
                                        </p>

                                        <h2 className="text-2xl font-bold mt-2">
                                            $7,600
                                        </h2>

                                        <div className="flex items-center gap-1 mt-2 text-emerald-400">

                                            <ArrowUpRight size={14} />

                                            <span className="text-xs">
                                                18.4%
                                            </span>

                                            <span className="text-[10px] text-slate-600">
                                                vs last period
                                            </span>

                                        </div>

                                    </div>

                                    <div className="h-11 w-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">

                                        <Wallet size={20} />

                                    </div>

                                </div>

                            </div>

                            {/* Saving Rate */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-5">

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-xs text-slate-500">
                                            Saving Rate
                                        </p>

                                        <h2 className="text-2xl font-bold mt-2">
                                            34.1%
                                        </h2>

                                        <div className="flex items-center gap-1 mt-2 text-emerald-400">

                                            <ArrowUpRight size={14} />

                                            <span className="text-xs">
                                                4.6%
                                            </span>

                                            <span className="text-[10px] text-slate-600">
                                                improvement
                                            </span>

                                        </div>

                                    </div>

                                    <div className="h-11 w-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">

                                        <Activity size={20} />

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* =================================================
                            CHARTS
                        ================================================== */}

                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">

                            {/* Income vs Expenses */}

                            <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-6">

                                <div className="flex items-center justify-between mb-8">

                                    <div>

                                        <h3 className="font-semibold">
                                            Income vs Expenses
                                        </h3>

                                        <p className="text-xs text-slate-500 mt-1">
                                            Monthly financial performance
                                        </p>

                                    </div>

                                    <BarChart3
                                        size={20}
                                        className="text-blue-400"
                                    />

                                </div>

                                {/* Chart */}

                                <div className="h-72 flex items-end gap-4 sm:gap-8 border-b border-white/10">

                                    {monthlyData.map((item) => {

                                        const incomeHeight =
                                            (item.income / maxValue) * 100;

                                        const expenseHeight =
                                            (item.expense / maxValue) * 100;

                                        return (
                                            <div
                                                key={item.month}
                                                className="flex-1 h-full flex items-end justify-center gap-1 sm:gap-2"
                                            >

                                                {/* Income */}

                                                <div
                                                    className="w-1/2 max-w-8 bg-emerald-500/70 rounded-t-md hover:bg-emerald-400 transition-all"
                                                    style={{
                                                        height: `${incomeHeight}%`,
                                                    }}
                                                    title={`Income: $${item.income}`}
                                                />

                                                {/* Expense */}

                                                <div
                                                    className="w-1/2 max-w-8 bg-red-500/70 rounded-t-md hover:bg-red-400 transition-all"
                                                    style={{
                                                        height: `${expenseHeight}%`,
                                                    }}
                                                    title={`Expense: $${item.expense}`}
                                                />

                                            </div>
                                        );
                                    })}

                                </div>

                                {/* Months */}

                                <div className="flex gap-4 sm:gap-8 mt-3">

                                    {monthlyData.map((item) => (
                                        <div
                                            key={item.month}
                                            className="flex-1 text-center text-[10px] text-slate-600"
                                        >
                                            {item.month}
                                        </div>
                                    ))}

                                </div>

                                {/* Legend */}

                                <div className="flex items-center gap-5 mt-6">

                                    <div className="flex items-center gap-2">

                                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

                                        <span className="text-xs text-slate-500">
                                            Income
                                        </span>

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />

                                        <span className="text-xs text-slate-500">
                                            Expenses
                                        </span>

                                    </div>

                                </div>

                            </div>

                            {/* Spending Categories */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-6">

                                <div className="flex items-center justify-between mb-6">

                                    <div>

                                        <h3 className="font-semibold">
                                            Spending by Category
                                        </h3>

                                        <p className="text-xs text-slate-500 mt-1">
                                            Where your money goes
                                        </p>

                                    </div>

                                    <PieChart
                                        size={20}
                                        className="text-purple-400"
                                    />

                                </div>

                                <div className="space-y-5">

                                    {categoryData.map((category) => (

                                        <div key={category.name}>

                                            <div className="flex items-center justify-between mb-2">

                                                <span className="text-xs text-slate-400">
                                                    {category.name}
                                                </span>

                                                <span className="text-xs font-medium">
                                                    ${category.amount}
                                                </span>

                                            </div>

                                            <div className="h-2 rounded-full bg-white/5 overflow-hidden">

                                                <div
                                                    className="h-full rounded-full bg-blue-500"
                                                    style={{
                                                        width: `${category.percentage}%`,
                                                    }}
                                                />

                                            </div>

                                            <div className="flex justify-end mt-1">

                                                <span className="text-[10px] text-slate-600">
                                                    {category.percentage}%
                                                </span>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                        {/* =================================================
                            BOTTOM SECTION
                        ================================================== */}

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                            {/* Financial Overview */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-6">

                                <div className="flex items-center justify-between mb-6">

                                    <div>

                                        <h3 className="font-semibold">
                                            Financial Overview
                                        </h3>

                                        <p className="text-xs text-slate-500 mt-1">
                                            Your financial health
                                        </p>

                                    </div>

                                    <Activity
                                        size={20}
                                        className="text-cyan-400"
                                    />

                                </div>

                                <div className="space-y-5">

                                    {/* Income */}

                                    <div>

                                        <div className="flex justify-between mb-2">

                                            <span className="text-xs text-slate-500">
                                                Income
                                            </span>

                                            <span className="text-xs font-medium text-emerald-400">
                                                $22,300
                                            </span>

                                        </div>

                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">

                                            <div
                                                className="h-full bg-emerald-500 rounded-full"
                                                style={{
                                                    width: "100%",
                                                }}
                                            />

                                        </div>

                                    </div>

                                    {/* Expenses */}

                                    <div>

                                        <div className="flex justify-between mb-2">

                                            <span className="text-xs text-slate-500">
                                                Expenses
                                            </span>

                                            <span className="text-xs font-medium text-red-400">
                                                $14,700
                                            </span>

                                        </div>

                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">

                                            <div
                                                className="h-full bg-red-500 rounded-full"
                                                style={{
                                                    width: "66%",
                                                }}
                                            />

                                        </div>

                                    </div>

                                    {/* Savings */}

                                    <div>

                                        <div className="flex justify-between mb-2">

                                            <span className="text-xs text-slate-500">
                                                Savings
                                            </span>

                                            <span className="text-xs font-medium text-blue-400">
                                                $7,600
                                            </span>

                                        </div>

                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">

                                            <div
                                                className="h-full bg-blue-500 rounded-full"
                                                style={{
                                                    width: "34%",
                                                }}
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* Insights */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-6">

                                <div className="flex items-center justify-between mb-6">

                                    <div>

                                        <h3 className="font-semibold">
                                            Financial Insights
                                        </h3>

                                        <p className="text-xs text-slate-500 mt-1">
                                            Highlights from your activity
                                        </p>

                                    </div>

                                    <TrendingUp
                                        size={20}
                                        className="text-blue-400"
                                    />

                                </div>

                                <div className="space-y-4">

                                    {/* Insight 1 */}

                                    <div className="flex gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">

                                        <div className="h-9 w-9 shrink-0 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">

                                            <ArrowUpRight size={17} />

                                        </div>

                                        <div>

                                            <p className="text-sm font-medium">
                                                Your savings are improving
                                            </p>

                                            <p className="text-xs text-slate-500 mt-1">
                                                You saved 18.4% more compared to the previous period.
                                            </p>

                                        </div>

                                    </div>

                                    {/* Insight 2 */}

                                    <div className="flex gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">

                                        <div className="h-9 w-9 shrink-0 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center">

                                            <ArrowDownRight size={17} />

                                        </div>

                                        <div>

                                            <p className="text-sm font-medium">
                                                Shopping is increasing
                                            </p>

                                            <p className="text-xs text-slate-500 mt-1">
                                                Shopping represents 24% of your total spending.
                                            </p>

                                        </div>

                                    </div>

                                    {/* Insight 3 */}

                                    <div className="flex gap-4 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">

                                        <div className="h-9 w-9 shrink-0 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">

                                            <Target size={17} />

                                        </div>

                                        <div>

                                            <p className="text-sm font-medium">
                                                Keep your budget on track
                                            </p>

                                            <p className="text-xs text-slate-500 mt-1">
                                                Your current spending is within your planned limits.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
};

export default Analytics;