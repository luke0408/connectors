/**
 * @packageDocumentation
 * @module api.functional.connector.typeform.duplicate_form
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { NestiaSimulator } from "@nestia/fetcher/lib/NestiaSimulator";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

import type { ITypeform } from "../../../../structures/connector/typeform/ITypeform";

/**
 * 워크스페이스에 존재하는 폼을 복사합니다.
 *
 * @summary 타입폼 폼 복사.
 * @param input 복사하여 새로 만들 폼 이름.
 * @returns 생성된 폼 ID, 제목, 타입.
 * @tag Typeform
 * @tag 타입폼
 * @tag 설문조사
 * @tag 온라인 폼
 * @tag 설문지
 * @tag 고객 만족도 조사
 * @tag 설문 양식
 * @tag 퀴즈
 * @tag 응답 확인
 * @tag 응답 관리
 * @tag 응답자 관리
 * @tag 설문 분석
 * @tag 응답 데이터
 * @tag 설문지 템플릿
 * @tag 설문 응답
 * @tag 설문지 공유
 * @tag 설문조사 결과
 * @tag 질문지 작성
 * @tag 인터뷰 신청
 * @tag 응답 수집
 * @tag 행사
 * @tag 피드백
 * @tag 사용자 조사
 * @tag 이벤트 피드백
 * @tag 행사 피드백
 * @tag Survey
 * @tag Online Form
 * @tag Questionnaire
 * @tag Customer Satisfaction Survey
 * @tag Survey Form
 * @tag Quiz
 * @tag Survey Responses
 * @tag Manage Responses
 * @tag Manage Respondents
 * @tag Survey Analysis
 * @tag Response Data
 * @tag Survey Template
 * @tag Survey Answers
 * @tag Share Survey
 * @tag Survey Results
 * @tag Create Questionnaire
 * @tag Interview Application
 * @tag Collect Responses
 * @tag Event
 * @tag Feedback
 * @tag User Survey
 * @tag Event Feedback
 * @internal
 *
 * @controller TypeformController.duplicateExistingForm
 * @path POST /connector/typeform/duplicate-form
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function duplicateExistingForm(
  connection: IConnection,
  input: duplicateExistingForm.Input,
): Promise<duplicateExistingForm.Output> {
  return !!connection.simulate
    ? duplicateExistingForm.simulate(connection, input)
    : PlainFetcher.fetch(
        {
          ...connection,
          headers: {
            ...connection.headers,
            "Content-Type": "application/json",
          },
        },
        {
          ...duplicateExistingForm.METADATA,
          template: duplicateExistingForm.METADATA.path,
          path: duplicateExistingForm.path(),
        },
        input,
      );
}
export namespace duplicateExistingForm {
  export type Input = Primitive<ITypeform.IDuplicateExistingFormInput>;
  export type Output = Primitive<ITypeform.ICreateFormOutput>;

  export const METADATA = {
    method: "POST",
    path: "/connector/typeform/duplicate-form",
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

  export const path = () => "/connector/typeform/duplicate-form";
  export const random = (
    g?: Partial<typia.IRandomGenerator>,
  ): Resolved<Primitive<ITypeform.ICreateFormOutput>> =>
    typia.random<Primitive<ITypeform.ICreateFormOutput>>(g);
  export const simulate = (
    connection: IConnection,
    input: duplicateExistingForm.Input,
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
