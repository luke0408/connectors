import core from "@nestia/core";
import { Controller } from "@nestjs/common";
import { RouteIcon, SelectBenchmark, Standalone } from "@wrtnio/decorators";

import { ApiTags } from "@nestjs/swagger";
import { IGoogleShopping } from "@wrtn/connector-api/lib/structures/connector/google_shopping/IGoogleShopping";
import { GoogleShoppingProvider } from "../../../../providers/connector/google_shopping/GoogleShoppingProvider";
import { retry } from "../../../../utils/retry";

@Controller("connector/google-shopping")
export class GoogleShoppingIherbController {
  constructor(
    private readonly googleShoppingProvider: GoogleShoppingProvider,
  ) {}

  /**
   * Search for products on iHerb
   * iHerb is a service that allows you to purchase Nutritional supplement.
   * Only one keyword should be requested per request.
   * For example, If you use "vitamin" and "calcium" as keywords, you must make two requests, each with separate keywords.
   * @summary iHerb Search
   * @param input Search conditions
   * @returns Search results
   */
  @SelectBenchmark("iherb에서 상품 좀 찾아줘")
  @Standalone()
  @core.TypedRoute.Post("iherb")
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/iHerb_full.svg",
  )
  @ApiTags("iHerb")
  async iherb(
    @core.TypedBody() input: IGoogleShopping.IRequestStandAlone,
  ): Promise<IGoogleShopping.IResponse[]> {
    return retry(() => this.googleShoppingProvider.iherb(input))();
  }
}
