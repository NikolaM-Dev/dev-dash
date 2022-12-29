import { githubApiResponses } from "../github_api_responses";

export class InMemoryGithubRepositoryRepository {
	search(): typeof githubApiResponses {
		return githubApiResponses;
	}
}
