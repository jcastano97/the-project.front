import { Button } from "./core/components/material-ui/Button";
import { Input } from "./core/components/material-ui/Input";
import { ToggleDarkMode } from "./core/components/ToggleDarkMode";
import { UserCard } from "./sections/users/UserCard";
import { useUsers } from "./sections/users/useUsers";

export function App() {
	const users = useUsers();

	return (
		<div className="App dark:bg-black dark:text-white">
			<ToggleDarkMode />
			<h3 className="text-4xl bg-red-500 hover:bg-green-400 active:bg-blue-500">THE PROJECT</h3>
			<h2>test users:</h2>
			{users.map((user) => (
				<UserCard key={user.name} user={user} />
			))}
			<div className="flex flex-col gap-4">
				<Button className="bg-red-500 dark:bg-red-500">Hello world</Button>
				<Input />
				<Input
					className="focus:border-green-500 focus:shadow-green-500"
					placeholder="Hello world"
				/>
			</div>
		</div>
	);
}
