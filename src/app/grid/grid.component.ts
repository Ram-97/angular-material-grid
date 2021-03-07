import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from "@angular/core";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import {
  Column,
  ColumnType,
  DirtyData,
  Action,
  TableConfig
} from "./grid.model";

@Component({
  selector: "grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.css"]
})
export class GridComponent {
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  @Input() set column(data: Array<Column>) {
    this.initColumnMetaData(data);
  }
  @Input() set config(data: TableConfig) {
    this.initTableConfig(data);
  }
  @Input() set closeRow(data: DirtyData) {
    this.closeSelectedRow(data);
  }

  @Output() onAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() onRowOpen: EventEmitter<any> = new EventEmitter<any>();
  @Output() onRowClose: EventEmitter<any> = new EventEmitter<any>();

  //Table
  columnMetaData: Array<Column>;
  displayedColumns: string[];
  hidden: boolean = false;
  columnType = ColumnType;

  //Action Column
  isEdit: boolean = false;
  isDelete: boolean = false;
  beforeAction: Action[] = [];
  afterAction: Action[] = [];
  inbetweenAction: Action[] = [];

  //Incell Confirm Action
  editableColumn: string[] = [];
  disableConfirmAction: boolean;

  //Incell
  selectedRowIndex: number = -1;
  selectedRow: any;
  hasCancel: boolean = true;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor() {}

  private initColumnMetaData(data: Array<Column>) {
    if (!(data && data.length)) {
      this.hidden = true;
      return;
    }
    this.columnMetaData = data;
    this.displayedColumns = data.reduce(
      (acc: string[], curr: Column) => acc.concat(curr.name),
      []
    );
    this.hidden = false;
  }

  private initTableConfig(data: TableConfig) {
    if (!data) {
      return;
    }

    if (Object.keys(data).length === 0) {
      return;
    }

    if (data.hasOwnProperty("inline")) {
      this.isEdit = data.inline.isEdit;
      this.isDelete = data.inline.isDelete;
      this.displayedColumns.push("Action");
      this.initEditColumn();
      //For showing extra action button
      if (data.inline.hasOwnProperty("options")) {
        this.beforeAction = data.inline.options!.before
          ? data.inline.options!.before
          : [];
        this.afterAction = data.inline.options!.after
          ? data.inline.options!.after
          : [];
        this.inbetweenAction = data.inline.options!.inbetween
          ? data.inline.options!.inbetween
          : [];
      }
    }
  }

  private initEditColumn(){
    this.editableColumn = this.columnMetaData.reduce((acc: string[], curr: Column)=>{
      if(curr?.isEditable){
        acc.push(curr.name);
      }
      return acc;
    },[]);
  }

  private closeSelectedRow(data: DirtyData) {
    if (!data) {
      return;
    }
    this.dataSource.data[data.index] = data.selectedRow;
    this.selectedRowIndex = -1;
    this.table.renderRows();
  }

  rowOpen(rowIndex: number, data: any) {
    this.selectedRowIndex = rowIndex;
    this.selectedRow = JSON.parse(JSON.stringify(data));
    this.onRowOpen.emit(data);
    this.checkEditableColData();
  }

  checkEditableColData(){
    let disable: boolean = false;
    this.editableColumn.forEach((key: string)=>{
      if(!this.selectedRow[key].toString()){
        disable = true;
      }
    });
    this.disableConfirmAction = disable;
  }

  inlineEdit(data: any, revert: boolean = false) {
    let confirmData = this.getDirtyData(data);
    if (!confirmData) {
      this.selectedRowIndex = -1;
      return;
    }
    if (revert) {
      this.selectedRowIndex = -1;
      return;
    }
    this.onRowClose.emit(confirmData);
  }

  private getDirtyData(data: any) {
    let result: DirtyData = {} as DirtyData;
    let dirtyFields = Object.keys(data).reduce((acc: any, key: string) => {
      if (data[key] !== this.selectedRow[key]) {
        acc[key] = this.selectedRow[key];
      }
      return acc;
    }, {});

    if (Object.keys(dirtyFields).length === 0) {
      return;
    }

    result.index = this.selectedRowIndex;
    result.selectedRow = this.selectedRow;
    result.dirtyFields = dirtyFields;
    return result;
  }

  omitSpecialChar(event: any){   
    let key = event.charCode; 
    return ((key > 47 && key < 58) || key == 45 || key == 46);
  }
}
