import { CiStatus, GitHubApiResponses, PullRequest, RepositoryData } from "./GithubApiReponse";

interface RepositoryId {
	name: string;
	organitzation: string;
}

export class GithubApiGithubRepositoryRepository {
	private readonly endpoints = [
		"https://api.github.com/repos/$organitzation/$name",
		"https://api.github.com/repos/$organitzation/$name/pulls",
		"https://api.github.com/repos/$organitzation/$name/actions/runs?page=1&per_page=1",
	];

	constructor(private readonly personalAccessToken: string) {}

	async search(repositoryUrls: string[]): Promise<GitHubApiResponses[]> {
		const responsePromises = repositoryUrls
			.map((url) => this.urlToId(url))
			.map((id) => this.searchBy(id));

		return Promise.all(responsePromises);
	}

	private async searchBy(repositoryId: RepositoryId): Promise<GitHubApiResponses> {
		const repositoryRequests = this.endpoints
			.map((endpoint) => endpoint.replace("$name", repositoryId.name))
			.map((endpoint) => endpoint.replace("$organitzation", repositoryId.organitzation))
			.map((url) =>
				fetch(url, { headers: { Authorization: `Bearer ${this.personalAccessToken}` } })
			);

		return Promise.all(repositoryRequests)
			.then((responses) => Promise.all(responses.map((response) => response.json())))
			.then(([repositoryData, pullRequests, ciStatus]) => {
				return {
					repositoryData: repositoryData as RepositoryData,
					pullRequests: pullRequests as PullRequest[],
					ciStatus: ciStatus as CiStatus,
				};
			});
	}

	private urlToId(url: string): RepositoryId {
		const splitUrl = url.split("/");

		return {
			name: splitUrl.pop() as string,
			organitzation: splitUrl.pop() as string,
		};
	}
}
