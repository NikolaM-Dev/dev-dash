import { gitHubApiResponses } from "../github_api_responses";

export class InMemoryGithubRepositoryRepository {
	search(): typeof gitHubApiResponses {
		return gitHubApiResponses;
	}
}
