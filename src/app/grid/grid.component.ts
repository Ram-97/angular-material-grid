import { Component, Input } from "@angular/core";

@Component({
  selector: "grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.css"]
})
export class GridComponent {
  @Input() dataSource: any;
  @Input() column: any;

  constructor() {}
}
