import Button from "@mui/material/Button";

import { UserCard } from "./sections/users/UserCard";
import { useUsers } from "./sections/users/useUsers";

export function App() {
	const users = useUsers();

	return (
		<div className="App">
			<h3 className="text-4xl bg-red-500 hover:bg-green-400 active:bg-blue-500">THE PROJECT</h3>
			<h2>test users:</h2>
			{users.map((user) => (
				<UserCard key={user.name} user={user} />
			))}
			<Button variant="contained">Hello world</Button>
		</div>
	);
}
