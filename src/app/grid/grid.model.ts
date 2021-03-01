export interface Column {
  name: string;
  title: string;
  type?: string;
  width?: number;
  isVisible?: boolean;
  isEditable?: boolean;
  isSortable?: boolean;
  isSticky?: boolean;
}

export enum ColumnType {
  TEXT = "text",
  DATE = "date",
  DATETIME = "dateTime",
  TEXTAREA = "textArea",
  DROPDOWN = "dropDown",
  AUTOCOMPLETE = "autoComplete",
  NUMBER = "number"
}

export interface Inline {
  isEdit: boolean;
  isDelete: boolean;
  options?: any;
}

export interface TableConfig {
  inline?: Inline;
}
