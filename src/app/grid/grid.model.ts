import { ValidatorFn } from "@angular/forms";

/**
* Constant types for table column : 
* TEXT, DATE, DATETIME, TEXTAREA, DROPDOWN, AUTOCOMPLETE, NUMBER, CHECKBOX
*/
export enum ColumnType {
  TEXT = "text",
  DATE = "date",
  DATETIME = "dateTime",
  TEXTAREA = "textArea",
  DROPDOWN = "dropDown",
  AUTOCOMPLETE = "autoComplete",
  NUMBER = "number",
  CHECKBOX = "checkbox"
}

/**
 * Simple plain model which will used to configure the table 
 * @example
 * let tableConfig:TableConfig = {
 * inline: {
 *  isEdit: true,
 *  isDelete: true
 *  }
 * }
 */
export interface TableConfig {
  inline?: Inline;
}


/**
 * Configure the inline actions of row in mat table. `isEdit` and `isDelete` members are default actions.
 * For defining the custom actions, use the `Options` member. 
 */
export interface Inline {
  isEdit: boolean;
  isDelete: boolean;
  options?: {
    before?: Action[];
    inbetween?: Action[];
    after?: Action[];
  };
}

/**
 * Define the custom actions that used in inline action. Default `color` will be black
 */
export interface Action {
  iconName: string;
  color?: string;
  toolTip: string;
}

export interface Column {
  name: string;
  title: string;
  type?: string;
  width?: number;
  isVisible?: boolean;
  isEditable?: boolean;
  isSortable?: boolean;
  isSticky?: boolean;
  separator?: boolean;
  cellOption?:CellOption;
}

export interface CellOption{
  date?:DateOption;
  dateTime:DateOption;
  validation?:ValidatorFn[];
}

export interface DateOption{
  min?:Date,
  max?:Date,
  showSeconds?: boolean;
  enableMeridian?: boolean;
}

// Data Model
export interface DirtyData {
  index: number;
  selectedRow: any;
  dirtyFields: any;
}

export interface DropDown{
  id: string,
  description: string
}

export interface AutoCompleteText{
  column: string,
  text?: string,
  data?: DropDown[]
}