import core from "@nestia/core";
import { Controller } from "@nestjs/common";
import { RouteIcon, SelectBenchmark, Standalone } from "@wrtnio/decorators";

import { ApiTags } from "@nestjs/swagger";
import { IGoogleShopping } from "@wrtn/connector-api/lib/structures/connector/google_shopping/IGoogleShopping";
import { GoogleShoppingProvider } from "../../../../providers/connector/google_shopping/GoogleShoppingProvider";
import { retry } from "../../../../utils/retry";

@Controller("connector/google-shopping")
export class GoogleShoppingAmazonController {
  constructor(
    private readonly googleShoppingProvider: GoogleShoppingProvider,
  ) {}

  /**
   * Search for products on Amazon
   *  Only one keyword should be requested per request.
   * For example, If you use "phone" and "cup" as keywords, you must make two requests, each with separate keywords.
   *
   * @summary Search for Amazon
   * @param input Search criteria
   * @returns Search results
   */
  @Standalone()
  @core.TypedRoute.Patch("amazon")
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Amazon_full.svg",
  )
  @ApiTags("Amazon")
  async amazon(
    @core.TypedBody() input: IGoogleShopping.IRequestStandAlone,
  ): Promise<IGoogleShopping.IResponse[]> {
    return retry(() => this.googleShoppingProvider.amazon(input))();
  }
}
