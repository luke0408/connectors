/**
 * @packageDocumentation
 * @module api.functional.connector.daum.blog
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { IDaum } from "../../../../structures/connector/daum/IDaum";

/**
 * 다음 블로그 컨텐츠를 검색합니다.
 *
 * @summary 다음 블로그 검색
 * @param input 다음 블로그 검색을 위한 조건
 * @tag Daum 다음 포털 사이트
 * @tag 다음 블로그
 * @tag 블로그
 * @tag 블로그 작성
 * @tag 블로그 트래픽
 * @tag 블로그 마케팅
 * @tag 블로그 SEO
 * @tag 블로그 통계
 * @tag 블로그 공유
 * @tag 블로그 댓글
 * @tag 블로그 팔로우
 * @tag 블로그 검색
 * @tag 블로그 포스팅
 * @tag 블로그 이미지
 * @tag 블로그 동영상
 * @tag 블로그 업로드
 * @tag 블로그 글쓰기
 * @tag 블로그 수익화
 * @tag 블로그 방문자
 * @tag 블로그 피드
 * @tag Daum Blog
 * @tag Blog
 * @tag Blog Writing
 * @tag Blog Traffic
 * @tag Blog Marketing
 * @tag Blog SEO
 * @tag Blog Statistics
 * @tag Blog Sharing
 * @tag Blog Comments
 * @tag Blog Follow
 * @tag Blog Search
 * @tag Blog Posting
 * @tag Blog Images
 * @tag Blog Videos
 * @tag Blog Upload
 * @tag Blog Monetization
 * @tag Blog Visitors
 * @tag Blog Feed
 *
 * @controller DaumController.searchBlog
 * @path POST /connector/daum/blog
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function searchBlog(
  connection: IConnection,
  input: searchBlog.Input,
): Promise<searchBlog.Output> {
  return !!connection.simulate
    ? searchBlog.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...searchBlog.METADATA,
          template: searchBlog.METADATA.path,
          path: searchBlog.path(),
        },
        input,
      );
}
export namespace searchBlog {
  export type Input = Primitive<IDaum.ISearchDaumInput>;
  export type Output = Primitive<IDaum.IBlogDaumOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/daum/blog",
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

  export const path = () => "/connector/daum/blog";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<IDaum.IBlogDaumOutput>> =>
    typia.random<Primitive<IDaum.IBlogDaumOutput>>(g);
  export const simulate = (
    connection: IConnection,
    input: searchBlog.Input,
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
