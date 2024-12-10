import { tags } from "typia";

export namespace ISpreadsheetCell {
  export interface ISnapshot {
    /**
     * @title Primary Key
     */
    id: string & tags.Format<"uuid">;

    /**
     * @title Format type of this cell
     *
     * For example, date, datetime, bool, text an so on.
     * If you want add new type, please discuss within our team.
     */
    type: string;

    /**
     * If the value of the final cell is in the erased form, null.
     * A null value will be stored only when the value of this cell disappears after modification, and other than that, null can never be entered.
     * This is to indicate that the value has been explicitly deleted to prevent the cell value of the previous snapshot from being exposed when a cell is soft-delete.
     *
     * @title value
     */
    value: string | null;
  }
}

export interface ISpreadsheetCell<
  Snapshot extends ISpreadsheetCell.ISnapshot = ISpreadsheetCell.ISnapshot,
> {
  /**
   * @title Primary Key
   */
  id: string & tags.Format<"uuid">;

  /**
   * @title Spreadsheet ID
   */
  spreadsheet_id: string & tags.Format<"uuid">;

  /**
   * It counts from 1
   *
   * @title Column Number
   */
  column: number & tags.Type<"uint32">;

  /**
   * It counts from 1
   *
   * @title Row Number
   */
  row: number & tags.Type<"uint32">;

  /**
   * It is created for the first time when an spreadsheet cell is created, and is
   * accumulated every time the spreadsheet is modified.
   *
   * @title List of snapshot contents
   */
  snapshots: Snapshot[] & tags.MinItems<1>;

  /**
   * The most recent snapshot made is the higher version,
   * and in fact, this time value can serve as the version.
   *
   * @title Creation time of spreadsheet cell
   */
  created_at: string & tags.Format<"date-time">;
}
