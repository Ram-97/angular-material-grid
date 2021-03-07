import { Component, OnInit } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";
import { MatTableDataSource } from "@angular/material/table";
import { dataList } from "./data";
import { Column, DirtyData, TableConfig } from "./grid/grid.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";

  gridDataList: any = dataList;
  selectedData: any;

  dataSource: MatTableDataSource<any>;
  column: Array<Column>;
  tableConfig: TableConfig;
  closeRow: any;
  constructor() {}

  ngOnInit() {
    this.selectedData = this.gridDataList[0];
    this.column = this.selectedData.column;
    this.dataSource = new MatTableDataSource(this.selectedData.dataSource);
  }

  onSelectionChange(event: MatSelectChange) {
    if (event.value.description === "InLine") {
      this.tableConfig = event.value.config;
    } else {
      this.tableConfig = {};
    }

    this.column = event.value.column;
    this.dataSource = new MatTableDataSource(event.value.dataSource);
  }

  message(data: any) {
    console.log(data);
  }

  onRowClose(data: DirtyData) {
    console.log(data);
    this.closeRow = data;
  }
}
