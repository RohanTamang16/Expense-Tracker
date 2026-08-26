
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
    User,
    Lock,
    Shield,
    Moon,
    ChevronRight,
    Mail,
    Phone,
} from "lucide-react";

import ShowName from "../components/common/ShowName";
import ShowInitial from "../components/common/ShowInitial";

const SettingsPage = () => {
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

                {/* Sidebar */}
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

                        {/* Settings - Active */}
                        <Link
                            to="/settings"
                            className="group flex items-center gap-3 px-3 py-3 rounded-xl bg-blue-500/10 border border-blue-500/10 text-blue-400 transition-all duration-300"
                        >
                            <Settings size={19} />

                            <span className="text-sm font-medium">
                                Settings
                            </span>

                            <span className="ml-auto h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
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

                {/* Main */}
                <main className="w-full lg:ml-64">

                    {/* Top Navbar */}
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
                                    placeholder="Search settings..."
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

                    {/* Settings Content */}
                    <div className="p-5 sm:p-8 max-w-300 mx-auto">

                        {/* Page Header */}
                        <div className="mb-8">

                            <div className="flex items-center gap-2 mb-2">

                                <Settings
                                    size={16}
                                    className="text-blue-400"
                                />

                                <span className="text-xs font-medium text-blue-400">
                                    Account management
                                </span>

                            </div>

                            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                                Settings
                            </h1>

                            <p className="text-sm text-slate-500 mt-1">
                                Manage your account, security and preferences.
                            </p>

                        </div>

                        {/* Profile Section */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden mb-6">

                            <div className="p-6 border-b border-white/10">

                                <div className="flex items-center gap-3">

                                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                                        <User size={20} />
                                    </div>

                                    <div>
                                        <h2 className="font-semibold">
                                            Profile
                                        </h2>

                                        <p className="text-xs text-slate-500 mt-1">
                                            Your personal account information
                                        </p>
                                    </div>

                                </div>

                            </div>

                            <div className="p-6">

                                <div className="flex flex-col sm:flex-row sm:items-center gap-5">

                                    <ShowInitial />

                                    <div className="flex-1">

                                        <ShowName />

                                        <p className="text-xs text-slate-500 mt-1">
                                            Personal account
                                        </p>

                                    </div>

                                    <Link
                                        to="/profile"
                                        className="inline-flex items-center justify-center gap-2 px-4 h-10 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                                    >
                                        Edit Profile
                                        <ChevronRight size={16} />
                                    </Link>

                                </div>

                            </div>
                        </div>

                        {/* Account Information */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden mb-6">

                            <div className="p-6 border-b border-white/10">

                                <div className="flex items-center gap-3">

                                    <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                                        <Mail size={20} />
                                    </div>

                                    <div>
                                        <h2 className="font-semibold">
                                            Account Information
                                        </h2>

                                        <p className="text-xs text-slate-500 mt-1">
                                            Information associated with your account
                                        </p>
                                    </div>

                                </div>

                            </div>

                            <div className="divide-y divide-white/5">

                                <div className="flex items-center gap-4 p-5">

                                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
                                        <Mail size={18} />
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-xs text-slate-500">
                                            Email Address
                                        </p>

                                        <p className="text-sm text-white mt-1">
                                            Your registered email
                                        </p>
                                    </div>

                                    <ChevronRight
                                        size={17}
                                        className="text-slate-600"
                                    />

                                </div>

                                <div className="flex items-center gap-4 p-5">

                                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
                                        <Phone size={18} />
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-xs text-slate-500">
                                            Phone Number
                                        </p>

                                        <p className="text-sm text-white mt-1">
                                            Your registered phone number
                                        </p>
                                    </div>

                                    <ChevronRight
                                        size={17}
                                        className="text-slate-600"
                                    />

                                </div>

                            </div>

                        </div>

                        {/* Security */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden mb-6">

                            <div className="p-6 border-b border-white/10">

                                <div className="flex items-center gap-3">

                                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                                        <Shield size={20} />
                                    </div>

                                    <div>
                                        <h2 className="font-semibold">
                                            Security
                                        </h2>

                                        <p className="text-xs text-slate-500 mt-1">
                                            Protect your account
                                        </p>
                                    </div>

                                </div>

                            </div>

                            <div className="divide-y divide-white/5">

                                <Link
                                    to="/change-password"
                                    className="flex items-center gap-4 p-5 hover:bg-white/5 transition-colors"
                                >

                                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
                                        <Lock size={18} />
                                    </div>

                                    <div className="flex-1">

                                        <p className="text-sm font-medium">
                                            Change Password
                                        </p>

                                        <p className="text-xs text-slate-500 mt-1">
                                            Update your account password
                                        </p>

                                    </div>

                                    <ChevronRight
                                        size={17}
                                        className="text-slate-600"
                                    />

                                </Link>

                            </div>

                        </div>

                        {/* Preferences */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl overflow-hidden mb-6">

                            <div className="p-6 border-b border-white/10">

                                <div className="flex items-center gap-3">

                                    <div className="h-10 w-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                                        <Settings size={20} />
                                    </div>

                                    <div>
                                        <h2 className="font-semibold">
                                            Preferences
                                        </h2>

                                        <p className="text-xs text-slate-500 mt-1">
                                            Customize your experience
                                        </p>
                                    </div>

                                </div>

                            </div>

                            <div className="divide-y divide-white/5">

                                <div className="flex items-center gap-4 p-5">

                                    <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
                                        <Moon size={18} />
                                    </div>

                                    <div className="flex-1">

                                        <p className="text-sm font-medium">
                                            Appearance
                                        </p>

                                        <p className="text-xs text-slate-500 mt-1">
                                            Dark mode
                                        </p>

                                    </div>

                                    <span className="text-xs px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/10">
                                        Dark
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Logout */}
                        <div className="rounded-2xl border border-red-500/10 bg-red-500/2.5 p-6">

                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">

                                <div className="h-11 w-11 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
                                    <LogOut size={19} />
                                </div>

                                <div className="flex-1">

                                    <h3 className="font-semibold">
                                        Sign out
                                    </h3>

                                    <p className="text-xs text-slate-500 mt-1">
                                        Sign out from your Expense Tracker account.
                                    </p>

                                </div>

                                <Link
                                    to="/logout"
                                    className="inline-flex items-center justify-center gap-2 px-5 h-10 rounded-xl border border-red-500/20 bg-red-500/10 text-sm font-medium text-red-400 hover:bg-red-500/20 transition-all"
                                >
                                    <LogOut size={16} />
                                    Logout
                                </Link>

                            </div>

                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default SettingsPage;
