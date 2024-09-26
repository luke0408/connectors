import typia from "typia";

import CApi from "@wrtn/connector-api/lib/index";
import { IGoogleSheet } from "@wrtn/connector-api/lib/structures/connector/google_sheet/IGoogleSheet";

import { ConnectorGlobal } from "../../../../../src/ConnectorGlobal";

export const test_api_connector_read_worksheet_google_sheet = async (
  connection: CApi.IConnection,
): Promise<IGoogleSheet.IReadGoogleSheetRowsOutput> => {
  const input: IGoogleSheet.IReadGoogleSheetRowsInput = {
    url: "https://docs.google.com/spreadsheets/d/1t5N42ZfMFICZlPPT-sLxRgMNNiR-2j0Fb49SMQyVXRo/edit#gid=0",
    workSheetTitle: "Sheet1",
    secretKey: ConnectorGlobal.env.GOOGLE_TEST_SECRET,
  };
  const result = await CApi.functional.connector.google_sheet.get_rows.readRows(
    connection,
    input,
  );

  typia.assert(result);
  return result;
};
