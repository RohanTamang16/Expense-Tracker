import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpCircle,
  Wallet,
  Plus,
  BriefcaseBusiness,
  Gift,
  TrendingUp,
} from "lucide-react";
import IncomeForm from "../form/IncomeForm";
import { getIncome } from "../services/IncomeServices";
import { useEffect, useState } from "react";

const IncomePage = () => {
  const [income, setIncome] = useState([])

  useEffect(() =>{
    const fetchIncome = async () => {
      try {
        const data = await getIncome();
        setIncome(data.data)
      } catch (error) {
        console.error("Error fetching income data", error)
      }
    }
    fetchIncome()
  }, [])
  return (
    <>
   
    <div className="min-h-screen bg-[#070B14] text-white relative overflow-hidden">
       
      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(37,99,235,0.12),transparent_30%),radial-gradient(circle_at_85%_85%,rgba(139,92,246,0.12),transparent_30%)]" />

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
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <ArrowUpCircle
                    size={16}
                    className="text-emerald-400"
                  />
                </div>

                <span className="text-xs font-medium text-emerald-400">
                  Money In
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Add Income
              </h1>

              <p className="text-sm text-slate-500 mt-1">
                Record your income and keep your finances organized.
              </p>
            </div>
          </div>
          
          {/* Wallet summary */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Wallet size={19} className="text-blue-400" />
            </div>

            <div>
              <p className="text-[11px] text-slate-500">
                Current Balance
              </p>
              <p className="text-sm font-semibold text-white">
                $ {income.map((item)=>(
                  item.amount
                ))}
              </p>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ================= FORM ================= */}
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">

              {/* Card glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">

                {/* Form heading */}
                <div className="mb-7">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <Plus
                        size={20}
                        className="text-emerald-400"
                      />
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold">
                        Income Details
                      </h2>

                      <p className="text-xs text-slate-500">
                        Enter information about your income.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form */}
               <IncomeForm />
              </div>
            </div>
          </div>

          {/* ================= SIDE PANEL ================= */}
          <div className="space-y-6">

            {/* Quick categories */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6">
              <h3 className="text-sm font-semibold mb-1">
                Common Sources
              </h3>

              <p className="text-xs text-slate-500 mb-5">
                Select a category quickly.
              </p>

              <div className="space-y-3">

                {/* Salary */}
                <div className="group flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emerald-500/20 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <BriefcaseBusiness
                      size={18}
                      className="text-blue-400"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      Salary
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Monthly income
                    </p>
                  </div>

                  <ArrowUpCircle
                    size={16}
                    className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Freelance */}
                <div className="group flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emerald-500/20 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <TrendingUp
                      size={18}
                      className="text-purple-400"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      Freelance
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Side income
                    </p>
                  </div>

                  <ArrowUpCircle
                    size={16}
                    className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Gift */}
                <div className="group flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-emerald-500/20 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">
                    <Gift
                      size={18}
                      className="text-pink-400"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      Gift
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Money received
                    </p>
                  </div>

                  <ArrowUpCircle
                    size={16}
                    className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
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
                  Track every income
                </h3>

                <p className="text-xs leading-5 text-slate-500">
                  Recording all your income sources gives you a clearer
                  picture of your financial health.
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
    </>
  );
};

export default IncomePage;