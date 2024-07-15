/**
 * @packageDocumentation
 * @module api.functional.connector.google_ads.get_ads
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IGoogleAds } from "../../../../structures/connector/google_ads/IGoogleAds";

/**
 * 구글 고객 계정의 캠페인 광고 목록을 가져와요
 *
 * @param input 광고 목록 조회 조건
 * @summary 캠페인 광고 목록을 조회합니다.
 * @returns 광고 목록
 *
 * @controller GoogleAdsController.getAds
 * @path POST /connector/google-ads/get-ads
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getAds(
  connection: IConnection,
  input: getAds.Input,
): Promise<getAds.Output> {
  return !!connection.simulate
    ? getAds.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getAds.METADATA,
          template: getAds.METADATA.path,
          path: getAds.path(),
        },
        input,
      );
}
export namespace getAds {
  export type Input = Primitive<IGoogleAds.IGetAdGroupInput>;
  export type Output = Primitive<IGoogleAds.IGetAdGroupAdsOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/google-ads/get-ads",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/connector/google-ads/get-ads";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<IGoogleAds.IGetAdGroupAdsOutput>> =>
    typia.random<Primitive<IGoogleAds.IGetAdGroupAdsOutput>>(g);
  export const simulate = (
    connection: IConnection,
    input: getAds.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(),
      contentType: "application/json",
    });
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
