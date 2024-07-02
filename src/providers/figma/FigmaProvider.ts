import { Injectable } from "@nestjs/common";
import axios from "axios";

import { IFigma } from "@wrtn/connector-api/lib/structures/connector/figma/IFigma";

@Injectable()
export class FigmaProvider {
  async getFiles(
    input: IFigma.IReadFileInput,
  ): Promise<IFigma.IReadFileOutput> {
    const { secretKey, fileKey, ...getFileQueryParams } = input;
    const queryParams = Object.entries(getFileQueryParams)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    try {
      const res = await axios.get(
        `https://api.figma.com/v1/files/${fileKey}?${queryParams}`,
        {
          headers: {
            "X-Figma-Token": secretKey,
          },
        },
      );
      return res.data;
    } catch (err) {
      console.log("err", err);
      throw err;
    }
  }

  async addComment(input: IFigma.IAddCommentInput) {
    const { secretKey, fileKey, ...requestBody } = input;

    try {
      const res = await axios.post(
        `https://api.figma.com/v1/files/${fileKey}/comments`,
        requestBody,
        {
          headers: {
            "X-Figma-Token": secretKey,
          },
        },
      );
      return res.data;
    } catch (err) {
      console.log("err", err);
      throw err;
    }
  }

  async getComments(
    input: IFigma.IReadCommentInput,
  ): Promise<IFigma.IReadCommentOutput> {
    const { fileKey, secretKey, ...getCommentQueryParam } = input;
    const queryParams = Object.entries(getCommentQueryParam)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    try {
      const res = await axios.get(
        `https://api.figma.com/v1/files/${fileKey}/comments?${queryParams}`,
        {
          headers: {
            "X-Figma-Token": secretKey,
          },
        },
      );
      return res.data;
    } catch (err) {
      console.log("err", err);
      throw err;
    }
  }
}
