/**
 * @packageDocumentation
 * @module api.functional.connector.naver.blog
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { INaver } from "../../../../structures/connector/naver/INaver";

/**
 * 네이버 블로그 컨텐츠를 검색합니다.
 *
 * @summary 네이버 블로그 검색
 * @param input 네이버 블로그 검색을 위한 조건
 * @tag Naver 네이버 포털 사이트
 * @tag 네이버 블로그
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
 * @tag 네이버 블로그 챌린지
 * @tag Naver Blog
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
 * @tag Naver Blog Challenge
 *
 * @controller NaverController.blogList
 * @path POST /connector/naver/blog
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function blogList(
  connection: IConnection,
  input: blogList.Input,
): Promise<blogList.Output> {
  return !!connection.simulate
    ? blogList.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...blogList.METADATA,
          template: blogList.METADATA.path,
          path: blogList.path(),
        },
        input,
      );
}
export namespace blogList {
  export type Input = Primitive<INaver.INaverKeywordInput>;
  export type Output = Primitive<INaver.IBlogNaverOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/naver/blog",
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

  export const path = () => "/connector/naver/blog";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<INaver.IBlogNaverOutput>> =>
    typia.random<Primitive<INaver.IBlogNaverOutput>>(g);
  export const simulate = (
    connection: IConnection,
    input: blogList.Input,
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
