import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleuserPage } from './detalleuser';

@NgModule({
  declarations: [
    DetalleuserPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleuserPage),
  ],
})
export class DetalleuserPageModule {}
