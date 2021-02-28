import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GridComponent } from "./grid/grid.component";
import { MaterialModule } from "./material/material.module";

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule],
  declarations: [AppComponent, GridComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
