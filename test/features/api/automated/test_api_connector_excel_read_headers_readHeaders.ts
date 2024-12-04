import typia from "typia";
import type { Primitive } from "typia";

import api from "../../../../src/api";
import type { IExcel } from "../../../../src/api/structures/connector/excel/IExcel";

export const test_api_connector_excel_read_headers_readHeaders = async (
  connection: api.IConnection,
) => {
  const output: Primitive<Array<string>> =
    await api.functional.connector.excel.read.headers.readHeaders(
      connection,
      typia.random<IExcel.IReadExcelInput>(),
    );
  typia.assert(output);
};
