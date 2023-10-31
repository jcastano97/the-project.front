import { SignInPage } from "./core/views/account/SignInPage";
import { useUsers } from "./sections/users/useUsers";

export function App() {
	const users = useUsers();

	return (
		<div className="App dark:bg-black dark:text-white">
			<SignInPage />
		</div>
	);
}
