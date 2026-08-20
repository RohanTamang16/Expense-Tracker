import { Link } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from "react";
import {
  Wallet,
  User,
  Mail,
  Phone,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const SignupPage = () => {
    const [formData, setFormData] = useState([])

    useEffect(() =>{
        
    }, [])
  return (
    <div className="fixed inset-0 w-full h-screen bg-[#070B14] text-white flex items-center justify-center px-4 overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.18),transparent_30%)]" />

        {/* Floating circles */}
        <div className="absolute w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />

        <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-3xl -bottom-32 -right-20 animate-pulse [animation-delay:1s]" />

        <div className="absolute w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl top-1/3 right-1/4 animate-bounce [animation-duration:6s]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

      </div>

      {/* ================= SIGNUP CONTAINER ================= */}

      <div className="relative z-10 w-full max-w-md">

        {/* Glow */}
        <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-[30px] blur-xl opacity-20" />

        {/* ================= CARD ================= */}

        <div className="relative bg-white/6 backdrop-blur-2xl border border-white/10 rounded-[28px] px-6 py-5 sm:px-8 sm:py-6 shadow-2xl">

          {/* ================= LOGO ================= */}

          <div className="flex justify-center mb-3">

            <div className="relative">

              <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-40 animate-pulse" />

              <div className="relative w-12 h-12 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 hover:rotate-6 transition-transform duration-300">
                <Wallet size={24} strokeWidth={2.2} />
              </div>

            </div>

          </div>

          {/* ================= HEADING ================= */}

          <div className="text-center mb-4">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-medium mb-2">
              <Sparkles size={12} />
              Get started
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">

              Create your

              <span className="block bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Expense Tracker
              </span>

            </h1>

            <p className="text-xs text-slate-400 mt-1.5">
              Start managing your money and build better financial habits.
            </p>

          </div>

          {/* ================= FORM ================= */}

          <form className="space-y-2.5">

            {/* NAME */}

            <div>

              <label className="block text-xs font-medium text-slate-300 mb-1">
                Full name
              </label>

              <div className="relative group">

                <User
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors duration-300"
                />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full h-10 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-blue-500/60 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
                />

              </div>

            </div>

            {/* EMAIL */}

            <div>

              <label className="block text-xs font-medium text-slate-300 mb-1">
                Email address
              </label>

              <div className="relative group">

                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors duration-300"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-10 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-blue-500/60 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
                />

              </div>

            </div>

            {/* PHONE */}

            <div>

              <label className="block text-xs font-medium text-slate-300 mb-1">
                Phone number
              </label>

              <div className="relative group">

                <Phone
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors duration-300"
                />

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full h-10 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-blue-500/60 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div>

              <label className="block text-xs font-medium text-slate-300 mb-1">
                Password
              </label>

              <div className="relative group">

                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors duration-300"
                />

                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full h-10 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-blue-500/60 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
                />

              </div>

            </div>

            {/* CONFIRM PASSWORD */}

            <div>

              <label className="block text-xs font-medium text-slate-300 mb-1">
                Confirm password
              </label>

              <div className="relative group">

                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors duration-300"
                />

                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full h-10 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-blue-500/60 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
                />

              </div>

            </div>

            {/* TERMS */}

            <div className="flex items-start pt-0.5">

              <label className="flex items-start gap-2 cursor-pointer">

                <input
                  type="checkbox"
                  className="w-3.5 h-3.5 mt-0.5 rounded border-white/20 bg-white/5 accent-blue-600 cursor-pointer"
                />

                <span className="text-[11px] text-slate-400 leading-4">

                  I agree to the{" "}

                  <Link
                    to="/terms"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Terms of Service
                  </Link>

                  {" "}and{" "}

                  <Link
                    to="/privacy"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Privacy Policy
                  </Link>

                </span>

              </label>

            </div>

            {/* ================= SIGNUP BUTTON ================= */}

            <button
              type="submit"
              className="group relative w-full h-10 rounded-xl overflow-hidden bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-sm font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >

              {/* Shine animation */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />

              <span className="relative flex items-center justify-center gap-2">

                Create Account

                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />

              </span>

            </button>

          </form>

          {/* ================= DIVIDER ================= */}

          <div className="flex items-center gap-4 my-3">

            <div className="h-px flex-1 bg-white/10" />

            <span className="text-[10px] text-slate-500">
              OR
            </span>

            <div className="h-px flex-1 bg-white/10" />

          </div>

          {/* ================= LOGIN ================= */}

          <p className="text-center text-xs text-slate-400">

            Already have an account?

            <Link
              to="/"
              className="ml-1.5 font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Sign in
            </Link>

          </p>

        </div>

        {/* ================= COPYRIGHT ================= */}

        <p className="text-center text-[10px] text-slate-600 mt-2">
          © 2026 Expense Tracker. Manage your finances smarter.
        </p>

      </div>

    </div>
  );
};

export default SignupPage;