/**
 * @packageDocumentation
 * @module api.functional.connector.google_ads.generateKeywordIdeas
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IGoogleAds } from "../../../../structures/connector/google_ads/IGoogleAds";

/**
 * 구글 광고를 위한 키워드를 추천받아요!
 *
 * @summary 키워드를 통한 키워드 생성
 * @param input URL을 담은 객체
 * @returns 생성된 키워드
 *
 * @controller GoogleAdsController.keywords
 * @path POST /connector/google-ads/generateKeywordIdeas/keywords
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function keywords(
  connection: IConnection,
  input: keywords.Input,
): Promise<keywords.Output> {
  return !!connection.simulate
    ? keywords.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...keywords.METADATA,
          template: keywords.METADATA.path,
          path: keywords.path(),
        },
        input,
      );
}
export namespace keywords {
  export type Input = Primitive<IGoogleAds.IGenerateKeywordIdeaByKeywordsInput>;
  export type Output = Primitive<IGoogleAds.IGenerateKeywordIdeaOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/google-ads/generateKeywordIdeas/keywords",
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

  export const path = () =>
    "/connector/google-ads/generateKeywordIdeas/keywords";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<IGoogleAds.IGenerateKeywordIdeaOutput>> =>
    typia.random<Primitive<IGoogleAds.IGenerateKeywordIdeaOutput>>(g);
  export const simulate = (
    connection: IConnection,
    input: keywords.Input,
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

/**
 * 구글 광고를 위한 키워드를 추천받아요!
 *
 * @summary URL을 통한 키워드 생성
 * @param input URL을 담은 객체
 * @returns 생성된 키워드
 *
 * @controller GoogleAdsController.url
 * @path POST /connector/google-ads/generateKeywordIdeas/url
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function url(
  connection: IConnection,
  input: url.Input,
): Promise<url.Output> {
  return !!connection.simulate
    ? url.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...url.METADATA,
          template: url.METADATA.path,
          path: url.path(),
        },
        input,
      );
}
export namespace url {
  export type Input = Primitive<IGoogleAds.IGenerateKeywordIdeaByURLInput>;
  export type Output = Primitive<IGoogleAds.IGenerateKeywordIdeaOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/google-ads/generateKeywordIdeas/url",
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

  export const path = () => "/connector/google-ads/generateKeywordIdeas/url";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<IGoogleAds.IGenerateKeywordIdeaOutput>> =>
    typia.random<Primitive<IGoogleAds.IGenerateKeywordIdeaOutput>>(g);
  export const simulate = (
    connection: IConnection,
    input: url.Input,
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
