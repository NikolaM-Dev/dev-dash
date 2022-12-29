interface Permissions {
	admin: boolean;
	maintain: boolean;
	pull: boolean;
	push: boolean;
	triage: boolean;
}

interface Author {
	email: string;
	name: string;
}

interface Headcommit {
	author: Author;
	committer: Author;
	id: string;
	message: string;
	timestamp: string;
	tree_id: string;
}

interface License {
	key: string;
	name: string;
	node_id: string;
	spdx_id: string;
	url: string;
}

interface Owner {
	avatar_url: string;
	events_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	gravatar_id: string;
	html_url: string;
	id: number;
	login: string;
	node_id: string;
	organizations_url: string;
	received_events_url: string;
	repos_url: string;
	site_admin: boolean;
	starred_url: string;
	subscriptions_url: string;
	type: string;
	url: string;
}

interface Repository {
	archive_url: string;
	assignees_url: string;
	blobs_url: string;
	branches_url: string;
	collaborators_url: string;
	comments_url: string;
	commits_url: string;
	compare_url: string;
	contents_url: string;
	contributors_url: string;
	deployments_url: string;
	description: string;
	downloads_url: string;
	events_url: string;
	fork: boolean;
	forks_url: string;
	full_name: string;
	git_commits_url: string;
	git_refs_url: string;
	git_tags_url: string;
	hooks_url: string;
	html_url: string;
	id: number;
	issue_comment_url: string;
	issue_events_url: string;
	issues_url: string;
	keys_url: string;
	labels_url: string;
	languages_url: string;
	merges_url: string;
	milestones_url: string;
	name: string;
	node_id: string;
	notifications_url: string;
	owner: Owner;
	private: boolean;
	pulls_url: string;
	releases_url: string;
	stargazers_url: string;
	statuses_url: string;
	subscribers_url: string;
	subscription_url: string;
	tags_url: string;
	teams_url: string;
	trees_url: string;
	url: string;
}

interface Workflowrun {
	actor: Owner;
	artifacts_url: string;
	cancel_url: string;
	check_suite_id: number;
	check_suite_node_id: string;
	check_suite_url: string;
	conclusion: string;
	created_at: string;
	display_title: string;
	event: string;
	head_branch: string;
	head_commit: Headcommit;
	head_repository: Repository;
	head_sha: string;
	html_url: string;
	id: number;
	jobs_url: string;
	logs_url: string;
	name: string;
	node_id: string;
	path: string;
	previous_attempt_url?: any;
	pull_requests: any[];
	referenced_workflows: any[];
	repository: Repository;
	rerun_url: string;
	run_attempt: number;
	run_number: number;
	run_started_at: string;
	status: string;
	triggering_actor: Owner;
	updated_at: string;
	url: string;
	workflow_id: number;
	workflow_url: string;
}

export interface CiStatus {
	total_count: number;
	workflow_runs: Workflowrun[];
}

interface Self {
	href: string;
}

interface Repo2 {
	allow_forking: boolean;
	archived: boolean;
	archive_url: string;
	assignees_url: string;
	blobs_url: string;
	branches_url: string;
	clone_url: string;
	collaborators_url: string;
	comments_url: string;
	commits_url: string;
	compare_url: string;
	contents_url: string;
	contributors_url: string;
	created_at: string;
	default_branch: string;
	deployments_url: string;
	description: string;
	disabled: boolean;
	downloads_url: string;
	events_url: string;
	fork: boolean;
	forks_count: number;
	forks: number;
	forks_url: string;
	full_name: string;
	git_commits_url: string;
	git_refs_url: string;
	git_tags_url: string;
	git_url: string;
	has_downloads: boolean;
	has_issues: boolean;
	has_pages: boolean;
	has_projects: boolean;
	has_wiki: boolean;
	homepage: string;
	hooks_url: string;
	html_url: string;
	id: number;
	issue_comment_url: string;
	issue_events_url: string;
	issues_url: string;
	is_template: boolean;
	keys_url: string;
	labels_url: string;
	language: string;
	languages_url: string;
	license: License;
	merges_url: string;
	milestones_url: string;
	mirror_url?: any;
	name: string;
	node_id: string;
	notifications_url: string;
	open_issues_count: number;
	open_issues: number;
	owner: Owner;
	private: boolean;
	pulls_url: string;
	pushed_at: string;
	releases_url: string;
	size: number;
	ssh_url: string;
	stargazers_count: number;
	stargazers_url: string;
	statuses_url: string;
	subscribers_url: string;
	subscription_url: string;
	svn_url: string;
	tags_url: string;
	teams_url: string;
	topics: string[];
	trees_url: string;
	updated_at: string;
	url: string;
	visibility: string;
	watchers_count: number;
	watchers: number;
	web_commit_signoff_required: boolean;
}

interface Base {
	label: string;
	ref: string;
	repo: Repo2;
	sha: string;
	user: Owner;
}
interface Links {
	comments: Self;
	commits: Self;
	html: Self;
	issue: Self;
	review_comment: Self;
	review_comments: Self;
	self: Self;
	statuses: Self;
}

