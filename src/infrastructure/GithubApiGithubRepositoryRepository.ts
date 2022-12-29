	private urlToId(url: string): RepositoryId {
		const splitUrl = url.split("/");

		return {
			name: splitUrl.pop() as string,
			organitzation: splitUrl.pop() as string,
		};
	}
