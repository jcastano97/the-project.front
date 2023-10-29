import { Input as BaseInput, InputProps } from "@mui/base";
import React, { RefObject } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

export class Input extends React.Component<InputProps> {
	ref: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined;
	render(): React.ReactNode {
		const isDarkMode = localStorage.getItem("darkMode") === "true";
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
		const className: string = twMerge(
			"w-full text-black bg-gray-200 placeholder:text-gray-500 dark:text-white dark:bg-gray-900 p-1 rounded border border-gray-500 hover:border-blue-500 focus:outline-none focus:border-blue-600 shadow-inner focus:shadow-purple-600/50",
			this.props.className
				? this.props.className
				: (this.props.slotProps?.root?.className as ClassNameValue)
		);

		return (
			<BaseInput
				ref={this.ref}
				{...this.props}
				className={isDarkMode ? "dark" : ""}
				slotProps={{
					...this.props.slotProps,
					input: {
						className,
					},
				}}
			/>
		);
	}
}
