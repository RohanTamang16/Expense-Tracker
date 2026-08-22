import { Link } from "react-router-dom";

import {
  LayoutDashboard,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Plus,
  MoreHorizontal,
  ShoppingBag,
  Coffee,
  Car,
  Home,
  Utensils,
  CircleDollarSign,
  Bell,
  Search,
  Settings,
  LogOut,
  ChevronRight,
  Sparkles,
  PiggyBank,
  Receipt,
  CalendarDays,
  Target,
  Zap,
} from "lucide-react";
import ShowName from "../components/common/ShowName";
import ShowInitial from "../components/common/ShowInitial";

const Dashboard = () => {

  const name = JSON.parse(localStorage.getItem('user'))
  const transactions = [
    {
      name: "Grocery Shopping",
      category: "Food & Dining",
      date: "Today, 10:42 AM",
      amount: "-$84.50",
      icon: ShoppingBag,
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
    },
    {
      name: "Monthly Salary",
      category: "Income",
      date: "Today, 09:00 AM",
      amount: "+$4,500.00",
      icon: CircleDollarSign,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
    },
    {
      name: "Coffee Shop",
      category: "Food & Dining",
      date: "Yesterday, 04:32 PM",
      amount: "-$12.80",
      icon: Coffee,
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
    },
    {
      name: "Uber Ride",
      category: "Transportation",
      date: "Yesterday, 08:15 AM",
      amount: "-$24.20",
      icon: Car,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
    },
    {
      name: "Apartment Rent",
      category: "Housing",
      date: "Aug 18, 2026",
      amount: "-$1,200.00",
      icon: Home,
      iconBg: "bg-pink-500/10",
      iconColor: "text-pink-400",
    },
  ];

  const budgets = [
    {
      name: "Food & Dining",
      spent: "$420",
      limit: "$600",
      percentage: 70,
      icon: Utensils,
      color: "bg-orange-500",
    },
    {
      name: "Transportation",
      spent: "$180",
      limit: "$400",
      percentage: 45,
      icon: Car,
      color: "bg-blue-500",
    },
    {
      name: "Entertainment",
      spent: "$120",
      limit: "$300",
      percentage: 40,
      icon: Zap,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070B14] text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

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

      {/* =====================================================
          MAIN LAYOUT
      ====================================================== */}

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

            <Link
              to="/dashboard"
              className="group flex items-center gap-3 px-3 py-3 rounded-xl bg-blue-500/10 border border-blue-500/10 text-blue-400 transition-all duration-300"
            >
              <LayoutDashboard size={19} />

              <span className="text-sm font-medium">
                Dashboard
              </span>

              <span className="ml-auto h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            </Link>

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

          {/* Bottom User */}

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

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <main className="w-full lg:ml-64">
          {/* =====================================================
              TOP NAVBAR
          ====================================================== */}

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

              <div className="hidden md:flex items-center w-72 h-10 rounded-xl bg-white/4 border border-white/10 px-3 gap-3">
                <Search
                  size={17}
                  className="text-slate-500"
                />

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

          {/* =====================================================
              DASHBOARD CONTENT
          ====================================================== */}

          <div className="p-5 sm:p-8 max-w-[1600px] mx-auto">
            {/* =====================================================
                WELCOME
            ====================================================== */}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles
                    size={16}
                    className="text-blue-400"
                  />

                  <span className="text-xs font-medium text-blue-400">
                    Your financial overview
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Good morning, {name?.name || 'GUEST'} 👋
                </h1>

                <p className="text-sm text-slate-500 mt-1">
                  Here's what's happening with your money today.
                </p>
              </div>

              <Link
                to="/transactions/new"
                className="group inline-flex items-center justify-center gap-2 px-5 h-11 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 font-semibold text-sm shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Plus
                  size={18}
                  className="group-hover:rotate-90 transition-transform duration-300"
                />

                Add Transaction
              </Link>
            </div>

            {/* =====================================================
                STAT CARDS
            ====================================================== */}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
              {/* Balance */}

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 transition-all" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <Wallet size={20} />
                    </div>

                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg">
                      <TrendingUp size={12} />
                      12.5%
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-1">
                    Total Balance
                  </p>

                  <h2 className="text-2xl font-bold">
                    $12,840.50
                  </h2>

                  <p className="text-[11px] text-slate-600 mt-2">
                    Compared to last month
                  </p>
                </div>
              </div>

              {/* Income */}

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 transition-all" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <ArrowDownRight size={20} />
                    </div>

                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg">
                      +8.2%
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-1">
                    Total Income
                  </p>

                  <h2 className="text-2xl font-bold">
                    $7,250.00
                  </h2>

                  <p className="text-[11px] text-slate-600 mt-2">
                    This month
                  </p>
                </div>
              </div>

              {/* Expenses */}

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl hover:border-red-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-500/10 blur-2xl group-hover:bg-red-500/20 transition-all" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-10 w-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
                      <ArrowUpRight size={20} />
                    </div>

                    <span className="flex items-center gap-1 text-[11px] text-red-400 bg-red-500/10 px-2 py-1 rounded-lg">
                      +4.8%
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-1">
                    Total Expenses
                  </p>

                  <h2 className="text-2xl font-bold">
                    $2,480.50
                  </h2>

                  <p className="text-[11px] text-slate-600 mt-2">
                    This month
                  </p>
                </div>
              </div>

              {/* Savings */}

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl hover:border-purple-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/10 blur-2xl group-hover:bg-purple-500/20 transition-all" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                      <PiggyBank size={20} />
                    </div>

                    <span className="text-[11px] text-purple-400 bg-purple-500/10 px-2 py-1 rounded-lg">
                      68%
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-1">
                    Savings Rate
                  </p>

                  <h2 className="text-2xl font-bold">
                    $4,769.50
                  </h2>

                  <p className="text-[11px] text-slate-600 mt-2">
                    Saved this month
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                MAIN GRID
            ====================================================== */}

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* =====================================================
                  SPENDING OVERVIEW
              ====================================================== */}

              <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden">
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                  <div>
                    <h3 className="font-semibold">
                      Spending Overview
                    </h3>

                    <p className="text-xs text-slate-500 mt-1">
                      Your income and expenses over the month
                    </p>
                  </div>

                  <button className="flex items-center gap-2 text-xs text-slate-400 border border-white/10 rounded-lg px-3 py-2 hover:bg-white/5 transition-colors">
                    <CalendarDays size={14} />
                    This month
                  </button>
                </div>

                <div className="p-6">
                  {/* Chart */}

                  <div className="h-64 flex items-end gap-3 sm:gap-5">
                    {[
                      38,
                      55,
                      45,
                      70,
                      52,
                      78,
                      62,
                      84,
                      58,
                      72,
                      65,
                      92,
                    ].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 h-full flex flex-col justify-end group"
                      >
                        <div
                          className="relative w-full rounded-t-lg bg-linear-to-t from-blue-600/70 to-indigo-400/40 group-hover:from-blue-500 group-hover:to-indigo-400 transition-all duration-500"
                          style={{
                            height: `${height}%`,
                          }}
                        >
                          <div className="absolute inset-x-0 -top-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <span className="text-[9px] text-slate-600 text-center mt-3">
                          {[
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                          ][index]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Legend */}

                  <div className="flex items-center gap-6 mt-6 pt-5 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-500" />

                      <span className="text-xs text-slate-500">
                        Income
                      </span>

                      <span className="text-xs font-semibold">
                        $7,250
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-purple-500" />

                      <span className="text-xs text-slate-500">
                        Expenses
                      </span>

                      <span className="text-xs font-semibold">
                        $2,480
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* =====================================================
                  FINANCIAL HEALTH
              ====================================================== */}

              <div className="rounded-2xl border border-white/10 bg-linear-to-br from-blue-600/10 via-purple-600/5 to-transparent backdrop-blur-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">
                      Financial Health
                    </p>

                    <h3 className="text-xl font-bold mt-1">
                      Excellent
                    </h3>
                  </div>

                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Sparkles size={19} />
                  </div>
                </div>

                {/* Circular score */}

                <div className="flex justify-center py-8">
                  <div className="relative h-40 w-40 rounded-full border-12 border-blue-500/10 flex items-center justify-center">
                    <div className="absolute -inset-3 rounded-full border-12 border-transparent border-t-blue-500 border-r-indigo-500 rotate-45" />

                    <div className="text-center">
                      <p className="text-4xl font-bold">
                        86
                      </p>

                      <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                        Score
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-slate-500">
                        Saving
                      </span>

                      <span className="text-emerald-400">
                        Excellent
                      </span>
                    </div>

                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[86%] bg-linear-to-r from-blue-500 to-emerald-400 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-slate-500">
                        Spending
                      </span>

                      <span className="text-blue-400">
                        Healthy
                      </span>
                    </div>

                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[72%] bg-linear-to-r from-indigo-500 to-blue-400 rounded-full" />
                    </div>
                  </div>
                </div>

                <Link
                  to="/analytics"
                  className="flex items-center justify-between mt-6 pt-5 border-t border-white/10 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View detailed insights

                  <ChevronRight size={15} />
                </Link>
              </div>
            </div>

            {/* =====================================================
                BOTTOM GRID
            ====================================================== */}

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
              {/* =====================================================
                  RECENT TRANSACTIONS
              ====================================================== */}

              <div className="xl:col-span-2 rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div>
                    <h3 className="font-semibold">
                      Recent Transactions
                    </h3>

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
                  {transactions.map((transaction, index) => {
                    const Icon = transaction.icon;

                    return (
                      <div
                        key={index}
                        className="group flex items-center justify-between px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/2.5 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`h-11 w-11 rounded-xl ${transaction.iconBg} ${transaction.iconColor} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                          >
                            <Icon size={19} />
                          </div>

                          <div>
                            <p className="text-sm font-medium">
                              {transaction.name}
                            </p>

                            <p className="text-[11px] text-slate-600 mt-1">
                              {transaction.category} ·{" "}
                              {transaction.date}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span
                            className={`text-sm font-semibold ${
                              transaction.amount.startsWith("+")
                                ? "text-emerald-400"
                                : "text-white"
                            }`}
                          >
                            {transaction.amount}
                          </span>

                          <button className="text-slate-600 hover:text-white transition-colors">
                            <MoreHorizontal size={17} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* =====================================================
                  BUDGETS
              ====================================================== */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div>
                    <h3 className="font-semibold">
                      Monthly Budgets
                    </h3>

                    <p className="text-xs text-slate-500 mt-1">
                      Track your spending limits
                    </p>
                  </div>

                  <Link
                    to="/budgets"
                    className="text-xs text-blue-400 hover:text-blue-300"
                  >
                    Manage
                  </Link>
                </div>

                <div className="p-6 space-y-6">
                  {budgets.map((budget, index) => {
                    const Icon = budget.icon;

                    return (
                      <div key={index}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400">
                            <Icon size={17} />
                          </div>

                          <div className="flex-1">
                            <div className="flex justify-between">
                              <span className="text-xs font-medium">
                                {budget.name}
                              </span>

                              <span className="text-[11px] text-slate-500">
                                {budget.spent} / {budget.limit}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className={`h-full ${budget.color} rounded-full transition-all duration-1000`}
                            style={{
                              width: `${budget.percentage}%`,
                            }}
                          />
                        </div>

                        <p className="text-[10px] text-slate-600 mt-2 text-right">
                          {budget.percentage}% used
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="px-6 pb-6">
                  <Link
                    to="/budgets/new"
                    className="flex items-center justify-center gap-2 w-full h-10 rounded-xl border border-dashed border-white/10 text-xs text-slate-500 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/5 transition-all"
                  >
                    <Plus size={15} />
                    Create New Budget
                  </Link>
                </div>
              </div>
            </div>

            {/* =====================================================
                QUICK ACTIONS
            ====================================================== */}

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/transactions/new"
                className="group rounded-2xl border border-white/10 bg-white/3 p-5 hover:bg-blue-500/5 hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Plus size={19} />
                </div>

                <p className="text-sm font-semibold">
                  Add Expense
                </p>

                <p className="text-[11px] text-slate-600 mt-1">
                  Record a new transaction
                </p>
              </Link>

              <Link
                to="/income/new"
                className="group rounded-2xl border border-white/10 bg-white/3 p-5 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ArrowDownRight size={19} />
                </div>

                <p className="text-sm font-semibold">
                  Add Income
                </p>

                <p className="text-[11px] text-slate-600 mt-1">
                  Record your earnings
                </p>
              </Link>

              <Link
                to="/budgets/new"
                className="group rounded-2xl border border-white/10 bg-white/3 p-5 hover:bg-purple-500/5 hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target size={19} />
                </div>

                <p className="text-sm font-semibold">
                  Create Budget
                </p>

                <p className="text-[11px] text-slate-600 mt-1">
                  Set a spending limit
                </p>
              </Link>

              <Link
                to="/analytics"
                className="group rounded-2xl border border-white/10 bg-white/3 p-5 hover:bg-orange-500/5 hover:border-orange-500/20 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp size={19} />
                </div>

                <p className="text-sm font-semibold">
                  View Analytics
                </p>

                <p className="text-[11px] text-slate-600 mt-1">
                  Understand your spending
                </p>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;