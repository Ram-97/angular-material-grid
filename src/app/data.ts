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

export const ELEMENT_DATA1: any = [
  {
    dateTime: "2021-03-09 20:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 1,
    name: "Hydrogen",
    weight: 1.0079,
    symbol: "H"
  },
  {
    dateTime: "",
    date: "",
    position: 2,
    name: "Helium",
    weight: 4.0026,
    symbol: "He"
  },
  {
    dateTime: "2021-03-09 21:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 3,
    name: "Lithium",
    weight: 6.941,
    symbol: "Li"
  },
  {
    dateTime: "2021-03-09 18:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 4,
    name: "Beryllium",
    weight: 9.0122,
    symbol: "Be"
  },
  {
    dateTime: "2021-03-09 18:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 5,
    name: "Boron",
    weight: 10.811,
    symbol: "B"
  },
  {
    dateTime: "2021-03-09 18:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 6,
    name: "Carbon",
    weight: 12.0107,
    symbol: "C"
  },
  {
    dateTime: "2021-03-09 18:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 7,
    name: "Nitrogen",
    weight: 14.0067,
    symbol: "N"
  },
  {
    dateTime: "2021-03-09 18:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 8,
    name: "Oxygen",
    weight: 15.9994,
    symbol: "O"
  },
  {
    dateTime: "2021-03-09 18:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 9,
    name: "Fluorine",
    weight: 18.9984,
    symbol: "F"
  },
  {
    dateTime: "2021-03-09 18:30:00.000Z",
    date: "2021-03-09 18:30:00.000Z",
    position: 10,
    name: "Neon",
    weight: 20.1797,
    symbol: "Ne"
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
    cellOption: {
      dateTime: {
        min: new Date(2021, 0, 1),
        max: new Date(2021, 12, 0),
        showSeconds: true
      }
    }
  },
  {
    name: "date",
    title: "date",
    type: ColumnType.DATE,
    width: 100,
    separator: true,
    isEditable: true,
    cellOption: {
      date: {
        min: new Date(2021, 0, 1),
        max: new Date(2021, 12, 0)
      }
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
    cellOption: {
      validation: [Validators.email]
    }
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
    type: ColumnType.AUTOCOMPLETE,
    isEditable: true,
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

export const autoCompleteData: DropDown[] = [
  {
    id: "H",
    description: "Hydrogen"
  },
  {
    id: "He",
    description: "Helium"
  },
  {
    id: "Li",
    description: "Lithium"
  },
  {
    id: "Be",
    description: "Beryllium"
  },
  {
    id: "B",
    description: "Boron"
  },
  {
    id: "C",
    description: "Carbon"
  },
  {
    id: "N",
    description: "Nitrogen"
  },
  {
    id: "O",
    description: "Oxygen"
  },
  {
    id: "F",
    description: "Fluorine"
  },
  {
    id: "Ne",
    description: "Neon"
  }
];

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
