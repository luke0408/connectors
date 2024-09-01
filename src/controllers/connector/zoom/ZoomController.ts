import core from "@nestia/core";
import { Controller } from "@nestjs/common";
import { RouteIcon, Standalone } from "@wrtnio/decorators";

import { IZoom } from "@wrtn/connector-api/lib/structures/zoom/IZoom";

import { retry } from "../../../utils/retry";
import { ZoomProvider } from "../../../providers/connector/zoom/ZoomProvider";

@Controller("connector/zoom")
export class ZoomController {
  /**
   * zoom 미팅을 생성합니다.
   *
   * @summary zoom 미팅 생성.
   * @returns 생성된 zoom 미팅 정보 DTO.
   * @param input 미팅을 생성하고자 하는 유저 정보 및 조건에 대한 DTO.
   * @tag zoom
   *
   * @internal
   */
  @Standalone()
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Zoom_full.svg",
  )
  @core.TypedRoute.Post("meetings")
  async createMeeting(
    @core.TypedBody() input: IZoom.ICreateMeetingInput,
  ): Promise<IZoom.ICreateMeetingOutput> {
    return retry(ZoomProvider.createMeeting)(input);
  }
}
