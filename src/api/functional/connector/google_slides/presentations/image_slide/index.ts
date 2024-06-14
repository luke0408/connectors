/**
 * @packageDocumentation
 * @module api.functional.connector.google_slides.presentations.image_slide
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IGoogleSlides } from "../../../../../structures/connector/google_slides/IGoogleSlides";

/**
 * @controller GoogleSlidesController.appendImageSlide
 * @path PUT /connector/google-slides/presentations/:id/image-slide
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function appendImageSlide(
  connection: IConnection,
  presentationId: string,
  input: appendImageSlide.Input,
): Promise<appendImageSlide.Output> {
  return !!connection.simulate
    ? appendImageSlide.simulate(connection, presentationId, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...appendImageSlide.METADATA,
          path: appendImageSlide.path(presentationId),
        },
        input,
      );
}
export namespace appendImageSlide {
  export type Input = Primitive<IGoogleSlides.IUpdatePresentationInput>;
  export type Output = Primitive<IGoogleSlides.Presentation>;

  export const METADATA = {
    method: "PUT",
    path: "/connector/google-slides/presentations/:id/image-slide",
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

  export const path = (presentationId: string) =>
    `/connector/google-slides/presentations/${encodeURIComponent(presentationId ?? "null")}/image-slide`;
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<IGoogleSlides.Presentation>> =>
    typia.random<Primitive<IGoogleSlides.Presentation>>(g);
  export const simulate = (
    connection: IConnection,
    presentationId: string,
    input: appendImageSlide.Input,
  ): Output => {
    const assert = NestiaSimulator.assert({
      method: METADATA.method,
      host: connection.host,
      path: path(presentationId),
      contentType: "application/json",
    });
    assert.param("presentationId")(() => typia.assert(presentationId));
    assert.body(() => typia.assert(input));
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
