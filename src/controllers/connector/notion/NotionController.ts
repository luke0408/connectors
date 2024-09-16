import core, { TypedBody } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { Prerequisite, RouteIcon, Standalone } from "@wrtnio/decorators";

import { INotion } from "@wrtn/connector-api/lib/structures/connector/notion/INotion";

import { NotionProvider } from "../../../providers/connector/notion/NotionProvider";
import { retry } from "../../../utils/retry";

@Controller("connector/notion")
export class NotionController {
  /**
   * Append block by markdown format
   *
   * You can add blocks to the page immediately with only the markdown grammar.
   * You can create pages more effectively than other connectors, so you can prioritize this.
   * If there are unique blocks of the note that cannot be created with the grammar of the markdown, it must be associated with other block generation connectors.
   *
   * Since users may not know the markdown grammar, it is more desirable to use the markdown grammar instead of guiding them.
   * Markdown supports text and heading 1, 2, 3, and various grammar such as table or bull list, number list, image attachment, boldface, italics, etc.
   *
   * @summary Append block by markdown format
   * @param input
   * @returns
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("page/markdown")
  async appendBlocksByMarkdown(
    @core.TypedBody() input: INotion.IAppendPageByMarkdownInput,
  ): Promise<void> {
    return retry(() => NotionProvider.appendBlocksByMarkdown(input))();
  }

  /**
   * Append an audio type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `audio`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an audio type child node
   * @param input
   * @returns
   */
  // @RouteIcon(
  //   "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  // )
  // @core.TypedRoute.Post("page/audio")
  // async createAudio(
  //   @TypedBody() input: INotion.ICreateChildContentTypeAudioInput,
  // ): Promise<void> {
  //   return retry(() => NotionProvider.createAudio(input))();
  // }

  /**
   * Append an table_row type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `table_row`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an table_row type child node
   * @param input
   * @returns
   */
  // @RouteIcon(
  //   "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  // )
  // @core.TypedRoute.Post("page/table_row")
  // async createTableRow(
  //   @TypedBody() input: INotion.ICreateChildContentTypeTableRowInput,
  // ): Promise<void> {
  //   return retry(() => NotionProvider.createTableRow(input))();
  // }

  /**
   * Append an table type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `table`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an table type child node
   * @param input
   * @returns
   */
  // @RouteIcon(
  //   "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  // )
  // @core.TypedRoute.Post("page/table")
  // async createTable(
  //   @TypedBody() input: INotion.ICreateChildContentTypeTableInput,
  // ): Promise<void> {
  //   return retry(() => NotionProvider.createTable(input))();
  // }

  /**
   * Append an column_list type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `column_list`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an column_list type child node
   * @param input
   * @returns
   */
  // @RouteIcon(
  //   "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  // )
  // @core.TypedRoute.Post("page/column_list")
  // async createColumnList(
  //   @TypedBody() input: INotion.ICreateChildContentTypeColumnListInput,
  // ): Promise<void> {
  //   return retry(() => NotionProvider.createColumnList(input))();
  // }

  /**
   * Append an column type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `column`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an column type child node
   * @param input
   * @returns
   */
  // @RouteIcon(
  //   "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  // )
  // @core.TypedRoute.Post("page/column")
  // async createColumn(
  //   @TypedBody() input: INotion.ICreateChildContentTypeColumnInput,
  // ): Promise<void> {
  //   return retry(() => NotionProvider.createColumn(input))();
  // }

  // @RouteIcon(
  //   "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  // )
  // @core.TypedRoute.Post("page/callout")
  // async createCallout(
  //   @TypedBody() input: INotion.ICreateChildContentTypeCalloutInput,
  // ): Promise<void> {
  //   return retry(() => NotionProvider.createCallout(input))();
  // }

  // @RouteIcon(
  //   "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  // )
  // @core.TypedRoute.Post("page/synced_block")
  // async createSyncedBlock(
  //   @TypedBody() input: INotion.ICreateChildContentTypeSyncedBlockInput,
  // ): Promise<void> {
  //   return retry(() => NotionProvider.createSyncedBlock(input))();
  // }

