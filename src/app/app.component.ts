import { Component, OnInit } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";
import { MatTableDataSource } from "@angular/material/table";
import { dataList } from "./data";
import { Column, TableConfig } from "./grid/grid.model";

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

  constructor() {}

  ngOnInit() {
    this.selectedData = this.gridDataList[0];
    this.column = this.selectedData.column;
    this.dataSource = new MatTableDataSource(this.selectedData.dataSource);
  }

  onSelectionChange(event: MatSelectChange) {
    if (event.value.description === "InLine") {
      this.tableConfig = {
        inline: {
          isDelete: true,
          isEdit: true
        }
      };
    }

    this.column = event.value.column;
    this.dataSource = new MatTableDataSource(event.value.dataSource);
    delete this.tableConfig?.inline;
  }
}
