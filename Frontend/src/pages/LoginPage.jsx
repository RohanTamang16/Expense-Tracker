import { Link } from "react-router-dom";

import {
	Wallet,
	Mail,
	Lock,
	Eye,
	EyeOff,
	ArrowRight,
	Sparkles,
} from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const navigate = useNavigate()
	const [showPassword, setShowPassword] = useState(false);
	const togglePassword = () => {
		setShowPassword((previous) => !previous);
	};

	const [formData, setFormData] = useState({
		email: '',
		password: ''
	})

	const handleChange = (e) =>{
		const {name, value} = e.target;
		setFormData((previous) =>({
			...previous,
			[name] : value,
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"http://localhost:8000/api/login",
				formData
			)
			console.log("Login response:", response.data);

			localStorage.setItem(
				"user",
				JSON.stringify(response.data.data.user)
			)

			localStorage.setItem(
				"token",
				response.data.data.token
			)
			console.log("Login Successfull", response.data)
			navigate('/dashboard')
		} catch (error) {
			console.error("Login Failed", error.response?.data || error.message)
		}
	}
	return (
		<div className="h-screen w-full bg-[#070B14] text-white flex items-center justify-center px-4 overflow-hidden relative">
			{/* ================= BACKGROUND ================= */}

			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Gradient background */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.18),transparent_30%)]" />

				{/* Floating circles */}
				<div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />

				<div className="absolute w-80 h-80 bg-purple-600/20 rounded-full blur-3xl -bottom-32 -right-20 animate-pulse [animation-delay:1s]" />

				<div className="absolute w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl top-1/3 right-1/4 animate-bounce [animation-duration:6s]" />

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

			{/* ================= LOGIN CONTAINER ================= */}

			<div className="relative z-10 w-full max-w-md">
				{/* Glow */}
				<div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-[30px] blur-xl opacity-20" />

				{/* ================= CARD ================= */}

				<div className="relative bg-white/6 backdrop-blur-2xl border border-white/10 rounded-[28px] px-7 py-7 sm:px-9 sm:py-8 shadow-2xl">
					{/* ================= LOGO ================= */}

					<div className="flex justify-center mb-5">
						<div className="relative">
							<div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-40 animate-pulse" />

							<div className="relative w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 hover:rotate-6 transition-transform duration-300">
								<Wallet size={27} strokeWidth={2.2} />
							</div>
						</div>
					</div>

					{/* ================= HEADING ================= */}

					<div className="text-center mb-6">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-3">
							<Sparkles size={13} />
							Welcome back
						</div>

						<h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
							Sign in to your
							<span className="block bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
								Expense Tracker
							</span>
						</h1>

						<p className="text-xs sm:text-sm text-slate-400 mt-2">
							Manage your money. Track your spending. Build better habits.
						</p>
					</div>

					{/* ================= FORM ================= */}

					<form className="space-y-4"
					onSubmit={handleSubmit}>
						{/* Email */}

						<div>
							<label className="block text-sm font-medium text-slate-300 mb-1.5">
								Email address
							</label>

							<div className="relative group">
								<Mail
									size={18}
									className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors duration-300"
								/>

								<input
									type="email"
									placeholder="you@example.com"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-blue-500/60 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
								/>
							</div>
						</div>

						{/* Password */}

						<div>
							<div className="flex items-center justify-between mb-1.5">
								<label className="text-sm font-medium text-slate-300">
									Password
								</label>

								<Link
									to="/forgot-password"
									className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
								>
									Forgot password?
								</Link>
							</div>

							<div className="relative group">
								<Lock
									size={18}
									className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors duration-300"
								/>

								<input
									id="password"
									name="password"
									value={formData.password}
									onChange={handleChange}
									type={showPassword ? "text" : "password"}
									placeholder="Enter your password"
									className="w-full h-12 pl-12 pr-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-blue-500/60 focus:bg-blue-500/5 focus:ring-4 focus:ring-blue-500/10"
								/>

								<button
									type="button"
									onClick={togglePassword}
									className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
								>
									{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
								</button>
							</div>
						</div>

						{/* Remember me */}

						<div className="flex items-center">
							<label className="flex items-center gap-2 cursor-pointer group">
								<input
									type="checkbox"
									className="w-4 h-4 rounded border-white/20 bg-white/5 accent-blue-600 cursor-pointer"
								/>

								<span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
									Remember me
								</span>
							</label>
						</div>

						{/* ================= LOGIN BUTTON ================= */}

						<button
							type="submit"
							className="group relative w-full h-12 rounded-xl overflow-hidden bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
						>
							{/* Shine animation */}
							<span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />

							<span className="relative flex items-center justify-center gap-2">
								Sign In
								<ArrowRight
									size={18}
									className="group-hover:translate-x-1 transition-transform duration-300"
								/>
							</span>
						</button>
					</form>

					{/* ================= DIVIDER ================= */}

					<div className="flex items-center gap-4 my-5">
						<div className="h-px flex-1 bg-white/10" />

						<span className="text-xs text-slate-500">OR</span>

						<div className="h-px flex-1 bg-white/10" />
					</div>

					{/* ================= SIGN UP ================= */}

					<p className="text-center text-sm text-slate-400">
						Don't have an account?
						<Link
							to="/signup"
							className="ml-1.5 font-semibold text-blue-400 hover:text-blue-300 transition-colors"
						>
							Create account
						</Link>
					</p>
				</div>

				{/* ================= COPYRIGHT ================= */}

				<p className="text-center text-[11px] text-slate-600 mt-3">
					© 2026 Expense Tracker. Manage your finances smarter.
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
