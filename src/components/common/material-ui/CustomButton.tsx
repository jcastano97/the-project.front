import { Button as BaseButton, ButtonProps } from "@mui/base";
import React from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

export class CustomButton extends React.Component<ButtonProps> {
	render(): React.ReactNode {
		const className: string = twMerge(
			"p-1 rounded cursor font-bold text-md text-title bg-primary hover:bg-primary-hover disabled:bg-gray-500 dark:disabled:bg-gray-500 disabled:cursor-not-allowed",
			this.props.className
				? this.props.className
				: (this.props.slotProps?.root?.className as ClassNameValue)
		);

		return (
			<BaseButton
				{...this.props}
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
