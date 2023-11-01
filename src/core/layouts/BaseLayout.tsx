import React from "react";

import { ToggleDarkMode } from "../components/settings/ToggleDarkMode";
import { BackgroundImgPropsInterface } from "../types/BackgroundImgPropsInterface";

export class BaseLayout extends React.Component<{
	children: React.ReactNode;
	bgImgProps?: BackgroundImgPropsInterface;
	className?: string;
}> {
	render(): React.ReactNode {
		return (
			<div className="w-full h-full bg-white dark:bg-black text-black dark:text-white">
				<div
					className={`relative flex flex-col w-full h-full ${
						this.props.className ? this.props.className : ""
					}`}
					style={this.props.bgImgProps ? this.props.bgImgProps : {}}
				>
					<div className="absolute top-0 right-0 flex">
						<ToggleDarkMode />
					</div>
					<main className="flex flex-1 flex-col">{this.props.children}</main>
					<footer className="flex justify-end">
						<span>Copyright © {new Date().getFullYear()}</span>
					</footer>
				</div>
			</div>
		);
	}
}
