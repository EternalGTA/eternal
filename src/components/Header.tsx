import React, { useEffect } from 'react';
import "./Header.css";
import logo from "../img/blanc.png";

interface props {
	selectedMenu: number;
}

export default function Header({selectedMenu}: props): JSX.Element {
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
					<li className={selectedMenu === 0 ? "menu-selected" : ""}><a href="#/lobby">Lobby</a></li>
					<li className={selectedMenu === 1 ? "menu-selected" : ""}><a href="#/mod-menu">Mod Menus</a></li>
					<li><a href="https://youtube.com/eternalgta">Youtube</a></li>
					<li><a href="https://discord.gg/eternal-gta">Discord</a></li>
				</ul>
			</nav>
		</header>
	);
}

export function AdminHeader(): JSX.Element {
	const [scrolled, setScrolled] = React.useState(false);
	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 0.1) {
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
					<li><a href="#/admin/lobby">Lobby</a></li>
					<li><a href="#/admin/mod-menu">Mod Menus</a></li>
					<li><a href="#/ytb">Youtube</a></li>
					<li><a href="#/discord">Discord</a></li>
				</ul>
			</nav>
		</header>
	);
}