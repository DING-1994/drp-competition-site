import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./lib/firebase/firebase";
import { firebaseApp } from "./lib/firebase/firebase"
import { getAnalytics } from "firebase/analytics";

initializeApp(firebaseConfig);
getAnalytics(firebaseApp)

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
