import { Component, OnInit } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";
import { MatTableDataSource } from "@angular/material/table";
import { dataList } from "./data";
import { Column } from "./grid/grid.model";

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

  constructor() {}

  ngOnInit() {
    this.selectedData = this.gridDataList[0];
    this.column = this.selectedData.column;
    this.dataSource = new MatTableDataSource(this.selectedData.dataSource);
    console.log(this.gridDataList);
  }

  onSelectionChange(event: MatSelectChange) {
    this.column = event.value.column;
    this.dataSource = new MatTableDataSource(event.value.dataSource);
  }
}
