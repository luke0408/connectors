import core, { HumanRoute, TypedBody } from "@nestia/core";
import { Controller } from "@nestjs/common";

import { IGoogleAds } from "@wrtn/connector-api/lib/structures/connector/google_ads/IGoogleAds";

import { ApiTags } from "@nestjs/swagger";
import { RouteIcon, SelectBenchmark, Standalone } from "@wrtnio/decorators";

import { GoogleAdsProvider } from "../../../providers/connector/google_ads/GoogleAdsProvider";
import { retry } from "../../../utils/retry";

@Controller("connector/google-ads")
export class GoogleAdsController {
  /**
   * Recommend keywords for Google Ads
   *
   * In order to execute ads in Google Ads, you need to register keywords.
   * A keyword must be registered to target the end users of the ad, and it is one of the `adGroupCriteria` mapped to `adGroup` among the resources of Google Ads.
   * This connector is a function to recommend such keywords, and when the user enters the keywords and URL that he or she wanted to register, it recommends other keywords that can be derived from them.
   *
   * The request result is a list of keywords, the competition index, unit price, and the expected index values for each keyword when registering an ad.
   *
   * This connector excludes keywords for adult ads, and the language condition is set to Korean and the geographical condition is set to Korea (South Korea).
   *
   * Before calling the function, you need to ask the user for `customerId`, so you need to suggest a connector that can check `customerId`.
   *
   * @summary Create keywords using keywords and URL
   * @param input Object containing URL
   * @returns List of recommended keywords, competition index and index, and unit price information for each keyword
   */
  @SelectBenchmark("URL과 키워드 정보를 모두 이용해서 구글 광고 키워드 좀 줘")
  @HumanRoute()
  @Standalone()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Post("generateKeywordIdeas/keywordsAndUrl")
  async keywordsAndUrl(
    @TypedBody() input: IGoogleAds.IGenerateKeywordIdeaByKeywordsAndUrlInput,
  ): Promise<IGoogleAds.IGenerateKeywordIdeaOutput> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    return retry(
      () =>
        GoogleAdsProvider.generateKeywordIdeas({
          ...input,
          customerId,
        }),
      1,
    )();
  }

  /**
   * Get keyword recommendations for Google Ads
   *
   * In order to execute ads in Google Ads, you need to register keywords.
   * A keyword must be registered to target the end users of the ad, and it is one of the `adGroupCriteria` mapped to `adGroup` among the resources of Google Ads.
   * This connector is a function to recommend such keywords, and when the user enters the keywords that he or she wanted to register, it recommends other keywords that can be derived from them.
   *
   * The request result is a list of keywords, the competition index, unit price, and the expected index values when registering an ad for each keyword.
   *
   * This connector excludes keywords for adult ads, and the language condition is set to Korean and the geographical condition is set to Korea (South Korea).
   *
   * Before calling the function, you need to ask the user for `customerId`, so you need to suggest a connector that can check `customerId`.
   *
   * @summary Create keywords using keywords
   * @param input Object containing URL
   * @returns List of recommended keywords, competition index and index, and unit price information for each keyword
   */
  @SelectBenchmark("키워드 기반으로 광고 키워드 아이디어 좀 줘")
  @HumanRoute()
  @Standalone()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Post("generateKeywordIdeas/keywords")
  async keywords(
    @TypedBody() input: IGoogleAds.IGenerateKeywordIdeaByKeywordsInput,
  ): Promise<IGoogleAds.IGenerateKeywordIdeaOutput> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    return retry(
      () =>
        GoogleAdsProvider.generateKeywordIdeas({
          ...input,
          customerId,
        }),
      1,
    )();
  }

  /**
   * Get keyword recommendations for Google Ads
   *
   * In order to execute ads in Google Ads, you need to register keywords.
   * A keyword must be registered to target the end users of the ad, and it is one of the `adGroupCriteria` mapped to `adGroup` among the resources of Google Ads.
   * This connector is a function to recommend such keywords, and when the user enters the URL that he or she wanted to register, it recommends other keywords that can be derived from it.
   *
   * The request result is a list of keywords, competition index, unit price, and expected index values for each keyword when registering an ad.
   *
   * This connector excludes keywords for adult ads, and the language condition is set to Korean and the geographical condition is set to Korea (South Korea).
   *
   * Before calling the function, you need to ask the user for `customerId`, so you need to suggest a connector that can check `customerId`.
   *
   * @summary Create keywords through URL
   * @param input Object containing the URL
   * @returns List of recommended keywords, competition index and index, and unit price information for each keyword
   */
  @SelectBenchmark("URL 기반으로 광고 키워드 아이디어 좀 줘")
  @HumanRoute()
  @Standalone()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Post("generateKeywordIdeas/url")
  async url(
    @TypedBody() input: IGoogleAds.IGenerateKeywordIdeaByURLInput,
  ): Promise<IGoogleAds.IGenerateKeywordIdeaOutput> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    return retry(
      () =>
        GoogleAdsProvider.generateKeywordIdeas({
          ...input,
          customerId,
        }),
      1,
    )();
  }

  /**
   * Designate Wrtn as the advertising account manager of the user
   *
   * To call the Google Ads API for a specific Google account, you must own the advertising account or be registered as an administrator.
   * This connector is a connector that sends a kind of invitation to all of the user's Google advertising accounts to register the `Wrtn` advertising account as the customer's administrator.
   * After the connector is executed, an email registered to the customer account will be sent via Gmail.
   * Those who receive the email can go to the dashboard through the email and give the `Wrtn` account administrator rights.
   * If `Wrtn` is registered as an administrator, he will be able to use other APIs created in Google Ads.
   *
   * This administrator designation must be done before calling all Google Ads connectors except for connectors that do not receive `customerId` as an argument, such as keyword recommendations.
   * However, even if this connector is called, `Wrtn` will not be designated as an administrator without the user's approval, so there is no need to worry.
   *
   * Before calling the function, we need to ask the user for his `customerId`, so we need to suggest a connector that can check `customerId`.
   *
   * @summary Register Wrtn as an administrator
   * @param input Customer information
   */
  @SelectBenchmark("Wrtn 광고 계정에 내 계정 등록하게 링크 좀 줘")
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Post("customerClientLink")
  async publish(@TypedBody() input: IGoogleAds.ISecret): Promise<void> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    return GoogleAdsProvider.publish({ ...input, customerId });
  }

  /**
   * Get the customer's advertising account
   *
   * Using the user's access token, search for the user's advertising account, i.e., `customer`, among the accounts where `Wrtn` is an administrator.
   * Even if the user has an advertising account, if `Wrtn` is not an administrator, it will not be listed.
   * Therefore, if `Wrtn` has never been registered as an administrator, you must call the `POST connector/google-ads/customerClientLink` connector.
   *
   * In addition, this connector filters out advertising accounts that do not use the Korean currency unit `KRW`.
   * The reason for this is to prevent mistakes from occurring in other campaign budget modification or ad status change connectors in the future.
   * When creating ads through the Google Ads connector, human errors may occur in budget settings depending on the currency unit of each account.
   * For example, if you register a budget for an account with a currency unit of `USD` as an account with a currency unit of `KRW`, a budget difference of the exchange rate may occur.
   *
   * Before calling the function, we need to ask the user for his `customerId`, so we need to suggest a connector that can check `customerId`.
   *
   * @summary Get ad account
   * @param input Customer information
   * @returns List of ad accounts
   */
  @SelectBenchmark("내 구글 광고 계정 좀 보여줘")
  @Standalone()
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Patch("get-customers")
  async getCustomers(
    @TypedBody() input: IGoogleAds.IGetCustomerInput,
  ): Promise<IGoogleAds.IGetCustomerOutput> {
    return GoogleAdsProvider.getCustomers(input);
  }

  /**
   * Get a list of campaigns for a Google customer account
   *
   * Pass `customerId` to the user and search for campaigns in the customer's advertising account.
   * If `customerId` is not passed, `Wrtn` will automatically select only one advertising account that the user can access.
   * A campaign corresponds to `campaign` among Google resources and is in charge of advertising channels, budgets, and the start and end dates of advertising execution.
   * A channel refers to Google advertising products such as responsive search ads (=responsive search ads) and responsive display ads (=responsive display ads).
   * If a campaign is a search ad, there are only search ads in the ad group and ads.
   * A user can use this connector to search for their campaigns and the status of the campaigns, and create ad groups for the desired campaigns, etc., for subsequent actions.
   *
   * Before calling the function, you should ask the user for `customerId`, so you should suggest a connector that can check `customerId`.
   *
   * @summary Search for a list of campaigns
   * @param input Customer information
   * @returns List of campaigns
   */
  @SelectBenchmark("내 구글 광고 캠페인들 보여줘")
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Patch("get-campaigns")
  async getCampaigns(
    @TypedBody() input: IGoogleAds.IGetCampaignsInput,
  ): Promise<IGoogleAds.IGetCampaignsOutput> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    return GoogleAdsProvider.getCampaigns({ ...input, customerId });
  }

  /**
   * Get a list of ad groups in a Google customer account
   *
   * Pass `customerId` to the user and search for ad groups (=adGroup) in the customer ad account.
   * If `customerId` is not passed, it will automatically select only one ad account that `Wrtn` can access from the user.
   * If `campaignId` is also passed, it will search only the child ad groups of the campaign.
   * Ad groups are the area in charge of targeting and are also the parents of ads (ads).
   * The result of this connector contains simple information about the campaign that is the parent of the ad group, information about the ad group,
   * a list of ads belonging to the ad group, their current status, and simple information.
   * It also contains information about keywords connected to the ad group.
   *
   * Before calling the function, you should ask the user for `customerId`, so you should suggest a connector that can check `customerId`.
   *
   * @summary Search for a list of ad groups. @param input Ad group list query condition
   * @returns Ad group list
   */
  @SelectBenchmark("내 구글 광고 그룹들 보여줘")
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Patch("get-ad-groups")
  async getAdGroups(
    @TypedBody() input: IGoogleAds.IGetAdGroupInput,
  ): Promise<IGoogleAds.IGetAdGroupOutput> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    return GoogleAdsProvider.getAdGroupDetails({ ...input, customerId });
  }

  /**
   * Get the list of ads from the Google customer account
   *
   * Pass the `customerId` to the user and search for the ads (=ad) in the customer's ad account.
   * If `customerId` is not passed, it will be automatically selected only if there is only one ad account accessible to `Wrtn` from the user.
   * An ad is a node at the end of a tree structure consisting of campaigns, ad groups, and ads, and is a section in charge of materials,
   * and is also a unit exposed to end users.
   * If the resource name of an ad group (=adGroup) is passed as an argument, only the ads belonging to that ad group will be searched.
   * The purpose of this connector is to determine whether the user's ad is currently running or not.
   * In the case of `Wrtn` managers, campaigns and ad groups are not changed to `PAUSED` status unless the user directly changes the campaign and ad group status in the Google Ads dashboard.
   * Therefore, in general, if the ad status is `ENABLED`, the ad is running, and if it is `PAUSED`, the ad is stopped. Again, the `Wrtn` connector does not change the status of a campaign or ad group.
   *
   * This function can also be used to check whether an ad is being properly executed in addition to viewing the ad.
   *
   * Each ad has an evaluation history for ad review and policy, which exists as a property called `PolicySummary`.
   *
   * This property contains whether the ad has been approved, and the `APPROVED` status means that Google has approved the review and determined it is eligible.
   *
   * You can change the ad status in `PATCH connector/google-ads/campaigns/ads/status`.
   *
   * Before calling the function, you should ask the user for their `customerId`, so you should suggest a connector that can check their `customerId`.
   *
   * @summary Retrieves a list of campaign ads
   * @param input Condition for retrieving the ad list
   * @returns Ad list
   */
  @SelectBenchmark("내 구글 캠페인 내부에 있는 광고 그룹, 광고 목록을 보여줘")
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Patch("get-ads")
  async getAds(
    @TypedBody() input: IGoogleAds.IGetAdGroupAdInput,
  ): Promise<IGoogleAds.IGetAdGroupAdOutput> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    return GoogleAdsProvider.getAdGroupAds({ ...input, customerId });
  }

  /**
   * View metrics per Google customer account ad
   *
   * Pass `customerId` to the user and view statistical metrics for the customer ad group.
   * If `customerId` is not passed, `Wrtn` will automatically select only one ad account that the user can access.
   * Users can view ad metrics for a specific date through this connector,
   * and these metrics include impressions, clicks, video views, views based on video playback range, and average page count.
   * You can also check simple information about the searched content, such as the resource name of the ad group.
   * In addition, `costMicros` information is provided, which is the advertising expenditure in micro units and means the amount actually executed.
   * If this figure is `1,000,000`, if the currency unit is `KRW`, 1 won was used.
   * This figure is the actual amount used, unlike the campaign budget, and according to Google policy, advertising costs may be slightly more than the budget. Also, the total spend of the ad group in the campaign must be equal to the total spend of the campaign.
   *
   * This connector allows the user to check whether their ads are being executed efficiently in terms of cost and performance.
   *
   * Before calling the function, you should ask the user for `customerId`, so you should suggest a connector that can check `customerId`.
   *
   * @summary Get the performance (metrics) of the ad group
   * @param input Ad metrics query conditions
   * @returns List of metrics
   */
  @SelectBenchmark("광고 성과 좀 보여줘")
  @SelectBenchmark("내 구글 광고 지표 좀 보여줘")
  @SelectBenchmark("내 구글 광고 통계 좀 보여줘")
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Patch("ad-groups/get-metrics")
  async getMetrics(
    @TypedBody() input: IGoogleAds.IGetMetricInput,
  ): Promise<IGoogleAds.IGetMetricOutputResult[]> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    return GoogleAdsProvider.getMetrics({ ...input, customerId });
  }

  /**
   * Add search keywords to ads in Google customer accounts
   *
   * Strictly speaking, add ad keywords to ad groups (=adGroup).
   *
   * For convenience, this connector receives the resource name of the ad, finds the parent ad group of the ad, and then inserts the keyword.
   * The result value of this connector helps users check whether all keywords have been added properly by re-checking them after adding the keyword.
   * However, not all keywords added are used in ads.
   * Keywords are reviewed by Google and used for targeting, and at this time, keywords may be excluded from ad keywords due to inappropriate reviews.
   * However, since ads will work properly if there are other keywords, it is advantageous to register various keywords so that users can be attracted.
   *
   * There are also recommended connectors for keywords.
   *
   * This connector receives an ad account as an argument from the user as authentication for the customer account, but this is also optional.
   *
   * If `customerId` is not passed, it is automatically selected only if `Wrtn` has only one ad account accessible to the user.
   *
   * Before calling the function, we need to ask the user for `customerId`, so we need to suggest a connector that can check `customerId`.
   *
   * @summary Add keywords to the ad
   * @param input Add keyword condition
   * @returns List of keywords
   */
  @SelectBenchmark("내가 등록한 구글 광고 키워드 목록 좀 보여줄래?")
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Patch("campaigns/ads/get-keywords")
  async getKeywords(
    @TypedBody() input: IGoogleAds.IGetKeywordsInput,
  ): Promise<IGoogleAds.IGetKeywordsOutput> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    return GoogleAdsProvider.getKeywords({ ...input, customerId });
  }

  /**
   * Change the ad status of a Google customer account
   *
   * Change the ad status by receiving the ID of the ad account and the resource name of the ad in the ad group (=`adGroupAd```ResourceName`).
   *
   * If `customerId` is not passed, it is automatically selected only if there is only one ad account that `Wrtn` can access from the user.
   *
   * The ad status supported by this connector is `ENABLED` and `PAUSED`, which means the execution and suspension of the ad, respectively.
   * Since the `Wrtn` manager account only changes the status of the ad without changing the status of the campaign and ad group,
   * unless the user changes the status of the campaign and ad group directly in the Google Ads dashboard, the ad status means whether or not spending occurs.
   * If the user wants to change the status of the ad group, instead of changing the status of the ad group, query the ad group and change the status of all ads in the ad group.
   * If the user wants to change the status of the campaign, instead of changing the status of the campaign, query the campaign and change the status of all ads in the campaign. However, if you change the status of a campaign, you must go down the campaign and ad group in the Google Ads ad structure and terminate all ads.
   *
   * Also, our connector does not support deleting ads.
   *
   * If there is a user who wants to delete a campaign, ad group, or ad, we recommend changing all child ads of the corresponding node to the `PAUSED` status.
   *
   * Since deleting an ad means losing the means to check previous performance and indicators, it is advantageous to terminate the ad instead of deleting it for future ad re-execution.
   *
   * Before calling the function, you must ask the user for `customerId`, so you must suggest a connector that can check `customerId`.
   *
   * @summary Change the status of the ad
   * @param input The status of the ad to be changed
   */
  @SelectBenchmark("구글 광고 꺼줘")
  @SelectBenchmark("구글 광고 켜줘")
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Put("campaigns/ads/status")
  async setOnOff(@TypedBody() input: IGoogleAds.ISetOnOffInput): Promise<void> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    return GoogleAdsProvider.updateAd({ ...input, customerId });
  }

  /**
   * Delete keywords from specific ads in Google customer account
   *
   * Receive the resource name of keyword (=`AdGroupCriterion`) from the user and delete all of them.
   * Keywords are `AdGroupCriterion` whose `type` is `KEYWORD`, so you should be careful because there may be other types of resources.
   * If all keywords are deleted in an ad, you should be careful because deleting keywords may affect ad execution, etc.
   *
   * In addition, if you delete keywords from an ad, other ads that share the ad group that is the parent of the ad may also be affected.
   *
   * If `customerId` is not passed, `Wrtn` will automatically select only one ad account that the user can access.
   *
   * Before calling the function, you should ask the user for `customerId`, so you should suggest a connector that can check `customerId`.
   *
   * @summary Delete keywords from an ad
   * @param input Keyword deletion condition
   * @returns
   */
  @SelectBenchmark("구글 광고 키워드 지워줘")
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Delete("campaigns/ads/keywords")
  async deleteKeywords(
    @TypedBody() input: IGoogleAds.IDeleteAdGroupCriteriaInput,
  ): Promise<void> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    return GoogleAdsProvider.deleteKeywords({ ...input, customerId });
  }

  /**
   * Add search keywords to ads in Google customer accounts
   *
   * Strictly speaking, add keywords to the ad group (=adGroup), which is the parent of the ad.
   * Since keywords are added to ad groups, they are applied to all child ads.
   *
   * If `customerId` is not passed, it is automatically selected only if there is only one ad account accessible to `Wrtn` from the user.
   *
   * Before calling the function, you should ask the user for `customerId`, so you should suggest a connector that can check `customerId`.
   *
   * @summary Add keywords to ads
   * @param input Condition for adding keywords
   * @returns Name of the added keyword resource
   */
  @SelectBenchmark("구글 광고 키워드 추가해줘")
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Post("campaigns/ads/keywords")
  async addKeywords(
    @TypedBody() input: IGoogleAds.ICreateAdGroupCriteriaInput,
  ): Promise<IGoogleAds.ICreateAdGroupCriteriaOutput> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    const { adGroupResourceName, ...rest } = input;
    return GoogleAdsProvider.createAdGroupCriteria(adGroupResourceName, {
      ...rest,
      customerId,
    });
  }

  /**
   * View ad details
   *
   * Depending on the campaign, it is either a responsive search ad or a responsive display ad.
   *
   * If `customerId` is not passed, it will be automatically selected only if the user has only one ad account that `Wrtn` can access.
   *
   * Before calling the function, you should ask the user for `customerId`, so you should suggest a connector that can check `customerId`.
   *
   * @summary View ad details
   * @param input Conditions for viewing ad details
   * @returns Ad details
   */
  @SelectBenchmark("구글 광고 상세 조회해줘")
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Patch("campaigns/ads/get-details")
  async getAdGroupAdDetail(
    @TypedBody() input: IGoogleAds.IGetAdGroupAdDetailInput,
  ): Promise<IGoogleAds.IGetAdGroupAdDetailOutput> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    return GoogleAdsProvider.getAdGroupAdDetail({ ...input, customerId });
  }

  /**
   * Create an ad for a Google customer account
   *
   * The `Wrtn` manager creates one ad per ad group for convenience.
   * Therefore, this connector does not receive the resource name or ID of the ad group (=adGroup) to create the ad, and the ad group is created first when creating the ad.
   * Since the types of ads that can be created depend on the campaign, you must create them after checking the campaign.
   * For example, search ads must be created in a search campaign.
   *
   * If `customerId` is not passed, `Wrtn` will automatically select only one ad account that the user can access.
   *
   * The ad is immediately moved to the review stage after creation, and if Google's review is passed, the ad will be executed and expenses will be incurred.
   * However, when creating an ad with this connector, the ad status is set to `PAUSED`.
   * This is to allow users to check the campaign, ad group, ad, etc. again to check if they have been created in the desired state in case of an emergency.
   * Therefore, even if the ad review is complete, the ad will not be executed, and no performance or expenses will be incurred. If the ad is checked to be correct, the user can change the ad status to `ENABLED` using the `ad edit connector`.
   *
   * Before calling the function, you should ask the user for `customerId`, so you should suggest a connector that can check `customerId`.
   *
   * @summary Create an ad
   * @param input Ad creation conditions
   * @returns Generated ad information
   */
  @SelectBenchmark("캠페인 광고 생성해줘")
  @SelectBenchmark("캠페인에 광고 생성해줘")
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Post("campaigns/ads")
  async appendAd(
    @TypedBody()
    input: IGoogleAds.ICreateAdGroupAdInput,
  ): Promise<IGoogleAds.IGetAdGroupsOutputResult> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    return GoogleAdsProvider.createAd({ ...input, customerId });
  }

  /**
   * Edit an ad campaign for your Google customer account
   *
   * Edit a campaign.
   * The only things you can edit in a campaign are the campaign name, budget, and end date.
   * The campaign name is a value for people to recognize and has no effect on the ad, so you can specify it as you like.
   * For the budget, you can enter the budget you want to advertise in Korean Won (KRW), and in this case, the daily ad spending will be formed above and below the budget.
   * In some cases, you may spend more than the budget, or if the ad optimization is not done, you may spend less than the budget.
   * The last end date can be used as a scheduled end date because the ad will not end and will continue to run if it is not specified.
   * However, if you do not delete the end date that you have already specified, the ad may not be executed even if you turn it on later.
   * If you want to turn on the ad for a campaign that has ended, you must also change the campaign's scheduled end date.
   *
   * If you do not pass `customerId`, it will be automatically selected only if there is only one ad account that `Wrtn` can access from the user.
   *
   * Before calling the function, we need to ask the user for `customerId`, so we need to suggest a connector that can check `customerId`.
   *
   * Originally, there is no amount limit, but in case of an emergency, we currently limit the function to 100,000 won per campaign.
   *
   * @summary Modify the campaign
   * @param input Campaign modification conditions
   */
  @SelectBenchmark("캠페인 수정해줘")
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Put("campaigns")
  async updateCampaign(
    @TypedBody() input: IGoogleAds.IUpdateCampaignInput,
  ): Promise<void> {
    const { secretKey, ...rest } = input; // secretKey가 updateCampaign에 들어가면 에러가 발생한다.

    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    return GoogleAdsProvider.updateCampaign({ ...rest, customerId });
  }

  /**
   * Create an ad campaign for your Google customer account
   *
   * Create a campaign (=campaign).
   * A campaign is located under an account in Google Ads, and is located at the top of the tree structure consisting of campaigns, ad groups, and ads.
   * A campaign is a parent object for grouping ad groups, and is responsible for the duration, budget, purpose, channel, etc. of the ad.
   * If you do not specify a campaign name, a random name will be assigned. In this case, it may be difficult to identify.
   * Therefore, it is recommended to give different names to each campaign according to its purpose so that you can distinguish them.
   * The name of the campaign is only for the user to easily identify, and does not affect the effectiveness of the ad at all, so you can rest assured.
   *
   * If you do not pass `customerId`, it will be automatically selected only if there is only one ad account accessible to `Wrtn` from the user.
   *
   * You should ask the user for `customerId` before calling the function, so you should suggest a connector that can check `customerId`.
   *
   * Originally, there was no limit on the amount, but in preparation for an emergency, the function is currently limited to 100,000 won per campaign.
   *
   * @summary Create a campaign
   * @param input Campaign creation conditions
   * @returns Created campaign information
   */
  @SelectBenchmark("캠페인 생성해줘")
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Post("campaigns")
  async createCampaign(
    @TypedBody() input: IGoogleAds.ICreateCampaignInput,
  ): Promise<IGoogleAds.ICreateCampaignsOutput> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    return GoogleAdsProvider.createCampaign({ ...input, customerId });
  }

  /**
   * Create search ads in Google customer accounts at once
   *
   * Creating Google ads at once means creating campaigns, ad groups, and ads that exist in the Google Ads tree structure at once.
   *
   * In this case, you do not need to specify which campaign to create ads for.
   *
   * This is because everything from the first resource, the campaign, to the ad is created at once.
   *
   * The campaign tree structure of Google Ads is such that the top campaign node is in charge of the budget, and when the ad is optimized, the ad group and ad share the budget of the campaign.
   * In simple terms, this means that the ad within the campaign learns and optimizes itself to determine which ad will be exposed to the end user.
   *
   * Therefore, it is easy to create ads in the connector structure that creates them at once, but it may not be suitable if you want to create multiple ads.
   *
   * However, if you have multiple ad materials and do not intend to create and compare multiple ads, it will be very convenient because you can easily execute the ad.
   *
   * In most cases, there is no problem creating ads in this way.
   *
   * If `customerId` is not passed, it is automatically selected only if there is only one ad account accessible to `Wrtn` from the user.
   *
   * The ad is immediately reviewed after being created, and if Google's review is passed, the ad will be executed and expenses will be incurred.
   * However, if an ad is created with this connector, the ad status is set to `PAUSED`.
   * This is to prepare for an emergency so that the user can check the campaign, ad group, ad, etc. again to see if they are in the desired state.
   * Therefore, even if the ad review is complete, the ad will not be executed and no performance or expenses will be incurred.
   *
   * If the ad is checked to be correct, the user can change the ad status to `ENABLED` using the `Ad Edit Connector`.
   *
   * Before calling the function, you should ask the user for `customerId`, so you should suggest a connector that can check `customerId`.
   *
   * Originally, there was no amount limit, but in preparation for an emergency, the function is currently limited to 100,000 won per campaign.
   *
   * @summary Create responsive search ads for your Google customer account all at once
   * @param input Conditions for creating ads from campaigns all at once
   * @returns Information from created campaigns to ads
   */
  @SelectBenchmark("검색 광고 생성해줘")
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Post("search-ads")
  async createSearchAd(
    @TypedBody()
    input: IGoogleAds.ICreateAdGroupSearchAdAtOnceInput,
  ): Promise<IGoogleAds.ICreateAdGroupAdAtOnceOutput> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    const { campaign, campaignBudget } = await GoogleAdsProvider.createCampaign(
      {
        ...input.campaign,
        advertisingChannelType: "SEARCH",
        customerId,
      },
    );

    const ad = await GoogleAdsProvider.createAd({
      ...input.ad,
      customerId: customerId,
      campaignResourceName: campaign.resourceName,
      type: `SEARCH_STANDARD`,
    });

    return { campaign, campaignBudget, ad };
  }

  /**
   * Create display ads in your Google customer account at once
   *
   * Creating Google ads at once means creating campaigns, ad groups, and ads that exist in the Google Ads tree structure at once.
   *
   * In this case, you do not need to specify which campaign to create ads for.
   *
   * This is because everything from the first resource, the campaign, to the ad is created at once.
   *
   * The campaign tree structure of Google Ads is such that the top campaign node is in charge of the budget, and when the ad is optimized, the ad group and ad share the budget of the campaign.
   * In simple terms, this means that the ad within the campaign learns and optimizes itself to determine which ad will be exposed to the end user.
   *
   * Therefore, it is easy to create ads in the connector structure that creates them at once, but it may not be suitable if you want to create multiple ads.
   *
   * However, if you have multiple ad materials and do not intend to create and compare multiple ads, it will be very convenient because you can easily execute the ad.
   *
   * In most cases, there is no problem creating ads in this way.
   *
   * If `customerId` is not passed, it is automatically selected only if there is only one ad account accessible to `Wrtn` from the user.
   *
   * The ad is immediately reviewed after being created, and if Google's review is passed, the ad will be executed and expenses will be incurred.
   * However, if an ad is created with this connector, the ad status is set to `PAUSED`.
   * This is to prepare for an emergency so that the user can check the campaign, ad group, ad, etc. again to see if they are in the desired state.
   * Therefore, even if the ad review is complete, the ad will not be executed and no performance or expenses will be incurred.
   *
   * If the ad is checked to be correct, the user can change the ad status to `ENABLED` using the `Ad Edit Connector`.
   *
   * Before calling the function, you should ask the user for `customerId`, so you should suggest a connector that can check `customerId`.
   *
   * Originally, there was no amount limit, but in preparation for an emergency, the function is currently limited to 100,000 won per campaign.
   *
   * @summary Create responsive display ads in Google Account Ads at once
   * @param input Conditions for creating ads from campaigns at once
   * @returns Information from created campaigns to ads
   */
  @SelectBenchmark("디스플레이 광고 생성해줘")
  @HumanRoute()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icons/google_ads.svg",
  )
  @ApiTags("Google Ads")
  @core.TypedRoute.Post("display-ads")
  async createDisplayAd(
    @TypedBody()
    input: IGoogleAds.ICreateAdGroupDisplayAdAtOnceInput,
  ): Promise<IGoogleAds.ICreateAdGroupAdAtOnceOutput> {
    const customerId = await GoogleAdsProvider.getTargetCustomerId(input);
    const { campaign, campaignBudget } = await GoogleAdsProvider.createCampaign(
      {
        ...input.campaign,
        advertisingChannelType: "DISPLAY",
        customerId,
      },
    );

    const ad = await GoogleAdsProvider.createAd({
      ...input.ad,
      customerId: customerId,
      campaignResourceName: campaign.resourceName,
      type: `DISPLAY_STANDARD`,
    });

    return { campaign, campaignBudget, ad };
  }
}
