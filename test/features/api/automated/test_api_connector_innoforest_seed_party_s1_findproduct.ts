import typia from "typia";
import type { Primitive } from "typia";

import api from "../../../../src/api";
import type { IInnoforest } from "../../../../src/api/structures/connector/innoforest/IInnoforest";

export const test_api_connector_innoforest_seed_party_s1_findproduct = async (
  connection: api.IConnection,
) => {
  const output: Primitive<IInnoforest.IFindproductOutput> =
    await api.functional.connector.innoforest.seed.party.s1.findproduct(
      connection,
      typia.random<IInnoforest.IFindproductInput>(),
    );
  typia.assert(output);
};
