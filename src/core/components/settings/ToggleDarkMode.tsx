import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const THEME_DARK_MODE = "dark";

export function ToggleDarkMode() {
	const lsTheme = localStorage.getItem("theme");
	const [selectedTheme, setSelectedTheme] = React.useState(
		lsTheme === THEME_DARK_MODE ? THEME_DARK_MODE : ""
	);

	const toggleDarkMode = () => {
		if (selectedTheme === THEME_DARK_MODE) {
			document.documentElement.classList.remove(THEME_DARK_MODE);
			localStorage.setItem("theme", "");
			setSelectedTheme("");
		} else {
			document.documentElement.classList.add(THEME_DARK_MODE);
			localStorage.setItem("theme", THEME_DARK_MODE);
			setSelectedTheme(THEME_DARK_MODE);
		}
	};

	return (
		<>
			<button
				className="z-10 p-1 text-white bg-gray-800 rounded dark:text-black dark:bg-white"
				onClick={toggleDarkMode}
			>
				<FontAwesomeIcon icon={faCircleHalfStroke} size="xl" />
			</button>
		</>
	);
}
