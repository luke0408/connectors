import { tags } from "typia";
import { MyPick } from "../../../types/MyPick";

export namespace ISpreadsheetCell {
  export namespace ISnapshot {
    export interface ICreate {
      /**
       * @title Format type of this cell
       *
       * For example, date, datetime, bool, text an so on.
       * If you want add new type, please discuss within our team.
       */
      type: "text"; // text

      /**
       * If the value of the final cell is in the erased form, null.
       * A null value will be stored only when the value of this cell disappears after modification, and other than that, null can never be entered.
       * This is to indicate that the value has been explicitly deleted to prevent the cell value of the previous snapshot from being exposed when a cell is soft-delete.
       *
       * @title value
       */
      value: string;
    }
  }
  export interface ISnapshot
    extends Pick<ISpreadsheetCell.ISnapshot.ICreate, "type"> {
    /**
     * @title Primary Key
     */
    id: string & tags.Format<"uuid">;

    /**
     * @title Creation time of spreadsheet cell snapshot
     */
    created_at: string & tags.Format<"date-time">;

    /**
     * If the value of the final cell is in the erased form, null.
     * A null value will be stored only when the value of this cell disappears after modification, and other than that, null can never be entered.
     * This is to indicate that the value has been explicitly deleted to prevent the cell value of the previous snapshot from being exposed when a cell is soft-delete.
     *
     * @title value
     */
    value: string | null;
  }

  export interface ICreate {
    /**
     * It counts from 1
     *
     * @title Column Number
     */
    column: number & tags.Type<"uint32"> & tags.Minimum<1>;

    /**
     * It counts from 1
     *
     * @title Row Number
     */
    row: number & tags.Type<"uint32"> & tags.Minimum<1>;

    /**
     * @title Last Snapshot
     */
    snapshot: MyPick<ISpreadsheetCell.ISnapshot.ICreate, "type" | "value">;
  }
}

export interface ISpreadsheetCell
  extends MyPick<ISpreadsheetCell.ICreate, "column" | "row"> {
  /**
   * @title Primary Key
   */
  id: string & tags.Format<"uuid">;

  /**
   * @title Spreadsheet ID
   */
  spreadsheet_id: string & tags.Format<"uuid">;

  /**
   * @title Creation time of spreadsheet cell
   */
  created_at: string & tags.Format<"date-time">;

  /**
   * @title Last Snapshot
   */
  snapshot: MyPick<ISpreadsheetCell.ISnapshot, "type" | "value">;
}
