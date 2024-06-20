/**
 * @packageDocumentation
 * @module api.functional.connector.open_data
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IOpenData } from "../../../structures/connector/open_data/IOpenData";

/**
 * 오늘 날씨를 조회합니다.
 *
 * @summary 기상청 오늘 날씨 조회.
 * @param input 날씨 조회를 위한 위치 정보 DTO.
 * @returns 해당 지역의 기상 정보.
 *
 * @controller OpenDataController.getShortTermForecast
 * @path POST /connector/open-data/getShortTermForecast
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getShortTermForecast(
  connection: IConnection,
  input: getShortTermForecast.Input,
): Promise<getShortTermForecast.Output> {
  return !!connection.simulate
    ? getShortTermForecast.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...getShortTermForecast.METADATA,
          template: getShortTermForecast.METADATA.path,
          path: getShortTermForecast.path(),
        },
        input,
      );
}
export namespace getShortTermForecast {
  export type Input =
    Primitive<IOpenData.IKoreaMeteorologicalAdministration.IGetVillageForecastInformationInput>;
  export type Output =
    Primitive<IOpenData.IKoreaMeteorologicalAdministration.IGetVillageForecastInformationOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/open-data/getShortTermForecast",
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

  export const path = () => "/connector/open-data/getShortTermForecast";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<
    Primitive<IOpenData.IKoreaMeteorologicalAdministration.IGetVillageForecastInformationOutput>
  > =>
    typia.random<
      Primitive<IOpenData.IKoreaMeteorologicalAdministration.IGetVillageForecastInformationOutput>
    >(g);
  export const simulate = (
    connection: IConnection,
    input: getShortTermForecast.Input,
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
