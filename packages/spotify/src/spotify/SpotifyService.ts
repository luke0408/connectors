import axios from "axios";
import { ISpotifyService } from "../structures/ISpotifyService";

export class SpotifyService {
  constructor(private readonly props: ISpotifyService.IProps) {}

  /**
   * Spotify Service.
   * 
   * Search Artists.
   */
  async searchArtists(
    input: ISpotifyService.ISearchArtistsInput,
  ): Promise<ISpotifyService.ISearchArtistsOutput> {
    try {
      const headers = await this.getHeaders();
      const response = await axios.get("https://api.spotify.com/v1/search", {
        headers: headers,
        params: {
          q: input.artistName,
          type: "artist",
          limit: input.limit ?? 10,
        },
      });

      const artists = response.data.artists.items;
      const pagination = {
        total: response.data.artists.total,
        limit: response.data.artists.limit,
        offset: response.data.artists.offset,
      };

      return { artists, pagination };
    } catch (error) {
      console.error(JSON.stringify(error));
      throw error;
    }
  }

  private async getHeaders() {
    return {
      "content-type": "application/json",
      Authorization: `Bearer ${this.props.secret}`,
      accept: "applicatoin/json",
    };
  }
}
