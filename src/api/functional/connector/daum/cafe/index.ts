/**
 * @packageDocumentation
 * @module api.functional.connector.daum.cafe
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IDaum } from "../../../../structures/connector/daum/IDaum";

/**
 * 다음 카페 컨텐츠를 검색합니다.
 *
 * @summary 다음 카페 검색
 * @param input 다음 카페 검색을 위한 조건
 * @tag Daum 다음 포털 사이트
 *
 * @controller DaumController.searchCafe
 * @path POST /connector/daum/cafe
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function searchCafe(
  connection: IConnection,
  input: searchCafe.Input,
): Promise<searchCafe.Output> {
  return !!connection.simulate
    ? searchCafe.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...searchCafe.METADATA,
          path: searchCafe.path(),
        },
        input,
      );
}
export namespace searchCafe {
  export type Input = Primitive<IDaum.ISearchDaumInput>;
  export type Output = Primitive<IDaum.ICafeDaumOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/daum/cafe",
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

  export const path = () => "/connector/daum/cafe";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<IDaum.ICafeDaumOutput>> =>
    typia.random<Primitive<IDaum.ICafeDaumOutput>>(g);
  export const simulate = (
    connection: IConnection,
    input: searchCafe.Input,
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
