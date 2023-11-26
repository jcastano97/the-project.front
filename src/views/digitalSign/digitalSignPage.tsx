import { DigitalSign } from "@components/digitalSign/DigitalSign";
import { BaseLayout } from "@layouts/BaseLayout";
import { Button } from "@mui/base";
import { Link } from "react-router-dom";

export function DigitalSignPage() {
	return (
		<BaseLayout>
			<DigitalSign />
		</BaseLayout>
	);
}
