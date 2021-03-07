import { ColumnType, TableConfig } from "./grid/grid.model";

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

export const ELEMENT_DATA1: any = [
  { date:'Thu Mar 04 2021 00:00:00 GMT+0530 (India Standard Time)',position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { date:'Thu Mar 04 2021 00:00:00 GMT+0530 (India Standard Time)',position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { date:'Thu Mar 04 2021 00:00:00 GMT+0530 (India Standard Time)',position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { date:'Thu Mar 04 2021 00:00:00 GMT+0530 (India Standard Time)',position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { date:'Thu Mar 04 2021 00:00:00 GMT+0530 (India Standard Time)',position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { date:'Thu Mar 04 2021 00:00:00 GMT+0530 (India Standard Time)',position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { date:'Thu Mar 04 2021 00:00:00 GMT+0530 (India Standard Time)',position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { date:'Thu Mar 04 2021 00:00:00 GMT+0530 (India Standard Time)',position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { date:'Thu Mar 04 2021 00:00:00 GMT+0530 (India Standard Time)',position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { date:'Thu Mar 04 2021 00:00:00 GMT+0530 (India Standard Time)',position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" }
];

export const Column1 = [
  // {
  //   name: "date",
  //   title: "date",
  //   type: ColumnType.DATE,
  //   width: 100,
  //   separator: true,
  //   isEditable: true
  // },
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
    separator: true
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
    width: 100,
    separator: true
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
