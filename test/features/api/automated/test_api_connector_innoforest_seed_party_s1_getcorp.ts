import typia from "typia";
import type { Primitive } from "typia";

import api from "../../../../src/api";
import type { IInnoforest } from "../../../../src/api/structures/connector/innoforest/IInnoforest";

export const test_api_connector_innoforest_seed_party_s1_getcorp = async (
  connection: api.IConnection,
) => {
  const output: Primitive<IInnoforest.IGetcorpOutput> =
    await api.functional.connector.innoforest.seed.party.s1.getcorp(
      connection,
      typia.random<IInnoforest.IGetcorpInput>(),
    );
  typia.assert(output);
};
