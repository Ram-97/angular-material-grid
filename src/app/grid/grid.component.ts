import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
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
  editableColFormGrp: FormGroup;
  private editableColumn: Column[];

  //Incell
  selectedRowIndex: number = -1;
  private selectedRow: any;
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
      this.getEditableColFromMetaData();
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

  private getEditableColFromMetaData(){
    this.editableColFormGrp = new FormGroup({});
    this.editableColumn = this.columnMetaData.reduce((acc: Column[],col: Column)=>{
      if(col?.isEditable){
        this.editableColFormGrp.addControl(col.name, new FormControl(null,Validators.required));
        acc.push(col);
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
    this.initSelectedRowValToFormGrp();
    this.onRowOpen.emit(data);
  }

  private initSelectedRowValToFormGrp(){
    this.editableColumn.forEach((col: Column)=>{
      let value : any;
      switch(col.type){
        case this.columnType.DATE:
        case this.columnType.DATETIME:
            value = this.selectedRow[col.name] ? new Date(this.selectedRow[col.name]) : null;
          break;
        default:
          value =this.selectedRow[col.name];
          break;
      }
      this.editableColFormGrp.get(col.name).setValue(value);
    });
  }

  inlineDefaultActions(data: any, revert: boolean = false) {
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
    let dirtyFields = this.editableColumn.reduce((acc: any, col: Column) => {
      if(this.colTypeCheckForDirtyData(col,data)){
        this.selectedRow[col.name] = this.editableColFormGrp.get(col.name).value;
        acc[col.name] = this.selectedRow[col.name];
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

  private colTypeCheckForDirtyData(col: Column, data: any): boolean{
    let isDirty: boolean = false;
    switch(col.type){
      case this.columnType.DATE:
      case this.columnType.DATETIME:
        if(this.editableColFormGrp.get(col.name).value){
          if(!data[col.name]){
            isDirty= true;
          }else if (new Date(data[col.name]).toISOString() !== new Date(this.editableColFormGrp.get(col.name).value).toISOString()) {
            isDirty = true;
        }}
        break;
      default:
        if (data[col.name] !== this.editableColFormGrp.get(col.name).value) {
          isDirty = true;
        }
        break;
    }
      return isDirty;
  }

  omitSpecialChar(event: any){   
    let key = event.charCode; 
    return ((key > 47 && key < 58) || key == 45 || key == 46);
  }
}
