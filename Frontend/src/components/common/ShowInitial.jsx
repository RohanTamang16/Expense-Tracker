const ShowInitial = () => {
	const userData = localStorage.getItem("user");

	let user = null;

	try {
		user = userData ? JSON.parse(userData) : null;
	} catch (error) {
		console.error("Invalid user data in localStorage", error);
	}

	const getInitials = (name) => {
		if (!name) return "GU";

		const names = name.trim().split(/\s+/);

		const firstNameInitial = names[0]?.[0] || "";

		const lastNameInitial =
			names.length > 1
				? names[names.length - 1]?.[0]
				: "";

		return (firstNameInitial + lastNameInitial).toUpperCase();
	};

	return (
		<div className="h-9 w-9 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white">
			{getInitials(user?.name)}
		</div>
	);
};

export default ShowInitial;