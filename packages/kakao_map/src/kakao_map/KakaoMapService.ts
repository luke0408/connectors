import axios from "axios";
import { IKakaoMapService } from "../structures/IKakaoMapService";

export class KakaoMapService {
  constructor(private readonly props: IKakaoMapService.IProps) {}

  async searchByKeyword(
    input: IKakaoMapService.SearchByKeywordInput,
  ): Promise<IKakaoMapService.SearchByKeywordOutput> {
    try {
      const queryString = Object.entries(input)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
      const url = `https://dapi.kakao.com/v2/local/search/keyword.JSON?${queryString}`;

      const res = await axios.get(url, {
        headers: {
          Authorization: `KakaoAK ${this.props.clientId}`,
        },
      });
      return res.data;
    } catch (error) {
      console.error(JSON.stringify(error));
      throw error;
    }
  }
}
