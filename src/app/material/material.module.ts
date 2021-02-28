import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  imports: [MatTableModule, MatSelectModule, MatFormFieldModule],
  exports: [MatTableModule, MatSelectModule, MatFormFieldModule]
})
export class MaterialModule {}
