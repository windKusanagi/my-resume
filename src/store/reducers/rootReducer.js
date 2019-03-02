import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import portfolioReducer from "./portfolioReducer";

const rootReducer = combineReducers({
	firestore: firestoreReducer,
	firebase: firebaseReducer,
	portfolioModal: portfolioReducer
});

export default rootReducer;
