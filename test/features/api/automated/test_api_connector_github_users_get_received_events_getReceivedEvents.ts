import typia from "typia";
import type { Primitive } from "typia";

import api from "../../../../src/api";
import type { IGithub } from "../../../../src/api/structures/connector/github/IGithub";

export const test_api_connector_github_users_get_received_events_getReceivedEvents =
  async (connection: api.IConnection) => {
    const output: Primitive<IGithub.IGetEventOutput> =
      await api.functional.connector.github.users.get_received_events.getReceivedEvents(
        connection,
        typia.random<IGithub.IGetReceivedEventInput>(),
      );
    typia.assert(output);
  };
