import { Placeholder, Prerequisite } from "@wrtnio/decorators";
import { tags } from "typia";
import { ICommon } from "../common/ISecretValue";

export namespace ISlack {
  export type ISecret = ICommon.ISecret<
    "slack",
    [
      "channels:read,channels:history,users.profile:read,im:read,groups:read,chat:write,users:read,identify",
    ]
  >;

  export interface IPostMessageToMyselfInput extends ISlack.ISecret {
    /**
     * @title message to send
     */
    text: string;
  }

  export interface IAuthTestOutput {
    ok: boolean;
    url: "https://kakasootest.slack.com/";
    team: string;
    user: string;
    team_id: string;
    user_id: string;
    is_enterprise_install: boolean;
  }

  export interface IPostMessageInput extends ISlack.ISecret {
    /**
     * @title channel id
     *
     * It refers to the channel on which you want to view the conversation history.
     * You need to view the channel first.
     */
    channel: Channel["id"] &
      Prerequisite<{
        method: "post";
        path: "/connector/slack/get-channels";
        jmesPath: "channels[].{value:id, label:name || '개인 채널'}";
      }>;

    /**
     * @title message to send
     */
    text: string;
  }

  export interface ICommonPaginationInput {
    /**
     * @title limit
     *
     * Indicates the number of data to look up at at once.
     * If not entered, use 100 as the default.
     */
    limit?: number &
      tags.Type<"int32"> &
      tags.Minimum<1> &
      tags.Maximum<100> &
      tags.Default<100> &
      Placeholder<"100">;

    /**
     * @title cursor
     *
     * If you pass the cursor value received from the previous inquiry, you can inquire from the data after the cursor.
     * If you don't put a value, it will be recognized as the first page.
     */
    cursor?: string;
  }

  export interface ICommonPaginationOutput {
    /**
     * @title next_cursor
     *
     * If the following data exist, the cursor value exists.
     * If you want to see the next data from these data,
     * you can pass this value to the next request condition, `cursor`.
     */
    next_cursor: string | null;
  }

  export interface IGetChannelHistoryOutput extends ICommonPaginationOutput {
    /**
     * @title message
     *
     * This refers to the history of conversations made on the channel.
     */
    messages: ISlack.Message[];
  }

  export interface IGetChannelHistoryInput
    extends ISlack.ISecret,
      ISlack.ICommonPaginationInput {
    /**
     * @title channel id
     *
     * It refers to the channel on which you want to view the conversation history.
     * You need to view the channel first.
     */
    channel: Channel["id"] &
      Prerequisite<{
        method: "post";
        path: "/connector/slack/get-channels";
        jmesPath: "channels[].{value:id, label:name || '개인 채널'}";
      }>;

    /**
     * @title lastest
     *
     * Only messages before this Unix timestamp will be included in results. Default is the current time.
     * for example, '1234567890.123456'
     */
    latest?: number & Placeholder<"1234567890.123456">;

    /**
     * @title oldest
     *
     * Only messages after this Unix timestamp will be included in results.
     * for example, '1234567890.123456'
     */
    oldest?: number & tags.Default<0> & Placeholder<"1234567890.123456">;
  }

  /**
   * @title response
   */
  export interface IGetPrivateChannelOutput extends ICommonPaginationOutput {
    /**
     * @title channels
     */
    channels: ISlack.PrivateChannel[];
  }

  /**
   * @title response
   */
  export interface IGetPublicChannelOutput extends ICommonPaginationOutput {
    /**
     * @title channels
     */
    channels: ISlack.PublicChannel[];
  }

  /**
   * @title response
   */
  export interface IGetImChannelOutput extends ICommonPaginationOutput {
    /**
     * @title channels
     */
    channels: ISlack.ImChannel[];
  }

  /**
   * @title request condition
   */
  export interface IGetChannelInput
    extends ISlack.ISecret,
      ISlack.ICommonPaginationInput {}

  export interface ImChannel extends Channel {
    /**
     * @title created time
     */
    created: number & tags.Type<"int64">;

    /**
     * @title Is it the `im` type or not
     */
    is_im: true;

    /**
     * @title is org shared
     */
    is_org_shared: false;

    /**
     * @title is user deleted
     */
    is_user_deleted: boolean;

    /**
     * @title priority
     */
    priority: number;

    /**
     * @title channel owner's id
     */
    user: User["id"];
  }

  export interface PrivateChannel extends Channel {
    /**
     * @title channel name
     */
    name: string;
  }

  export interface PublicChannel extends Channel {
    /**
     * @title channel name
     */
    name: string;
  }

  export interface Channel {
    /**
     * @title channel id
     */
    id: string;
  }

  export interface User {
    /**
     * @title user id
     */
    id: string;
  }

  export interface Message {
    /**
     * @title type
     */
    type: "message";

    /**
     * @title ID of the person who made this message
     */
    user: User["id"];

    /**
     * @title message contents
     */
    text: string;

    /**
     * @title timestamp
     */
    ts: string;

    /**
     * @title Attachments
     */
    attachments?: ISlack.Attachment[];
  }

  export interface Attachment {
    /**
     * @title service_name
     */
    service_name: string;

    /**
     * @title text
     */
    text: string;

    /**
     * @title fallback
     */
    fallback: string;

    /**
     * @title thumb_url
     */
    thumb_url: string & tags.Format<"uri">;

    /**
     * @title thumb_width
     */
    thumb_width: number;

    /**
     * @title thumb_height
     */
    thumb_height: number;

    /**
     * @title id
     */
    id: number;
  }
}
