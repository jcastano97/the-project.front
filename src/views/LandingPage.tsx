import { Link } from "react-router-dom";

import { Button } from "@components/material-ui/Button";
import { BaseLayout } from "@layouts/BaseLayout";

export function LandingPage() {
	return (
		<BaseLayout>
			<h1>Landing Page</h1>
			<Link to="/account">
				<Button>Go to account</Button>
			</Link>
		</BaseLayout>
	);
}
