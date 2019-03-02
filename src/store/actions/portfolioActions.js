export const openPortfolioModal = (project) =>{
    return dispatch => {
		dispatch({ type: "OPEN_PORTFOLIO_MODAL", project});
	};
};

export const closePortfolioModal = (project) =>{
    return dispatch => {
		dispatch({ type: "CLOSE_PORTFOLIO_MODAL"});
	};
};