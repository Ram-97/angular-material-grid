import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GridComponent } from './grid.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [GridComponent],
  imports: [MaterialModule, TranslateModule],
  exports: [GridComponent]
})
export class GridModule {}
