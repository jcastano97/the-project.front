import { Button as BaseButton, ButtonProps } from "@mui/base";
import React from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

export class Button extends React.Component<ButtonProps> {
	render(): React.ReactNode {
		const isDarkMode = localStorage.getItem("darkMode") === "true";
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
		const className: string = twMerge(
			"p-1 rounded cursor bg-blue-500 hover:bg-blue-400 active:bg-blue-600 dark:bg-green-500 dark:hover:bg-green-400 dark:active:bg-green-600 disabled:bg-gray-500 dark:disabled:bg-gray-500  disabled:cursor-not-allowed",
			this.props.className
				? this.props.className
				: (this.props.slotProps?.root?.className as ClassNameValue)
		);

		return (
			<BaseButton
				{...this.props}
				className={isDarkMode ? "dark" : ""}
				slotProps={{
					...this.props.slotProps,
					root: {
						className,
					},
				}}
			/>
		);
	}
}
