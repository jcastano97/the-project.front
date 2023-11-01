import { Link } from "react-router-dom";

import { Button } from "../core/components/material-ui/Button";
import { BaseLayout } from "../core/layouts/BaseLayout";

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
