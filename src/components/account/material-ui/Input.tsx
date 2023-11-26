import { Input as BaseInput, InputProps } from "@mui/base";
import React, { RefObject } from "react";
import { FieldError } from "react-hook-form";
import { ClassNameValue, twMerge } from "tailwind-merge";

type InputExtraProps = {
	label?: string;
	hookError?: FieldError;
};

export class Input extends React.Component<InputProps & InputExtraProps> {
	ref: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined;

	render(): React.ReactNode {
		const isDarkMode = localStorage.getItem("darkMode") === "true";
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
		const className: string = twMerge(
			`w-full px-3 py-2 font-normal bg-transparent border rounded-md text-black dark:text-white placeholder:text-gray-500 outline-none ${
				this.props.hookError
					? "border-red-600 focus:shadow-[inset_0_0_8px_-2px_red]"
					: "border-gray-500 focus:border-blue-600 dark:focus:border-green-600 focus:shadow-[inset_0_0_10px_-5px_blue] dark:focus:shadow-[inset_0_0_10px_-2px_green] hover:border-blue-500 dark:hover:border-green-500"
			}`,
			this.props.className
				? this.props.className
				: (this.props.slotProps?.root?.className as ClassNameValue)
		);

		return (
			<div className="text-right">
				{this.props.hookError && (
					<span className="text-xs text-red-600">{this.props.hookError.type}</span>
				)}
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
				{this.props.label && <label className="">{this.props.label}</label>}
			</div>
		);
	}
}
