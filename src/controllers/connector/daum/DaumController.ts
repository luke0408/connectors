import core from "@nestia/core";
import { Controller } from "@nestjs/common";
import { RouteIcon, Standalone } from "@wrtnio/decorators";

import { IDaum } from "@wrtn/connector-api/lib/structures/connector/daum/IDaum";

import { DaumProvider } from "../../../providers/connector/daum/DaumProvider";
import { retry } from "../../../utils/retry";

@Controller("connector/daum")
export class DaumController {
  /**
   * 다음 블로그 컨텐츠를 검색합니다.
   *
   * @summary 다음 블로그 검색
   * @param input 다음 블로그 검색을 위한 조건
   */
  @Standalone()
  @core.TypedRoute.Post("blog")
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/DaumBlog_full.svg",
  )
  async searchBlog(
    @core.TypedBody() input: IDaum.ISearchDaumInput,
  ): Promise<IDaum.IBlogDaumOutput> {
    return retry(() => DaumProvider.searchBlog(input))();
  }

  /**
   * 다음 카페 컨텐츠를 검색합니다.
   *
   * @summary 다음 카페 검색
   * @param input 다음 카페 검색을 위한 조건
   */
  @Standalone()
  @core.TypedRoute.Post("cafe")
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/DaumCafe_full.svg",
  )
  async searchCafe(
    @core.TypedBody() input: IDaum.ISearchDaumInput,
  ): Promise<IDaum.ICafeDaumOutput> {
    return retry(() => DaumProvider.searchCafe(input))();
  }
}
