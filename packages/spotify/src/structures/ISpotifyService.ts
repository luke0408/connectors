import { tags } from "typia";

export namespace ISpotifyService {
  export interface IProps {
    /**
     * Spotify Refresh Token.
     */
    secret: string;
  }

  /**
   * @title Search Artists Input
   *
   * Input interface for returning search results of artists.
   */
  export interface ISearchArtistsInput {
    /**
     * @title Artist Name
     *
     * The name of the artist to search for.
     */
    artistName: string;

    /**
     * @title Limit
     *
     * Limits the number of search results. Default is 10.
     */
    limit?: number &
      tags.Type<"uint64"> &
      tags.Default<10> &
      tags.Minimum<1> &
      tags.Maximum<50>;

    /**
     * @title Offset
     *
     * The index of the first item to return. Default is 0.
     */
    offset?: number &
      tags.Type<"uint64"> &
      tags.Default<0> &
      tags.Maximum<100000>;
  }

  /**
   * @title Search Artists Output
   *
   * Output interface for returning search results of artists.
   */
  export interface ISearchArtistsOutput {
    /**
     * @title Artists
     *
     * An array containing the list of searched artists.
     */
    artists: Array<ISpotifyService.Artist>;

    /**
     * @title Pagination Info
     *
     * Information about pagination for the artists.
     */
    pagination: {
      total: number; // Total number of artists
      limit: number; // Number of artists per page
      offset: number; // Current offset
    };
  }

  /**
   * @title Artist
   * 
   * Infomation about an artist.
   */
  export interface Artist {
    /**
     * @title Artist ID
     *
     * The Spotify ID of the artist.
     */
    id: string;

    /**
     * @title Artist Name
     *
     * The name of the artist.
     */
    name: string;

    /**
     * @title Genres
     *
     * A list of genres the artist belongs to.
     */
    genres: string[];

    /**
     * @title Popularity
     *
     * A score representing the popularity of the artist.
     */
    popularity: number & tags.Type<"uint32">;
  }
}
