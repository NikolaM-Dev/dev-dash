interface Widget {
	id: string;
	repository_url: string;
}

export interface DevDashConfig {
	github_access_token: string;
	widgets: Widget[];
}

export const config: DevDashConfig = {
	github_access_token: process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN as string,
	widgets: [
		{
			id: "1ec42afc-891c-4bb1-8a7d-dfeafcbc46b3",
			repository_url: "https://github.com/CodelyTV/dotly",
		},
		{
			id: "f7b0fa5f-9ad6-448b-9d78-bfec064d2cfa",
			repository_url: "https://github.com/CodelyTV/eslint-plugin-hexagonal-architecture",
		},
		{
			id: "962fedd1-4281-4f50-a120-fe42e03b223d",
			repository_url: "https://github.com/CodelyTV/refactor-code-smells",
		},
	],
};
