import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
	apiKey: "AIzaSyATZOboZ7fOumi7Uljd9ND9KI0mIhaCv1s",
	authDomain: "my-react-resume.firebaseapp.com",
	databaseURL: "https://my-react-resume.firebaseio.com",
	projectId: "my-react-resume",
	storageBucket: "my-react-resume.appspot.com",
	messagingSenderId: "747963660479"
};

firebase.initializeApp(config);

export default firebase;
