import { SignInForm } from "../../components/account/SignInForm";
import { BaseLayout } from "../../layouts/BaseLayout";
import { BackgroundImgProps } from "../../types/BackgroundImgPropsInterface";

export function SignInPage() {
	return (
		<BaseLayout
			className="text-white bg-black"
			bgImgProps={{
				...BackgroundImgProps.SrcCentered("/images/background/login-background.jpg"),
				backgroundPosition: "center center",
			}}
		>
			<div className="mx-auto my-auto">
				<SignInForm />
			</div>
		</BaseLayout>
	);
}
