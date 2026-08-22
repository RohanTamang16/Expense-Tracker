import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowDownCircle,
  Wallet,
  Plus,
  CalendarDays,
  Tag,
  FileText,
  Banknote,
  ShoppingCart,
  Utensils,
  Car,
  Home,
  Zap,
} from "lucide-react";

const ExpensePage = () => {
  return (
    <div className="min-h-screen bg-[#070B14] text-white relative overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(239,68,68,0.12),transparent_30%),radial-gradient(circle_at_85%_85%,rgba(139,92,246,0.12),transparent_30%)]" />

        <div className="absolute -top-32 -left-32 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse" />

        <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ================= MAIN ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8">

          <div className="flex items-center gap-4">

            <Link
              to="/transactions"
              className="group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <ArrowLeft
                size={18}
                className="text-slate-400 group-hover:text-white group-hover:-translate-x-1 transition-all duration-300"
              />
            </Link>

            <div>
              <div className="flex items-center gap-2 mb-1">

                <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <ArrowDownCircle
                    size={16}
                    className="text-red-400"
                  />
                </div>

                <span className="text-xs font-medium text-red-400">
                  Money Out
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Add Expense
              </h1>

              <p className="text-sm text-slate-500 mt-1">
                Record your spending and keep your finances organized.
              </p>
            </div>
          </div>

          {/* Balance */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Wallet
                size={19}
                className="text-blue-400"
              />
            </div>

            <div>
              <p className="text-[11px] text-slate-500">
                Current Balance
              </p>

              <p className="text-sm font-semibold text-white">
                $12,450.00
              </p>
            </div>

          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ================= FORM ================= */}
          <div className="lg:col-span-2">

            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">

              <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">

                {/* Heading */}
                <div className="mb-7">

                  <div className="flex items-center gap-3 mb-2">

                    <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                      <Plus
                        size={20}
                        className="text-red-400"
                      />
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold">
                        Expense Details
                      </h2>

                      <p className="text-xs text-slate-500">
                        Enter information about your expense.
                      </p>
                    </div>

                  </div>

                </div>

                {/* ================= FORM ================= */}
                <form className="space-y-5">

                  {/* Amount */}
                  <div>

                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Amount
                    </label>

                    <div className="relative group">

                      <Banknote
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-red-400 transition-colors duration-300"
                      />

                      <input
                        type="number"
                        placeholder="0.00"
                        className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-red-500/50 focus:bg-red-500/5 focus:ring-4 focus:ring-red-500/10"
                      />

                    </div>

                  </div>

                  {/* Category */}
                  <div>

                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Expense Category
                    </label>

                    <div className="relative group">

                      <Tag
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-red-400 transition-colors duration-300"
                      />

                      <select
                        className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none appearance-none cursor-pointer transition-all duration-300 focus:border-red-500/50 focus:bg-red-500/5 focus:ring-4 focus:ring-red-500/10"
                      >

                        <option className="bg-[#101622]">
                          Select category
                        </option>

                        <option className="bg-[#101622]">
                          Food
                        </option>

                        <option className="bg-[#101622]">
                          Shopping
                        </option>

                        <option className="bg-[#101622]">
                          Transportation
                        </option>

                        <option className="bg-[#101622]">
                          Housing
                        </option>

                        <option className="bg-[#101622]">
                          Utilities
                        </option>

                        <option className="bg-[#101622]">
                          Entertainment
                        </option>

                        <option className="bg-[#101622]">
                          Healthcare
                        </option>

                        <option className="bg-[#101622]">
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
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-red-400 transition-colors duration-300"
                      />

                      <input
                        type="date"
                        className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none transition-all duration-300 focus:border-red-500/50 focus:bg-red-500/5 focus:ring-4 focus:ring-red-500/10"
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
                        className="absolute left-4 top-4 text-slate-500 group-focus-within:text-red-400 transition-colors duration-300"
                      />

                      <textarea
                        rows="4"
                        placeholder="Add a note about this expense..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 outline-none resize-none transition-all duration-300 focus:border-red-500/50 focus:bg-red-500/5 focus:ring-4 focus:ring-red-500/10"
                      />

                    </div>

                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="group relative w-full h-12 rounded-xl overflow-hidden bg-linear-to-r from-red-600 via-rose-600 to-orange-600 font-semibold shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-red-500/30 active:translate-y-0"
                  >

                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />

                    <span className="relative flex items-center justify-center gap-2">
                      <Plus size={18} />
                      Add Expense
                    </span>

                  </button>

                </form>

              </div>

            </div>

          </div>

          {/* ================= SIDE PANEL ================= */}
          <div className="space-y-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6">

              <h3 className="text-sm font-semibold mb-1">
                Common Expenses
              </h3>

              <p className="text-xs text-slate-500 mb-5">
                Frequently used categories.
              </p>

              <div className="space-y-3">

                {/* Food */}
                <div className="group flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-red-500/20 transition-all duration-300 cursor-pointer">

                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Utensils
                      size={18}
                      className="text-orange-400"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      Food
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Restaurants & groceries
                    </p>
                  </div>

                  <ArrowDownCircle
                    size={16}
                    className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                </div>

                {/* Shopping */}
                <div className="group flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-red-500/20 transition-all duration-300 cursor-pointer">

                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <ShoppingCart
                      size={18}
                      className="text-purple-400"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      Shopping
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Clothes & products
                    </p>
                  </div>

                  <ArrowDownCircle
                    size={16}
                    className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                </div>

                {/* Transportation */}
                <div className="group flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-red-500/20 transition-all duration-300 cursor-pointer">

                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Car
                      size={18}
                      className="text-blue-400"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      Transport
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Fuel & travel
                    </p>
                  </div>

                  <ArrowDownCircle
                    size={16}
                    className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                </div>

                {/* Housing */}
                <div className="group flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-red-500/20 transition-all duration-300 cursor-pointer">

                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Home
                      size={18}
                      className="text-cyan-400"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      Housing
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Rent & maintenance
                    </p>
                  </div>

                  <ArrowDownCircle
                    size={16}
                    className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                </div>

                {/* Utilities */}
                <div className="group flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-red-500/20 transition-all duration-300 cursor-pointer">

                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                    <Zap
                      size={18}
                      className="text-yellow-400"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      Utilities
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Electricity & internet
                    </p>
                  </div>

                  <ArrowDownCircle
                    size={16}
                    className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                </div>

              </div>

            </div>

            {/* Tip */}
            <div className="relative overflow-hidden rounded-3xl border border-red-500/10 bg-red-500/5 p-6">

              <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-red-500/10 blur-2xl" />

              <div className="relative">

                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <ArrowDownCircle
                    size={19}
                    className="text-red-400"
                  />
                </div>

                <h3 className="text-sm font-semibold mb-2">
                  Track your spending
                </h3>

                <p className="text-xs leading-5 text-slate-500">
                  Recording your expenses helps you understand where
                  your money goes and build better spending habits.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= FOOTER ================= */}
        <div className="flex justify-center mt-8">

          <Link
            to="/transactions"
            className="text-xs text-slate-500 hover:text-blue-400 transition-colors"
          >
            View all transactions →
          </Link>

        </div>

      </div>
    </div>
  );
};

export default ExpensePage;