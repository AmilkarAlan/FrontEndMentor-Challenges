import styles from "../modules/NavBar.module.css";
import { NavLinks } from "./NavLinks";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export function NavBar() {
    return (
        <Router>
            <NavLinks/>
        </Router>
        );
}
