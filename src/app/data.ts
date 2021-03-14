import { Validators } from "@angular/forms";
import { ColumnType, DropDown, TableConfig } from "./grid/grid.model";

export const ELEMENT_DATA: any = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" }
];

export const Column = [
  {
    name: "position",
    title: "position",
    separator: true,
    width: 100
  },
  {
    name: "name",
    title: "name",
    separator: true
  },
  {
    name: "weight",
    title: "weight",
    separator: true
  },
  {
    name: "symbol",
    title: "symbol"
  }
];

export const autoCompleteData: DropDown[] = [
  { id: "H", description: "Hydrogen" },
  { id: "He", description: "Helium" },
  { id: "Li", description: "Lithium" },
  { id: "Be", description: "Beryllium" },
  { id: "B", description: "Boron" },
  { id: "C", description: "Carbon" },
  { id: "N", description: "Nitrogen" },
  { id: "O", description: "Oxygen" },
  { id: "F", description: "" },
  { id: "Ne", description: null }
];

export const ELEMENT_DATA1: any = [
  {
    dateTime: "2021-03-09 20:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 1,
    name: "Hydrogen",
    weight: 1.0079,
    symbol: "H",
    autoComplete: "He",
    checkbox: null,
    slide: null,
    textArea: null
  },
  {
    dateTime: "",
    date: "",
    position: 2,
    name: "Helium",
    weight: 4.0026,
    symbol: "He",
    autoComplete: "",
    checkbox: 1,
    slide: 1,
    textArea: undefined
  },
  {
    dateTime: "2021-03-09 21:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 3,
    name: "Lithium",
    weight: 6.941,
    symbol: "Li",
    autoComplete: "He",
    checkbox: true,
    slide: true,
    textArea:
      "noun. a statement, picture in words, or account that describes; descriptive representation. the act or method of describing. sort; kind; variety: dogs of every description."
  },
  {
    dateTime: "2021-03-09 18:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 4,
    name: "Beryllium",
    weight: 9.0122,
    symbol: "Be",
    autoComplete: "He",
    checkbox: 0,
    slide: 0,
    textArea: ""
  },
  {
    dateTime: "2021-03-09 18:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 5,
    name: "Boron",
    weight: 10.811,
    symbol: "B",
    autoComplete: "He",
    checkbox: false,
    slide: false,
    textArea: ""
  },
  {
    dateTime: "2021-03-09 18:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 6,
    name: "Carbon",
    weight: 12.0107,
    symbol: "C",
    autoComplete: "He",
    checkbox: null,
    slide: false,
    textArea: ""
  },
  {
    dateTime: "2021-03-09 18:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 7,
    name: "Nitrogen",
    weight: 14.0067,
    symbol: "N",
    autoComplete: "He",
    checkbox: null,
    slide: false,
    textArea: ""
  },
  {
    dateTime: "2021-03-09 18:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 8,
    name: "Oxygen",
    weight: 15.9994,
    symbol: "O",
    autoComplete: "He",
    checkbox: null,
    slide: false,
    textArea: ""
  },
  {
    dateTime: "2021-03-09 18:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 9,
    name: "Fluorine",
    weight: 18.9984,
    symbol: "F",
    autoComplete: "He",
    checkbox: null,
    slide: false,
    textArea: ""
  },
  {
    dateTime: "2021-03-09 18:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 10,
    name: "Neon",
    weight: 20.1797,
    symbol: "Ne",
    autoComplete: "He",
    checkbox: null,
    slide: false,
    textArea: ""
  }
];

export const Column1 = [
  {
    name: "dateTime",
    title: "dateTime",
    type: ColumnType.DATETIME,
    width: 100,
    separator: true,
    isEditable: true,
    isRequired: true,
    dateTime: {
      min: new Date(2021, 0, 1),
      max: new Date(2021, 12, 0),
      showSeconds: true
    }
  },
  {
    name: "date",
    title: "date",
    type: ColumnType.DATE,
    width: 100,
    separator: true,
    isEditable: true,
    isRequired: true,
    date: {
      min: new Date(2021, 0, 1),
      max: new Date(2021, 12, 0)
    }
  },
  {
    name: "position",
    title: "position",
    type: ColumnType.NUMBER,
    width: 100,
    separator: true,
    isEditable: true
  },
  {
    name: "name",
    title: "name",
    type: ColumnType.TEXT,
    isEditable: true,
    width: 100,
    separator: true,
    validation: [Validators.email, Validators.required]
  },
  {
    name: "weight",
    title: "weight",
    width: 100,
    separator: true
  },
  {
    name: "symbol",
    title: "symbol",
    type: ColumnType.DROPDOWN,
    isEditable: true,
    width: 100,
    separator: true,
    dropDown: autoCompleteData
  },
  {
    name: "autoComplete",
    title: "autoComplete",
    type: ColumnType.AUTOCOMPLETE,
    isEditable: true,
    width: 100,
    separator: true,
    isRequired: true
  },
  {
    name: "checkbox",
    title: "checkbox",
    type: ColumnType.CHECKBOX,
    isEditable: true,
    width: 100,
    separator: true,
    isRequired: true,
    enableBit: true
  },
  {
    name: "slide",
    title: "slide",
    type: ColumnType.SLIDE,
    isEditable: true,
    width: 100,
    isRequired: true,
    enableBit: true
  },
  {
    name: "textArea",
    title: "textArea",
    type: ColumnType.TEXTAREA,
    isEditable: true,
    width: 300,
    isRequired: true,
    enableResize: true
  }
];

export const InlineConfig: TableConfig = {
  inline: {
    isDelete: true,
    isEdit: true,
    options: {
      before: [
        {
          iconName: "snooze",
          color: "blue",
          toolTip: "snooze"
        }
      ],
      inbetween: [
        {
          iconName: "snooze",
          color: "blue",
          toolTip: "snooze"
        }
      ],
      after: [
        {
          iconName: "snooze",
          color: "blue",
          toolTip: "snooze"
        }
      ]
    }
  }
};

export const dataList = [
  {
    description: "Normal",
    column: Column,
    dataSource: ELEMENT_DATA
  },
  {
    config: InlineConfig,
    description: "InLine",
    column: Column1,
    dataSource: ELEMENT_DATA1
  }
];
