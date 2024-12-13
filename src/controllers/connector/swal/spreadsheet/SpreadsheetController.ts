import core, { TypedBody } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { IExternalUser } from "@wrtn/connector-api/lib/structures/common/IExternalUser";
import { IPage } from "@wrtn/connector-api/lib/structures/common/IPage";
import { ISpreadsheet } from "@wrtn/connector-api/lib/structures/connector/swal/spreadsheet/ISpreadsheet";
import { ExternalUser } from "../../../../decorators/ExternalUser";
import { SpreadsheetProvider } from "../../../../providers/connector/swal/spreadsheet/SpreadsheetProvider";

@Controller("connector/swal/spreadsheets")
export class SpreadsheetController {
  @core.TypedRoute.Patch()
  async index(
    @ExternalUser() external_user: IExternalUser,
    @TypedBody() input: ISpreadsheet.IRequest,
  ): Promise<IPage<ISpreadsheet.ISummary>> {
    return SpreadsheetProvider.index(external_user, input);
  }
}
