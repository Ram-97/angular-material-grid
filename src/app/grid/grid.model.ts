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
  options?:{
    date?:DateOption,
    dateTime:DateOption
  }
}

export interface DateOption{
    min?:Date,
    max?:Date,
    showSeconds?: boolean;
    enableMeridian?: boolean;
}

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

export interface Inline {
  isEdit: boolean;
  isDelete: boolean;
  options?: {
    before?: Action[];
    inbetween?: Action[];
    after?: Action[];
  };
}

export interface Action {
  iconName: string;
  color?: string;
  toolTip: string;
}

export interface TableConfig {
  inline?: Inline;
}

export interface DirtyData {
  index: number;
  selectedRow: any;
  dirtyFields: any;
}
