import axios from "axios";

const createBudget = async (formData) => {
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("You must be logged in to create a budget");
    }

    const response = await axios.post(
        "http://localhost:8000/api/budgets",
        formData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

const getBudget = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("You must be logged in");
    }

    const response = await axios.get(
        "http://localhost:8000/api/budgets/new",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

export {
    createBudget,
    getBudget
};