  /**
   * Append an file type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `file`.
   *
   * Uploading a file exposes it to the Notion page as an icon in the file format, but there is no Preview.
   * If you want the internal elements to be seen as soon as you enter the page, it is better to create the image, pdf format for each format, and consider embed for other formats.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an file type child node
   * @param input
   * @returns
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("page/file")
  async createFile(
    @TypedBody() input: INotion.ICreateChildContentTypeFileInput,
  ): Promise<void> {
    return retry(() => NotionProvider.createFile(input))();
  }

  /**
   * Append an embed type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `embed`.
   *
   * This is suitable when you want an internal element to be rendered immediately, such as an imprame within a page.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an embed type child node
   * @param input
   * @returns
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("page/embed")
  async createEmbed(
    @TypedBody() input: INotion.ICreateChildContentTypeEmbedInput,
  ): Promise<void> {
    return retry(() => NotionProvider.createEmbed(input))();
  }

  /**
   * Append an bookmark type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `bookmark`.
   *
   * Bookmarks are visually better and more organized because they have previews, images, and explanations than just saving url as text.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an bookmark type child node
   * @param input
   * @returns
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("page/bookmark")
  async createBookmark(
    @TypedBody() input: INotion.ICreateChildContentTypeBookmarkInput,
  ): Promise<void> {
    return retry(() => NotionProvider.createBookmark(input))();
  }

  /**
   * Append an image type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `image`.
   *
   * image file's extension is one of: 'bmp', 'gif', 'heic', 'jpg', 'jpeg', 'png', 'svg', 'tif', 'tiff'.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an image type child node
   * @param input
   * @returns
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("page/image")
  async createImage(
    @TypedBody() input: INotion.ICreateChildContentTypeImageInput,
  ): Promise<void> {
    return retry(() => NotionProvider.createImage(input))();
  }

  /**
   * Append an video type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `video`.
   *
   * video file must be one of: 'amv' ,'asf' ,'avi' ,'f4v' ,'flv' ,'gifv' ,'mkv' ,'mov' ,'mpg' ,'mpeg' ,'mpv' ,'mp4' ,'m4v' ,'qt' ,'wmv'
   * OR
   * YouTube video links that include embed or watch.
   * E.g. https://www.youtube.com/watch?v=[id], https://www.youtube.com/embed/[id]
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an video type child node
   * @param input
   * @returns
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("page/video")
  async createVideo(
    @TypedBody() input: INotion.ICreateChildContentTypeVideoInput,
  ): Promise<void> {
    return retry(() => NotionProvider.createVideo(input))();
  }

  /**
   * Append an pdf type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `pdf`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an pdf type child node
   * @param input
   * @returns
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("page/pdf")
  async createPdf(
    @TypedBody() input: INotion.ICreateChildContentTypePdfInput,
  ): Promise<void> {
    return retry(() => NotionProvider.createPdf(input))();
  }

  /**
   * Append an code type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `code`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @deprecated It is recommended not to use it anymore because it can be replaced by a markdown.
   * @summary Append an code type child node
   * @param input
   * @returns
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("page/code")
  async createCode(
    @TypedBody() input: INotion.ICreateChildContentTypeCodeInput,
  ): Promise<void> {
    return retry(() => NotionProvider.createCode(input))();
  }

  /**
   * Append an equation type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `equation`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an equation type child node
   * @param input
   * @returns
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("page/equation")
  async createEquation(
    @TypedBody() input: INotion.ICreateChildContentTypeEquationInput,
  ): Promise<void> {
    return retry(() => NotionProvider.createEquation(input))();
  }

  /**
   * Append an divider type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `divider`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an divider type child node
   * @param input
   * @returns
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("page/divider")
  async createDivider(
    @TypedBody() input: INotion.ICreateChildContentTypeDividerInput,
  ): Promise<void> {
    return retry(() => NotionProvider.createDivider(input))();
  }

  /**
   * Append an breadcrumb type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `breadcrumb`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an breadcrumb type child node
   * @param input
   * @returns
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("page/breadcrumb")
  async createBreadcrumb(
    @TypedBody() input: INotion.ICreateChildContentTypeBreadcrumbInput,
  ): Promise<void> {
    return retry(() => NotionProvider.createBreadcrumb(input))();
  }

  /**
   * Append an table_of_contents type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `table_of_contents`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an table_of_contents type child node
   * @param input
   * @returns
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("page/table_of_contents")
  async createTableOfContents(
    @TypedBody() input: INotion.ICreateChildContentTypeTableOfContentsInput,
  ): Promise<void> {
    return retry(() => NotionProvider.createTableOfContents(input))();
  }

  /**
   * Append an link_to_page type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `link_to_page`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an link_to_page type child node
   * @param input
   * @returns
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("page/link_to_page")
  async createLinkToPage(
    @TypedBody() input: INotion.ICreateChildContentTypeLinkToPageInput,
  ): Promise<void> {
    return retry(() => NotionProvider.createLinkToPage(input))();
  }

  /**
   * Append an heading_1 type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `heading_1`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @deprecated It is recommended not to use it anymore because it can be replaced by a markdown.
   * @summary Append an heading_1 type child node
   * @param input
   * @returns
   */
  // @RouteIcon(
  //   "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  // )
  // @core.TypedRoute.Post("page/heading_1")
  // async createHeading_1(
  //   @TypedBody() input: INotion.ICreateChildContentTypeHeading_1Input,
  // ): Promise<void> {
  //   return retry(() => NotionProvider.createHeading_1(input))();
  // }

