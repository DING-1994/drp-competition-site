import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./lib/firebase/firebase";

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
