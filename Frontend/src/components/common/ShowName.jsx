const ShowName = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div>
            <p className="text-sm font-medium">
                {user?.name || "GUEST"}
            </p>
            <p className="text-[11px] text-slate-500 truncate">
                 {user?. email || "guest@gmail.com"}
                </p>
        </div>
    );
};

export default ShowName;