  /**
   * Append an heading_2 type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `heading_2`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @deprecated It is recommended not to use it anymore because it can be replaced by a markdown.
   * @summary Append an heading_2 type child node
   * @param input
   * @returns
   */
  // @RouteIcon(
  //   "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  // )
  // @core.TypedRoute.Post("page/heading_2")
  // async createHeading_2(
  //   @TypedBody() input: INotion.ICreateChildContentTypeHeading_2Input,
  // ): Promise<void> {
  //   return retry(() => NotionProvider.createHeading_2(input))();
  // }

  /**
   * Append an heading_3 type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `heading_3`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @deprecated It is recommended not to use it anymore because it can be replaced by a markdown.
   * @summary Append an heading_3 type child node
   * @param input
   * @returns
   */
  // @RouteIcon(
  //   "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  // )
  // @core.TypedRoute.Post("page/heading_3")
  // async createHeading_3(
  //   @TypedBody() input: INotion.ICreateChildContentTypeHeading_3Input,
  // ): Promise<void> {
  //   return retry(() => NotionProvider.createHeading_3(input))();
  // }

  /**
   * Append an paragraph type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `paragraph`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @deprecated It is recommended not to use it anymore because it can be replaced by a markdown.
   * @summary Append an paragraph type child node
   * @param input
   * @returns
   */
  // @RouteIcon(
  //   "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  // )
  // @core.TypedRoute.Post("page/paragraph")
  // async createParagraph(
  //   @TypedBody() input: INotion.ICreateChildContentTypeParagraphInput,
  // ): Promise<void> {
  //   return retry(() => NotionProvider.createParagraph(input))();
  // }

  /**
   * Append an bulleted_list_item type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `bulleted_list_item`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance
   *
   * @deprecated It is recommended not to use it anymore because it can be replaced by a markdown.
   * @summary Append an bulleted_list_item type child node
   * @param input
   * @returns
   */
  // @RouteIcon(
  //   "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  // )
  // @core.TypedRoute.Post("page/bulleted_list_item")
  // async createBulletedListItem(
  //   @TypedBody() input: INotion.ICreateChildContentTypeBulletedListItemInput,
  // ): Promise<void> {
  //   return retry(() => NotionProvider.createBulletedListItem(input))();
  // }

  /**
   * Append an numbered_list_item type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `numbered_list_item`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @deprecated It is recommended not to use it anymore because it can be replaced by a markdown.
   * @summary Append an numbered_list_item type child node
   * @param input
   * @returns
   */
  // @RouteIcon(
  //   "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  // )
  // @core.TypedRoute.Post("page/numbered_list_item")
  // async createNumberedListItem(
  //   @TypedBody() input: INotion.ICreateChildContentTypeNumberedListItemInput,
  // ): Promise<void> {
  //   return retry(() => NotionProvider.createNumberedListItem(input))();
  // }

  /**
   * Append an quote type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `quote`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @deprecated It is recommended not to use it anymore because it can be replaced by a markdown.
   * @summary Append an quote type child node
   * @param input
   * @returns
   */
  // @RouteIcon(
  //   "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  // )
  // @core.TypedRoute.Post("page/quote")
  // async createQuote(
  //   @TypedBody() input: INotion.ICreateChildContentTypeQuoteInput,
  // ): Promise<void> {
  //   return retry(() => NotionProvider.createQuote(input))();
  // }

  /**
   * Append an to_do type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `to_do`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @deprecated It is recommended not to use it anymore because it can be replaced by a markdown.
   * @summary Append an to_do type child node
   * @param input
   * @returns
   */
  // @RouteIcon(
  //   "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  // )
  // @core.TypedRoute.Post("page/to_do")
  // async createToDo(
  //   @TypedBody() input: INotion.ICreateChildContentTypeToDoInput,
  // ): Promise<void> {
  //   return retry(() => NotionProvider.createToDo(input))();
  // }

