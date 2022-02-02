import React from "react";
import { FaGlobeAmericas } from "react-icons/fa"

export default function Header() {
    return (
        <header className="header" >
            <FaGlobeAmericas className="header-icon"/>
            <h2 className="header-title">My Travel Journal.</h2>
        </header>
    )
}