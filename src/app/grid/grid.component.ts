import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Column, ExtraAction, TableConfig } from "./grid.model";

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

  @Output() onAction: EventEmitter<any> = new EventEmitter<any>();

  //Table
  columnMetaData: Array<Column>;
  displayedColumns: string[];
  hidden: boolean = false;

  //Action Column
  isEdit: boolean = false;
  isDelete: boolean = false;
  beforeAction: ExtraAction[] = [];
  afterAction: ExtraAction[] = [];
  inbetweenAction: ExtraAction[] = [];

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

  actionClick(data: any) {
    this.onAction.emit(data);
  }
}
