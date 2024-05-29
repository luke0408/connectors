/**
 * @packageDocumentation
 * @module api.functional.connector.google_calendar
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { ICommon } from "../../../structures/connector/common/ISecretValue";
import type { IGoogleCalendar } from "../../../structures/connector/google_calendar/IGoogleCalendar";

export * as get_list from "./get_list";
export * as get_events from "./get_events";
export * as quick_event from "./quick_event";
export * as event from "./event";

/**
 * 구글 캘린더를 생성합니다.
 *
 * @summary 구글 캘린더 생성.
 * @param input 생성할 캘린더 제목.
 * @returns 캘린더 고유 ID와 캘린더 제목.
 * @tag Google Calendar
 * @internal
 *
 * @controller GoogleCalendarController.createCalendar
 * @path POST /connector/google-calendar
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function createCalendar(
  connection: IConnection,
  input: createCalendar.Input,
): Promise<createCalendar.Output> {
  return !!connection.simulate
    ? createCalendar.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...createCalendar.METADATA,
          path: createCalendar.path(),
        },
        input,
      );
}
export namespace createCalendar {
  export type Input = Primitive<IGoogleCalendar.ICreateCalendarInput>;
  export type Output = Primitive<IGoogleCalendar.IGoogleCalendarOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/google-calendar",
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

  export const path = () => "/connector/google-calendar";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<IGoogleCalendar.IGoogleCalendarOutput>> =>
    typia.random<Primitive<IGoogleCalendar.IGoogleCalendarOutput>>(g);
  export const simulate = (
    connection: IConnection,
    input: createCalendar.Input,
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
 * 캘린더를 삭제합니다.
 *
 * @summary 구글 캘린더 삭제.
 * @param calendarId 삭제할 캘린더 고유 ID.
 * @tag Google Calendar
 * @internal
 *
 * @controller GoogleCalendarController.deleteCalendar
 * @path DELETE /connector/google-calendar/:calendarId
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function deleteCalendar(
  connection: IConnection,
  calendarId: string,
  input: deleteCalendar.Input,
): Promise<void> {
  return !!connection.simulate
    ? deleteCalendar.simulate(connection, calendarId, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...deleteCalendar.METADATA,
          path: deleteCalendar.path(calendarId),
        },
        input,
      );
}
export namespace deleteCalendar {
  export type Input = Primitive<ICommon.ISecret<"Google">>;

  export const METADATA = {
    method: "DELETE",
    path: "/connector/google-calendar/:calendarId",
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

  export const path = (calendarId: string) =>
    `/connector/google-calendar/${encodeURIComponent(calendarId ?? "null")}`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<void>> => typia.random<Primitive<void>>(g);
  export const simulate = (
    connection: IConnection,
    calendarId: string,
    input: deleteCalendar.Input,
  ): void => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(calendarId),
      contentType: "application/json",
    });
    assert.param("calendarId")(() => typia.assert(calendarId));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
