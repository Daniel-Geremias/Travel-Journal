import React from "react";
import { FaGlobeAmericas } from "react-icons/fa"

export default function Header() {
    return (
        <header >
            <h2 className="header-title"><FaGlobeAmericas className="header-icon"/>My Travel Journal.</h2>
        </header>
    )
}