import { ConnectFour } from "@components/connectFour/ConnectFour";
import { BaseLayout } from "@layouts/BaseLayout";

export function ConnectFourPage() {
	return (
		<BaseLayout className="container px-2 pt-0 mx-auto mt-0">
			<div className="p-2 text-center rounded-none bg-primary">
				<h1>Connect Four</h1>
			</div>
			<div className="border border-primary w-1/2 mx-auto mt-6 h-48">
				<ConnectFour />
			</div>
		</BaseLayout>
	);
}
