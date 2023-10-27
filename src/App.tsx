import { UserCard } from "./sections/users/UserCard";
import { useUsers } from "./sections/users/useUsers";

export function App() {
	const users = useUsers();

	return (
		<div className="App">
			<h3>THE PROJECT</h3>
			<h2>test users:</h2>
			{users.map((user) => (
				<UserCard key={user.name} user={user} />
			))}
		</div>
	);
}
