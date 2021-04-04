import { Component, OnInit } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";
import { MatTableDataSource } from "@angular/material/table";
import { AutoCompleteText, Column, DirtyData, TableConfig } from "projects/grid/src/lib/grid.model";
import { autoCompleteData, dataList } from "./data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = "Angular";

  gridDataList: any = dataList;
  selectedData: any;

  dataSource: MatTableDataSource<any>;
  column: Array<Column>;
  tableConfig: TableConfig;
  updateRow: any;
  deleteRow: any;

  autoCompleteFilterOption = autoCompleteData;
  updateAutoComplete: AutoCompleteText;

  showAddRow: boolean = false;
  constructor() {}

  ngOnInit() {
    this.selectedData = this.gridDataList[0];
    this.column = this.selectedData.column;
    this.dataSource = new MatTableDataSource(this.selectedData.dataSource);
  }

  onSelectionChange(event: MatSelectChange) {
    if (event.value.description === "InLine") {
      this.tableConfig = event.value.config;
      this.showAddRow = true;
    } else {
      this.tableConfig = {};
      this.showAddRow = false;
    }

    this.column = event.value.column;
    this.dataSource = new MatTableDataSource(event.value.dataSource);
  }

  message(data: any) {
    console.log(data);
  }

  onRowConfirm(data: DirtyData) {
    console.log(data);
    this.updateRow = data;
  }

  onRowDelete(data: any) {
    console.log(data);
    this.deleteRow = data;
    // let slicedData = this.dataSource.data.reduce((acc,x) => {
    //   if(x.position !== data.position){acc.push(x)}return acc;
    //   },[]);
    // this.dataSource = new MatTableDataSource(slicedData);
  }

  onAutoCompleteTextChange(data: AutoCompleteText) {
    let filterValue: string = data.text!.toLowerCase();
    this.updateAutoComplete = {
      column: data.column,
      data: this.autoCompleteFilterOption.filter(
        x => x.id.toLowerCase().indexOf(filterValue) === 0
      )
    };
  }
}
