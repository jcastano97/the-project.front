import { Button } from "@mui/base";

import { SignInForm } from "../../components/account/SignInForm";
import { BaseLayout } from "../../layouts/BaseLayout";
import { BackgroundImgProps } from "../../types/BackgroundImgPropsInterface";

type AccountPageProps = {
	unauthorizedRoute?: string;
};

export function AccountPage({ unauthorizedRoute }: AccountPageProps) {
	const loggedIn = false;

	return loggedIn ? (
		<BaseLayout>
			<div className="mx-auto my-auto">
				<h1>Account page</h1>
				<Button>Logout</Button>
			</div>
		</BaseLayout>
	) : (
		<BaseLayout
			bgImgProps={{
				...BackgroundImgProps.SrcCentered("/images/background/login-background.jpg"),
				backgroundPosition: "center center",
			}}
		>
			<div className="mx-auto my-auto">
				<SignInForm unauthorizedRoute={unauthorizedRoute} />
			</div>
		</BaseLayout>
	);
}
