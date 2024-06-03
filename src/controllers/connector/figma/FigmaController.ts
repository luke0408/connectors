import core from "@nestia/core";
import { Controller } from "@nestjs/common";

import { IFigma } from "@wrtn/connector-api/lib/structures/connector/figma/IFigma";

import { FigmaProvider } from "../../../providers/figma/FigmaProvider";

@Controller("connector/figma")
export class FigmaController {
  constructor(private readonly figmaProvider: FigmaProvider) {}

  /**
   * 피그마 파일들을 가져옵니다.
   *
   * @summary 피그마 파일 가져오기.
   *
   * @returns 피그마 파일 목록
   *
   * @param input 파일을 가져오기 위한 조건 값.
   *
   * @tag figma
   */
  @core.TypedRoute.Post("get-files")
  async readFiles(
    @core.TypedBody() input: IFigma.IReadFileInput,
  ): Promise<IFigma.IReadFileOutput> {
    return this.figmaProvider.getFiles(input);
  }

  @core.TypedRoute.Post("get-comments")
  async readComments(
    @core.TypedBody() input: IFigma.IReadCommentInput,
  ): Promise<IFigma.IReadCommentOutput> {
    return null!;
  }
}
