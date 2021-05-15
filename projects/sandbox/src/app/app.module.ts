import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "./material/material.module";
import { GridComponent } from "projects/grid/src/lib/grid.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    TranslateModule.forRoot()
  ],
  declarations: [AppComponent, GridComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
