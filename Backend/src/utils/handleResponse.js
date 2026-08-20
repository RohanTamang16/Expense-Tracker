// standardized response function
const handleResponse = (res, status, message, data = NULL) => {
	res.status(status).json({
		status,
		message,
		data,
	});
};

module.exports = handleResponse