interface Repo {
	allow_forking: boolean;
	archived: boolean;
	archive_url: string;
	assignees_url: string;
	blobs_url: string;
	branches_url: string;
	clone_url: string;
	collaborators_url: string;
	comments_url: string;
	commits_url: string;
	compare_url: string;
	contents_url: string;
	contributors_url: string;
	created_at: string;
	default_branch: string;
	deployments_url: string;
	description: string;
	disabled: boolean;
	downloads_url: string;
	events_url: string;
	fork: boolean;
	forks_count: number;
	forks: number;
	forks_url: string;
	full_name: string;
	git_commits_url: string;
	git_refs_url: string;
	git_tags_url: string;
	git_url: string;
	has_downloads: boolean;
	has_issues: boolean;
	has_pages: boolean;
	has_projects: boolean;
	has_wiki: boolean;
	homepage: string;
	hooks_url: string;
	html_url: string;
	id: number;
	issue_comment_url: string;
	issue_events_url: string;
	issues_url: string;
	is_template: boolean;
	keys_url: string;
	labels_url: string;
	language?: string;
	languages_url: string;
	license: License;
	merges_url: string;
	milestones_url: string;
	mirror_url?: any;
	name: string;
	node_id: string;
	notifications_url: string;
	open_issues_count: number;
	open_issues: number;
	owner: Owner;
	private: boolean;
	pulls_url: string;
	pushed_at: string;
	releases_url: string;
	size: number;
	ssh_url: string;
	stargazers_count: number;
	stargazers_url: string;
	statuses_url: string;
	subscribers_url: string;
	subscription_url: string;
	svn_url: string;
	tags_url: string;
	teams_url: string;
	topics: any[];
	trees_url: string;
	updated_at: string;
	url: string;
	visibility: string;
	watchers_count: number;
	watchers: number;
	web_commit_signoff_required: boolean;
}

interface Head {
	label: string;
	ref: string;
	sha: string;
	user: Owner;
	repo: Repo;
}

export interface PullRequest {
	url: string;
	id: number;
	node_id: string;
	html_url: string;
	diff_url: string;
	patch_url: string;
	issue_url: string;
	number: number;
	state: string;
	locked: boolean;
	title: string;
	user: Owner;
	body: string;
	created_at: string;
	updated_at: string;
	closed_at?: any;
	merged_at?: any;
	merge_commit_sha?: string;
	assignee?: any;
	assignees: any[];
	requested_reviewers: any[];
	requested_teams: any[];
	labels: any[];
	milestone?: any;
	draft: boolean;
	commits_url: string;
	review_comments_url: string;
	review_comment_url: string;
	comments_url: string;
	statuses_url: string;
	head: Head;
	base: Base;
	_links: Links;
	author_association: string;
	auto_merge?: any;
	active_lock_reason?: any;
}

export interface RepositoryData {
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	private: boolean;
	owner: Owner;
	html_url: string;
	description: string;
	fork: boolean;
	url: string;
	forks_url: string;
	keys_url: string;
	collaborators_url: string;
	teams_url: string;
	hooks_url: string;
	issue_events_url: string;
	events_url: string;
	assignees_url: string;
	branches_url: string;
	tags_url: string;
	blobs_url: string;
	git_tags_url: string;
	git_refs_url: string;
	trees_url: string;
	statuses_url: string;
	languages_url: string;
	stargazers_url: string;
	contributors_url: string;
	subscribers_url: string;
	subscription_url: string;
	commits_url: string;
	git_commits_url: string;
	comments_url: string;
	issue_comment_url: string;
	contents_url: string;
	compare_url: string;
	merges_url: string;
	archive_url: string;
	downloads_url: string;
	issues_url: string;
	pulls_url: string;
	milestones_url: string;
	notifications_url: string;
	labels_url: string;
	releases_url: string;
	deployments_url: string;
	created_at: string;
	updated_at: string;
	pushed_at: string;
	git_url: string;
	ssh_url: string;
	clone_url: string;
	svn_url: string;
	homepage: string;
	size: number;
	stargazers_count: number;
	watchers_count: number;
	language: string;
	has_issues: boolean;
	has_projects: boolean;
	has_downloads: boolean;
	has_wiki: boolean;
	has_pages: boolean;
	forks_count: number;
	mirror_url?: any;
	archived: boolean;
	disabled: boolean;
	open_issues_count: number;
	license: License;
	allow_forking: boolean;
	is_template: boolean;
	web_commit_signoff_required: boolean;
	topics: string[];
	visibility: string;
	forks: number;
	open_issues: number;
	watchers: number;
	default_branch: string;
	permissions: Permissions;
	temp_clone_token: string;
	organization: Owner;
	network_count: number;
	subscribers_count: number;
}

export interface GitHubApiResponses {
	ciStatus: CiStatus;
	pullRequests: PullRequest[];
	repositoryData: RepositoryData;
}
