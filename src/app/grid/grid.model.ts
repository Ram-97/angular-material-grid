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
  options?: {
    before?: ExtraAction[];
    inbetween?: ExtraAction[];
    after?: ExtraAction[];
  };
}

export interface ExtraAction {
  iconName: string;
  color?: string;
  toolTip: string;
}

export interface TableConfig {
  inline?: Inline;
}