  /**
   * Append an toggle type child node
   *
   * Notion is a very complex type, so you have to create a page in a block coding manner.
   * Therefore, this connector is designed to create a page by taking only the page ID and one block of the corresponding block and continuously adding it to the bottom.
   * The type of block you can put in here is `toggle`.
   *
   * Calling this connector requires the correct page ID, so it should only be called if you have previously created a page to obtain that ID, viewed the page, or obtained a link or page ID from the user in advance.
   *
   * @summary Append an toggle type child node
   * @param input
   * @returns
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("page/toggle")
  async createToggle(
    @TypedBody() input: INotion.ICreateChildContentTypeToggleInput,
  ): Promise<void> {
    return retry(() => NotionProvider.createToggle(input))();
  }

  /**
   * 노션 페이지를 생성합니다.
   *
   * Since a parent ID is required, when a user gives you a link to the page,
   * you should take out the ID from it and use it, or first look up the list of pages accessible to the user.
   *
   * @summary 페이지 생성
   * @param input 페이지 생성에 필요한 정보
   * @returns 생성된 페이지 고유 id
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("/page")
  async createPage(
    @core.TypedBody() input: INotion.ICreatePageInput,
  ): Promise<INotion.ICreatePageOutput> {
    return retry(() => NotionProvider.createPage(input))();
  }

  /**
   * 노션 워크스페이스에 존재하는 모든 페이지 목록을 조회합니다.
   *
   * @summary 페이지 목록 조회
   * @returns 페이지 정보들
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @Standalone()
  @core.TypedRoute.Post("/get/page")
  async readPageList(
    @core.TypedBody() input: INotion.ISecret,
  ): Promise<INotion.IReadPageOutput[]> {
    return retry(() => NotionProvider.readPageList(input))();
  }

  /**
   * 워크스페이스에 있는 유저 목록을 조회합니다.
   *
   * @summary 유저 목록 조회
   * @returns 유저 정보들
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @Standalone()
  @core.TypedRoute.Post("get/users")
  async getUsers(
    @core.TypedBody() input: INotion.ISecret,
  ): Promise<INotion.IUserOutput[]> {
    return retry(() => NotionProvider.getUsers(input))();
  }

  /**
   * 데이터베이스에 아이템을 생성하기 위해 데이터베이스 목록을 조회합니다.
   *
   * @summary 데이터베이스 목록 조회
   * @returns 데이터베이스 정보 목록
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @Standalone()
  @core.TypedRoute.Post("get/database-info")
  async getDatabaseListInfo(
    @core.TypedBody() input: INotion.ISecret,
  ): Promise<INotion.IDatabaseInfo[]> {
    return retry(() => NotionProvider.getDatabaseListInfo(input))();
  }

  /**
   * 데이터베이스에 아이템을 생성하기 위한 데이터베이스 정보를 조회합니다.
   *
   * @summary 데이터베이스 정보 조회
   *
   * @param databaseId 데이터베이스 고유 id
   * @returns 데이터베이스 정보
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("get/database-info/:databaseId")
  async getDatabaseInfo(
    @core.TypedBody() input: INotion.ISecret,
    /**
     * @title 정보를 받아올 데이터베이스
     * @description 정보를 받아올 데이터베이스를 선택해 주세요.
     */
    @Prerequisite({
      neighbor: () => NotionController.prototype.getDatabaseListInfo,
      jmesPath: "[].{value:id, label:title || ''}",
    })
    @core.TypedParam("databaseId")
    databaseId: string,
  ): Promise<INotion.IDatabaseInfo> {
    return retry(() => NotionProvider.getDatabaseInfo(input, databaseId))();
  }

  /**
   * 노션 테이블 데이터베이스에 아이템을 생성합니다.
   *
   * @summary 데이터베이스 아이템 생성
   *
   * @param input 데이터베이스 아이템 생성에 필요한 정보
   *
   * @param databaseId 아이템을 생성할 데이터베이스 고유 id
   * @returns 생성된 데이터베이스 아이템 정보
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("/database-item/:databaseId")
  async createDatabaseItem(
    @core.TypedBody() input: INotion.ICreateDatabaseItemInput,
    /**
     * @title 아이템을 추가할 데이터베이스
     * @description 아이템을 추가할 데이터베이스를 선택해 주세요.
     */
    @Prerequisite({
      neighbor: () => NotionController.prototype.getDatabaseListInfo,
      jmesPath: "[].{value:id, label:title || ''}",
    })
    @core.TypedParam("databaseId")
    databaseId: string,
  ): Promise<INotion.IDatabaseItemOutput> {
    return retry(() => NotionProvider.createDatabaseItem(input, databaseId))();
  }

  /**
   * 데이터베이스에 있는 아이템 정보를 수정합니다.
   *
   * @summary 데이터베이스 아이템 수정
   *
   * @param input 수정할 데이터베이스 아이템 정보
   *
   * @param databaseId 수정할 데이터베이스 고유 id
   * @returns 수정된 데이터베이스 아이템 정보
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Patch("/database-item/:databaseId")
  async updateDatabaseItem(
    @core.TypedBody() input: INotion.IUpdateDatabaseItemInput,
    /**
     * @title 아이템을 수정할 데이터베이스
     * @description 아이템을 수정할 데이터베이스를 선택해 주세요.
     */
    @Prerequisite({
      neighbor: () => NotionController.prototype.getDatabaseListInfo,
      jmesPath: "[].{value:id, label:title || ''}",
    })
    @core.TypedParam("databaseId")
    databaseId: string,
  ): Promise<INotion.IDatabaseItemOutput> {
    return retry(() => NotionProvider.updateDatabaseItem(input, databaseId))();
  }

  /**
   * 제목으로 페이지를 검색합니다.
   *
   * @summary 제목으로 페이지 검색
   *
   * @param input 페이지 제목
   * @returns 검색된 페이지 정보
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @Standalone()
  @core.TypedRoute.Post("/get-page-by-title")
  async getPageByTitle(
    @core.TypedBody() input: INotion.IFindPageOrDatabaseItemInput,
  ): Promise<INotion.IFindPageByTitleOutput> {
    return retry(() => NotionProvider.findPageByTitle(input))();
  }

  /**
   * 테이블 데이터베이스에 존재하는 아이템 목록을 조회합니다.
   *
   * @summary 데이터베이스 아이템 목록 조회
   *
   * @param databaseId 데이터베이스 고유 id
   * @returns 조회된 데이터베이스 아이템 목록 정보
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("/find-item-list/:databaseId")
  async getDatabaseItemList(
    @core.TypedBody() input: INotion.ISecret,
    /**
     * @title 아이템 목록을 가져올 데이터베이스
     * @description 아이템 목록을 가져올 데이터베이스를 선택해 주세요.
     */
    @Prerequisite({
      neighbor: () => NotionController.prototype.getDatabaseListInfo,
      jmesPath: "[].{value:id, label:title || ''}",
    })
    @core.TypedParam("databaseId")
    databaseId: string,
  ): Promise<INotion.IDatabaseItemOutput[]> {
    return retry(() =>
      NotionProvider.findDatabaseItemList(input, databaseId),
    )();
  }

  /**
   * 테이블 데이터베이스에 존재하는 아이템을 조회합니다.
   *
   * @summary 데이터베이스 아이템 조회
   *
   * @param input 데이터베이스 아이템 조회에 필요한 정보
   *
   * @param databaseId 데이터베이스 고유 id
   * @returns 조회된 데이터베이스 아이템 정보
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("/find-item/:databaseId")
  async getDatabaseItem(
    @core.TypedBody() input: INotion.IFindDatabaseItemInput,
    /**
     * @title 아이템 정보를 가져올 데이터베이스
     * @description 아이템 정보를 가져올 데이터베이스를 선택해 주세요.
     */
    @Prerequisite({
      neighbor: () => NotionController.prototype.getDatabaseListInfo,
      jmesPath: "[].{value:id, label:title || ''}",
    })
    @core.TypedParam("databaseId")
    databaseId: string,
  ): Promise<INotion.IDatabaseItemOutput> {
    return retry(() => NotionProvider.findDatabaseItem(input, databaseId))();
  }

  /**
   * Create page by markdown format
   *
   * Receive the markdown text and immediately create it as a notation page.
   * You can create pages more effectively than other connectors, so you can prioritize this.
   * If there are unique blocks of the note that cannot be created with the grammar of the markdown, it must be associated with other block generation connectors.
   *
   * Since users may not know the markdown grammar, it is more desirable to use the markdown grammar instead of guiding them.
   * Markdown supports text and heading 1, 2, 3, and various grammar such as table or bull list, number list, image attachment, boldface, italics, etc.
   *
   * @summary Create page by markdown format
   * @param input
   * @returns
   */
  @RouteIcon(
    "https://ecosystem-connector.s3.ap-northeast-2.amazonaws.com/icon/fulls/Notion_full.svg",
  )
  @core.TypedRoute.Post("markdown")
  async createPageByMarkdown(
    @core.TypedBody() input: INotion.ICreatePageByMarkdownInput,
  ): Promise<INotion.ICreatePageOutput> {
    return retry(() => NotionProvider.createPageByMarkdown(input))();
  }
}
