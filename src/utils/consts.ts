export const AUTH_API_URL = (): string => {
	const DEFAULT_URL = "https://theprojectback.fly.dev";
	try {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return (
			process.env.REACT_APP_AUTH_API_URL ?? import.meta.env.REACT_APP_AUTH_API_URL ?? DEFAULT_URL
		);
	} catch (e) {
		return DEFAULT_URL;
	}
};
