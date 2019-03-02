const initState = {
	isModalOpen: false,
	project: null
};

const portfolioReducer = (state = initState, action) => {
	switch (action.type) {
		case "OPEN_PORTFOLIO_MODAL":
			return {
				isModalOpen: true,
				project: action.project
			};
		case "CLOSE_PORTFOLIO_MODAL":
			return {
				isModalOpen: false,
				project: null
			};
		default:
			return state;
	}
};

export default portfolioReducer;
