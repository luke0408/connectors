import typia from "typia";
import type { Primitive } from "typia";

import api from "../../../../src/api";
import type { IGithub } from "../../../../src/api/structures/connector/github/IGithub";

export const test_api_connector_github_repositories_pull_requests_reviews_reviewPullRequest =
  async (connection: api.IConnection) => {
    const output: Primitive<IGithub.IReviewPullRequestOutput> =
      await api.functional.connector.github.repositories.pull_requests.reviews.reviewPullRequest(
        connection,
        typia.random<IGithub.IReviewPullRequestInput>(),
      );
    typia.assert(output);
  };
