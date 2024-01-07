import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

import { logger } from "../../utils/logger";

const THEME_CLASS_DARK_MODE = "dark";

export function ToggleDarkMode() {
	const storageDarkMode = localStorage.getItem("darkMode");
	const [darkMode, setDarkMode] = React.useState(storageDarkMode === "true" ? "true" : "false");

	const initDarkMode = () => {
		if (darkMode === "true") {
			document.documentElement.classList.add(THEME_CLASS_DARK_MODE);
		} else {
			document.documentElement.classList.remove(THEME_CLASS_DARK_MODE);
		}
	};

	const toggleDarkMode = () => {
		if (darkMode === "true") {
			document.documentElement.classList.remove(THEME_CLASS_DARK_MODE);
			localStorage.setItem("darkMode", "false");
			setDarkMode("false");
			logger.info("darkMode false");
		} else {
			document.documentElement.classList.add(THEME_CLASS_DARK_MODE);
			localStorage.setItem("darkMode", "true");
			setDarkMode("true");
			logger.info("darkMode true");
		}
	};

	useEffect(() => {
		initDarkMode();
	});

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
