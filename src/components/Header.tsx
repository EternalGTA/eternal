import React, { useEffect } from 'react';
import "./Header.css";
import logo from "../img/blanc.png";

export default function Header(): JSX.Element {
	const [scrolled, setScrolled] = React.useState(false);
	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 1) {
			setScrolled(true);
		}
		else {
			setScrolled(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	})
	let navbarClasses = ['navbar'];
	if (scrolled) {
		navbarClasses.push('scrolled');
	}

	return (
		<header className={navbarClasses.join(" ")}>
			<div className="logo">
				<img alt="" src={logo}></img>
			</div>
			<nav className="navigation">
				<ul>
					<li><a href="#/">Home</a></li>
					<li><a href="#/lobby">Lobby</a></li>
					<li><a href="#/mod-menu">Mod Menus</a></li>
					<li><a href="#/ytb">Youtube</a></li>
					<li><a href="#/discord">Discord</a></li>
				</ul>
			</nav>
		</header>
	);
}