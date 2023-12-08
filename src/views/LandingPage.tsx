import { Link } from "react-router-dom";

import { CustomButton } from "@components/common/material-ui/CustomButton";
import { BaseLayout } from "@layouts/BaseLayout";

export function LandingPage() {
	return (
		<BaseLayout>
			<h1>Landing Page</h1>
			<Link to="/account">
				<CustomButton>Go to account</CustomButton>
			</Link>
			<Link to="/digitalSign">
				<CustomButton>Go to digital sign</CustomButton>
			</Link>
			<Link to="/customEntity">
				<CustomButton>Go to custom entity</CustomButton>
			</Link>
		</BaseLayout>
	);
}
