import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistogramPage } from './histogram';

@NgModule({
  declarations: [
    HistogramPage,
  ],
  imports: [
    IonicPageModule.forChild(HistogramPage),
  ],
})
export class HistogramPageModule {}
