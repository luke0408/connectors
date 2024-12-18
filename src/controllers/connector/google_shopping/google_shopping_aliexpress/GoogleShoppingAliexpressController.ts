import core from "@nestia/core";
import { Controller } from "@nestjs/common";
import { RouteIcon, SelectBenchmark, Standalone } from "@wrtnio/decorators";

import { ApiTags } from "@nestjs/swagger";
import { IGoogleShopping } from "@wrtn/connector-api/lib/structures/connector/google_shopping/IGoogleShopping";
import { GoogleShoppingProvider } from "../../../../providers/connector/google_shopping/GoogleShoppingProvider";
import { retry } from "../../../../utils/retry";

@Controller("connector/google-shopping")
export class GoogleShoppingAliexpressController {
  constructor(
    private readonly googleShoppingProvider: GoogleShoppingProvider,
  ) {}

  /**
   * Search for products on AliExpress
   *Only one item should be requested per request.
   * This connector only processes one search term at a time, so if you want to search for multiple terms, you will need to call this connector separately for each search term.
   *
   * @summary Search for AliExpress
   * @param input Search criteria
   * @returns Search results
   */
  @SelectBenchmark("알리 익스프레스에서 상품 좀 찾아줘")
  @Standalone()
  @core.TypedRoute.Post("ali-express")
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/AliExpress_full.svg",
  )
  @ApiTags("AliExpress")
  async aliExpress(
    @core.TypedBody() input: IGoogleShopping.IRequestStandAlone,
  ): Promise<IGoogleShopping.IResponse[]> {
    return retry(() => this.googleShoppingProvider.aliExpress(input))();
  }
}
