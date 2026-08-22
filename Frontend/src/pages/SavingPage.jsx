import { Link } from "react-router-dom";
import {
  ArrowLeft,
  PiggyBank,
  Wallet,
  Plus,
  CalendarDays,
  Target,
  FileText,
  Banknote,
  Home,
  Plane,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const SavingPage = () => {
  return (
    <div className="min-h-screen bg-[#070B14] text-white relative overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_85%_85%,rgba(168,85,247,0.14),transparent_30%)]" />

        <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />

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

                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <PiggyBank
                    size={16}
                    className="text-blue-400"
                  />
                </div>

                <span className="text-xs font-medium text-blue-400">
                  Build Wealth
                </span>

              </div>

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Add Savings
              </h1>

              <p className="text-sm text-slate-500 mt-1">
                Put money aside and work toward your financial goals.
              </p>

            </div>

          </div>

          {/* Balance */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Wallet
                size={19}
                className="text-purple-400"
              />
            </div>

            <div>

              <p className="text-[11px] text-slate-500">
                Total Savings
              </p>

              <p className="text-sm font-semibold text-white">
                $5,240.00
              </p>

            </div>

          </div>

        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ================= FORM ================= */}
          <div className="lg:col-span-2">

            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">

              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">

                {/* Heading */}
                <div className="mb-7">

                  <div className="flex items-center gap-3 mb-2">

                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">

                      <Plus
                        size={20}
                        className="text-blue-400"
                      />

                    </div>

                    <div>

                      <h2 className="text-lg font-semibold">
                        Savings Details
                      </h2>

                      <p className="text-xs text-slate-500">
                        Record money you're putting toward your goals.
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
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors duration-300"
                      />

                      <input
                        type="number"
                        placeholder="0.00"
                        className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-blue-500/50 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
                      />

                    </div>

                  </div>

                  {/* Goal */}
                  <div>

                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Savings Goal
                    </label>

                    <div className="relative group">

                      <Target
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors duration-300"
                      />

                      <select
                        className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none appearance-none cursor-pointer transition-all duration-300 focus:border-blue-500/50 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
                      >

                        <option className="bg-[#101622]">
                          Select savings goal
                        </option>

                        <option className="bg-[#101622]">
                          Emergency Fund
                        </option>

                        <option className="bg-[#101622]">
                          Vacation
                        </option>

                        <option className="bg-[#101622]">
                          Education
                        </option>

                        <option className="bg-[#101622]">
                          Home
                        </option>

                        <option className="bg-[#101622]">
                          Car
                        </option>

                        <option className="bg-[#101622]">
                          Investment
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
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors duration-300"
                      />

                      <input
                        type="date"
                        className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none transition-all duration-300 focus:border-blue-500/50 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
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
                        className="absolute left-4 top-4 text-slate-500 group-focus-within:text-blue-400 transition-colors duration-300"
                      />

                      <textarea
                        rows="4"
                        placeholder="Add a note about this saving..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 outline-none resize-none transition-all duration-300 focus:border-blue-500/50 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
                      />

                    </div>

                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="group relative w-full h-12 rounded-xl overflow-hidden bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/30 active:translate-y-0"
                  >

                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />

                    <span className="relative flex items-center justify-center gap-2">

                      <Plus size={18} />

                      Add Savings

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
                Savings Goals
              </h3>

              <p className="text-xs text-slate-500 mb-5">
                Common goals to help you save.
              </p>

              <div className="space-y-3">

                {/* Emergency */}
                <div className="group flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/20 transition-all duration-300 cursor-pointer">

                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">

                    <ShieldCheck
                      size={18}
                      className="text-emerald-400"
                    />

                  </div>

                  <div className="flex-1">

                    <p className="text-sm font-medium">
                      Emergency Fund
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Financial safety
                    </p>

                  </div>

                  <Target
                    size={16}
                    className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                </div>

                {/* Vacation */}
                <div className="group flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/20 transition-all duration-300 cursor-pointer">

                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">

                    <Plane
                      size={18}
                      className="text-purple-400"
                    />

                  </div>

                  <div className="flex-1">

                    <p className="text-sm font-medium">
                      Vacation
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Travel & holidays
                    </p>

                  </div>

                  <Target
                    size={16}
                    className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                </div>

                {/* Education */}
                <div className="group flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/20 transition-all duration-300 cursor-pointer">

                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">

                    <GraduationCap
                      size={18}
                      className="text-orange-400"
                    />

                  </div>

                  <div className="flex-1">

                    <p className="text-sm font-medium">
                      Education
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Study & courses
                    </p>

                  </div>

                  <Target
                    size={16}
                    className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                </div>

                {/* Home */}
                <div className="group flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/20 transition-all duration-300 cursor-pointer">

                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">

                    <Home
                      size={18}
                      className="text-cyan-400"
                    />

                  </div>

                  <div className="flex-1">

                    <p className="text-sm font-medium">
                      Home
                    </p>

                    <p className="text-[11px] text-slate-500">
                      House & property
                    </p>

                  </div>

                  <Target
                    size={16}
                    className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                </div>

              </div>

            </div>

            {/* Tip */}
            <div className="relative overflow-hidden rounded-3xl border border-blue-500/10 bg-blue-500/5 p-6">

              <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-blue-500/10 blur-2xl" />

              <div className="relative">

                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">

                  <TrendingUp
                    size={19}
                    className="text-blue-400"
                  />

                </div>

                <h3 className="text-sm font-semibold mb-2">
                  Save consistently
                </h3>

                <p className="text-xs leading-5 text-slate-500">
                  Even small contributions can grow into significant
                  savings when you make them consistently.
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

export default SavingPage;