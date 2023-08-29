import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

import { NavLink } from "react-router-dom"

export function Footer() {

    return (
        <footer>
            <nav>
                <NavLink to="/">Home</NavLink>
            </nav>
            <span>Developed with ❤️ by Roni Yerushalmi</span>
            <div className="socials">
                <a href="https://github.com/Roni750"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/yerushalmi-roni/"><FaLinkedin color="#0a66c2" /></a>
            </div>
        </footer>
    )
}