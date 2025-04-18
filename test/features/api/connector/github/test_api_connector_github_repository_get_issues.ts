import CApi from "@wrtn/connector-api/lib/index";
import assert, { deepStrictEqual } from "assert";
import { randomUUID } from "crypto";
import typia from "typia";
import { ConnectorGlobal } from "../../../../../src/ConnectorGlobal";

export async function test_api_connector_github_repositories_get_issues_desc(
  connection: CApi.IConnection,
) {
  const res =
    await CApi.functional.connector.github.repositories.get_issues.getRepositoryIssues(
      connection,
      {
        owner: "samchon",
        repo: "nestia",
        direction: "DESC",
        sort: "COMMENTS",
        per_page: 10,
        state: "OPEN",
        secretKey: ConnectorGlobal.env.G_GITHUB_TEST_SECRET,
      },
    );

  typia.assert(res);

  if ("error_message" in res) {
    // 에러로 인한 실패
    throw new Error(res.error_message);
  }

  const counts = res.fetchedIssues.map((el) => el.comments.totalCount);
  deepStrictEqual(
    counts,
    counts.sort((a, b) => a - b),
  );

  assert(res.fetchedIssues.every((issue) => typeof issue.title === "string"));
}

export async function test_api_connector_github_repositories_get_issues_asc(
  connection: CApi.IConnection,
) {
  const res =
    await CApi.functional.connector.github.repositories.get_issues.getRepositoryIssues(
      connection,
      {
        owner: "samchon",
        repo: "nestia",
        direction: "ASC",
        sort: "COMMENTS",
        per_page: 10,
        state: "OPEN",
        secretKey: ConnectorGlobal.env.G_GITHUB_TEST_SECRET,
      },
    );

  typia.assert(res);

  if ("error_message" in res) {
    // 에러로 인한 실패
    throw new Error(res.error_message);
  }

  const counts = res.fetchedIssues.map((el) => el.comments.totalCount);
  deepStrictEqual(
    counts,
    counts.sort((a, b) => b - a),
  );
}

export async function test_api_connector_github_repositories_get_issues_sort_by_created_at(
  connection: CApi.IConnection,
) {
  const res =
    await CApi.functional.connector.github.repositories.get_issues.getRepositoryIssues(
      connection,
      {
        owner: "samchon",
        repo: "nestia",
        direction: "ASC",
        sort: "CREATED_AT",
        per_page: 10,
        state: "OPEN",
        secretKey: ConnectorGlobal.env.G_GITHUB_TEST_SECRET,
      },
    );

  typia.assert(res);
}

export async function test_api_connector_github_repositories_get_issues_of_non_existant_repository(
  connection: CApi.IConnection,
) {
  const res =
    await CApi.functional.connector.github.repositories.get_issues.getRepositoryIssues(
      connection,
      {
        owner: "kakasoo",
        repo: randomUUID(),
        direction: "ASC",
        sort: "UPDATED_AT",
        per_page: 10,
        state: "OPEN",
        secretKey: ConnectorGlobal.env.G_GITHUB_TEST_SECRET,
      },
    );

  typia.assert(res);
}
