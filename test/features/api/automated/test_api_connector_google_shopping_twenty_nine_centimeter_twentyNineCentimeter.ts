import typia from "typia";
import type { Primitive } from "typia";

import api from "../../../../src/api";
import type { IGoogleShopping } from "../../../../src/api/structures/connector/google_shopping/IGoogleShopping";

export const test_api_connector_google_shopping_twenty_nine_centimeter_twentyNineCentimeter =
  async (connection: api.IConnection) => {
    const output: Primitive<Array<IGoogleShopping.IResponse>> =
      await api.functional.connector.google_shopping.twenty_nine_centimeter.twentyNineCentimeter(
        connection,
        typia.random<IGoogleShopping.IRequestStandAlone>(),
      );
    typia.assert(output);
  };
